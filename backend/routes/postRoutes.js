import express from "express";
const router = express.Router();
import {
  getPosts,
  getPostsById,
  getPostByCategory,
  createPost,
  deletePost,
  updatePost,
  likePost,
  dislikePost,
  getSearchedPosts,
  likedPost,
} from "../controllers/postController.js";
import upload from "../utils/thumbnailImgmulter.js";

import { protect, adminCRUD } from "../middleware/authMiddleware.js";

router.route("/search").get(getSearchedPosts);

router
  .route("/")
  .get(getPosts)
  .post(protect, adminCRUD, upload.single("thumbnail"), createPost);


router
  .route("/:id")
  .get(getPostsById)
  .delete(protect, adminCRUD, deletePost)
  .put(protect, adminCRUD, updatePost);

router.route("/category/:category").get(getPostByCategory);
router.route("/like/:id").put(protect, likePost);
router.route("/dislike/:id").put(protect, dislikePost);
router.route("/liked/:id").get(protect, likedPost);

export default router;
