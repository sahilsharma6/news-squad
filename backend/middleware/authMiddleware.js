import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

const protect = asyncHandler(async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : null;

  if (!token) {
    console.log("No token provided.");
    return res
      .status(401)
      .json({ message: "Not authorized, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    if (!req.user) {
      console.log("User not found.");
      return res.status(401).json({ message: "User not found" });
    }
    console.log("User found:", req.user);  

    next();

  } catch (err) {
    console.error("Token verification error:", err.message);
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
});

// Admin check for crud oprations middleware
const adminCRUD = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    return res
      .status(403)
      .json({ message: "Not authorized to perform admin CRUD operations" });
  }
});

const adminDashboard = asyncHandler(async (req, res) => {
  if (req.user && req.user.role === "admin") {
    return res.status(200).json({ message: "Admin Dashboard Access Granted" });
  } else {
    return res
      .status(403)
      .json({ message: "Not authorized to access the admin dashboard" });
  }
});

export { protect, adminDashboard,adminCRUD};
