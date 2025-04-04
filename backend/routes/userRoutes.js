import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

import {
  protect,
  adminDashboard,
  adminCRUD,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/check-admin").get(protect, (req, res) => {
  console.log(req);
  if (req.user && req.user.role === "admin") {
    return res
      .status(200)
      .json({ message: "Admin access granted", isAdmin: true });
  } else {
    return res.status(403).json({ message: "Not authorized as an admin" });
  }
});

router
  .route("/user/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/user/:id").delete(protect, adminCRUD, deleteUser);

router
  .route("/users")
  .get(protect, adminCRUD, getUsers)
  .put(protect, adminCRUD, updateUser);

export default router;
