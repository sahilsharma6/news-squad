import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { ToastClose } from "@radix-ui/react-toast";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const fetchPosts = async () => {
    const { data } = await apiClient.get("/api/posts");
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await apiClient.delete(`/api/posts/${postToDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchPosts();
      setIsModalOpen(false);
      setToastMessage("Post deleted successfully!");
      setIsToastVisible(true);
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

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  return (
    <ToastProvider>
      <div className="container mx-auto p-6">
        <div className="border-b mb-4 pb-2">
          <h2 className="text-white text-sm bg-black inline-block p-2">
            ALL POSTS
          </h2>
        </div>
        <div className="mt-8 border w-[]">
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] ">Title</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="">Created Date</TableHead>
                <TableHead className="w-[180px] text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts?.length && posts?.length > 0 ? (
                posts.map((post) => (
                  <TableRow key={post?._id} className="border-b-2 ">
                    <TableCell className="font-medium">{post?.title}</TableCell>
                    <TableCell className=" w-[200px]">
                      {parse(post?.content)
                        ? parse(post.content.substring(0, 80) + "...")
                        : ""}
                    </TableCell>
                    <TableCell>{post?.category?.name}</TableCell>
                    <TableCell>{post?.updatedAt.split("T")[0]}</TableCell>
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

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this post?</h2>
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

        <ToastViewport />
        {isToastVisible && (
          <Toast className="text-green-700 bottom-96" onOpenChange={setIsToastVisible} >
            <ToastTitle>Success</ToastTitle>
            <ToastDescription>{toastMessage}</ToastDescription>
            
          </Toast>
        )}
      </div>
    </ToastProvider>
  );
};

export default AllPosts;
