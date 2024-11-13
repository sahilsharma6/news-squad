import express from "express";
const router = express.Router();
import {
  getPosts,
  getPostsById,
  getPostByCategory,
  createPost,
  deletePost,
} from "../controllers/postController.js";


import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPosts).post(protect, admin, createPost);
router.route("/:id").get(getPostsById).delete(protect, admin, deletePost);
router.route("/category/:category").get(getPostByCategory);

export default router;
