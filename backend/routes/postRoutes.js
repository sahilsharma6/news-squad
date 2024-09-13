import express from "express";
const router = express.Router(); 
import {
  getPosts,
  getPostsById,
} from "../controllers/postController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPosts)
//.post( createPost);
router.route("/:id").get(getPostsById)
//.put(protect, admin, updatePost).delete(protect, admin, deletePost);

export default router;
 