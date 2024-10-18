const router = express.Router();

import express from "express";
import * as categoryController from "../controllers/categoryController.js";

// Route to create a new category
router.post("/", categoryController.createCategory);

// Route to get all categories
router.get("/", categoryController.getAllCategories);

// Route to get a category by ID
router.get("/:id", categoryController.getCategoryById);

// Route to update a category
router.put("/:id", categoryController.updateCategory);

// Route to delete a category
router.delete("/:id", categoryController.deleteCategory);

export default router;
