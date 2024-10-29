import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import mongoose from 'mongoose';

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ? req.headers.authorization.split(' ')[1]
    : null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
       console.log(decoded);
      req.user = await User.findById(new mongoose.Types.ObjectId(decoded.userId)).select('-password');
      console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log(error);
    res.status(401).json({ message: 'Not authorized, no token' });
  }
});

// Admin middleware
const admin = asyncHandler(async (req, res) => {
  if (req.user && req.user.role === "admin") {
    return res.status(200).json({isAdmin: true});
  } else {
    return res.status(403).json({ message: "Not authorized as an admin" });
  }
});

export { protect, admin };
