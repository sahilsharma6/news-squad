import asyncHandler from "../middleware/asyncHandler.js";
import Post from "../models/postModel.js";

//@desc    Fetch all posts
//@route   GET /api/posts
//@access   Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
}); 

//@desc    Fetch a blogs
//@route   GET /api/blogs/:id
//@access   Public
const getPostsById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    return res.json(post);
  } else { 
    res.status(404);
    throw new Error("Post not found");
  }
});

export { getPosts, getPostsById}