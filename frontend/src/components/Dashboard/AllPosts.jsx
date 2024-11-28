import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [sorting, setSorting] = useState("createdAt");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await apiClient.get("/posts");
      const sortedPosts = [...data.posts].sort((a, b) => {
        if (sorting === "createdAt") {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        } else if (sorting === "views") {
          return b.views - a.views;
        } else if (sorting === "likes") {
          return b.likes - a.likes;
        }
        return 0;
      });
      setPosts(sortedPosts);
      setFilteredPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [sorting]);

  const deletePost = async () => {
    const token = localStorage.getItem("token");

    try {
      await apiClient.delete(`/posts/${postToDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchPosts();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting post:", error.response ? error.response.data : error.message);
    }
  };

  const openModal = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const downloadCSV = () => {
    const header = ["Title", "Category", "Created Date", "Views", "Likes", "Content"];
    const rows = filteredPosts.map((post) => [
      post.title,
      post.category?.name || "Uncategorized",
      new Date(post.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      post.views,
      post.likes,
      post.content.substring(0, 80) + "...",
    ]);

    const csvContent = [
      header.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "posts.csv";
    link.click();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const filtered = posts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const contentMatch = post.content.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || contentMatch;
    });

    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="container h-screen overflow-auto mx-auto p-6">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">ALL POSTS</h2>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or content..."
          className="w-full sm:w-1/3 p-2 border rounded-md mb-4 sm:mb-0"
        />
        <div className="flex gap-4">
          <Select value={sorting} onValueChange={setSorting}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort Posts</SelectLabel>
                <SelectItem value="createdAt">Created At</SelectItem>
                <SelectItem value="views">Views</SelectItem>
                <SelectItem value="likes">Likes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="primary" className="bg-black text-white" onClick={downloadCSV}>
            Download CSV
          </Button>
        </div>
      </div>

      <div className="mt-8 border w-full">
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead className="w-[180px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <TableRow key={post?._id} className="border-b-2">
                  <TableCell className="font-medium">{post?.title}</TableCell>
                  <TableCell className="w-[200px]">
                    {parse(post?.content ? post.content.substring(0, 80) + "..." : "")}
                  </TableCell>
                  <TableCell>{post?.category?.name || "Uncategorized"}</TableCell>
                  <TableCell>
                    {new Date(post?.updatedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/dashboard/EditPost/${post._id}`}>
                        <Button variant="outline" className="w-24">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        className="w-24"
                        onClick={() => openModal(post._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-800 py-4">
                  No posts found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        <Button
          variant="outline"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {[...Array(Math.ceil(filteredPosts.length / postsPerPage))].map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "solid" : "outline"}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
        >
          Next
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this post?
            </h2>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={deletePost}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
