import asyncHandler from "../middleware/asyncHandler.js";
import Post from "../models/postModel.js";

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate('category', 'name'); // Populate category name
  res.json(posts);
});

// @desc    Fetch a post by ID
// @route   GET /api/posts/:id
// @access  Public
const getPostsById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category', 'name'); // Populate category name

  if (post) {
    post.views = (post.views || 0) + 1;
    await post.save();
    return res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Fetch posts by category
// @route   GET /api/posts/category/:category
// @access  Public
const getPostByCategory = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: req.params.category }).populate('category', 'name'); // Populate category name

  if (posts.length > 0) {
    return res.json(posts);
  } else {
    res.status(404);
    throw new Error("No posts found for this category");
  }
});

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private/Admin
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.user._id,
    category: req.body.category,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc    Delete a post by ID
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

export { getPosts, getPostsById, getPostByCategory, createPost, deletePost };
