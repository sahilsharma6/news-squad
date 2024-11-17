import express from "express";
const router = express.Router();
import {
  getPosts,
  getPostsById,
  getPostByCategory,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postController.js";


import { protect, adminCRUD } from "../middleware/authMiddleware.js";

router.route("/").get(getPosts).post(protect,adminCRUD, createPost);
router.route("/:id").get(getPostsById).delete(protect, adminCRUD, deletePost).put(protect, adminCRUD, updatePost);
router.route("/category/:category").get(getPostByCategory);

export default router;
