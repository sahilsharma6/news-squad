import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";
import Post from "../models/postModel.js";

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const { category, page = 1, limit = 4 } = req.query;
  
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  let query = {};
  
  if (category) {
    console.log(category);
   const CategoryId = await Category.findOne({name:category });

    // console.log(CategoryId);
    
    if (!CategoryId) {
      return res.json({ res: true, message: "Cannot find the data", find: false });
    }
    query.category = CategoryId._id;
  }

  try {
    // console.log('q',query);
    
    const totalPosts = await Post.countDocuments(query); 
      // console.log('t',totalPosts);
      
    const posts = await Post.find(query)
      .skip((pageNum - 1) * limitNum) 
      .limit(limitNum); 

    if (!posts.length) {
      return res.json({ res: true, message: "Cannot find the data", find: false });
    }

    res.json({
      posts,
      currentPage: pageNum,
      totalPages: Math.ceil(totalPosts / limitNum),
      totalPosts,
      find: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
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
  const categoryName = req.params.category;
  const { page = 1, limit = 4 } = req.query;

  const category = await Category.findOne({ name: categoryName });

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  const posts = await Post.find({ category: category._id })
    .populate('category', 'name')
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const totalPosts = await Post.countDocuments({ category: category._id });

  if (posts.length > 0) {
    res.json({
      posts,
      totalPosts,
    });
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
