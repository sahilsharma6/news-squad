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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await apiClient.get("/api/posts");
    setPosts(data.posts);
    // console.log(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await apiClient.delete(`/api/posts/${id}`);
    console.log("object deleted");
    fetchPosts();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">
          ALL POSTS
        </h2>
      </div>
      <div className="mt-8  border w-[]">
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] ">Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Category</TableHead>
              {/* <TableHead className="">Created By</TableHead> */}
              <TableHead className="">Created Date</TableHead>

              <TableHead className="w-[180px] text-center   ">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <TableRow key={post?._id} className="border-b-2 ">
                  <TableCell className="font-medium">{post?.title}</TableCell>
                  <TableCell className=" w-[200px]">
                    {/* {post?.content ? post.content.substring(0, 80) + "..." : ""} */}
                    {parse(post?.content)
                      ? parse(post.content.substring(0, 80) + "...")
                      : ""}
                  </TableCell>
                  <TableCell>{post?.category?.name}</TableCell>
                  {/* <TableCell>{post?.subcategory?.name}</TableCell> */}

                  <TableCell>{post?.updatedAt}</TableCell>

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
                        onClick={() => deletePost(post._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={15}>
                  {/* <Skeleton height={30} count={5} baseColor="#f1f1f1" /> */}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-end my-3 items-center ">
          <div className="  w-full mx-4 text-zinc-800">
            {/* Showing {currentPosts.length} of {posts.length} Results */}
          </div>
          {/* <div className="flex justify-end  w-full items-center">
            <span className="mr-2 w-full text-end hidden md:block">
              Post Per Page:
            </span>
            <Select onValueChange={handlePageSizeChange} defaultValue="5">
              <SelectTrigger className="bg-white border rounded">
                <SelectValue placeholder="Select Page Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="md:hidden">Post Per Page</SelectLabel>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="1000">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
