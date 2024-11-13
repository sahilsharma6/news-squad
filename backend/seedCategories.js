import mongoose from "mongoose";
import Category from "./models/categoryModel.js"; // Adjust the path as needed

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/newssquad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const categories = [
  { _id: "6730d55777b0626758f6f677", name: "Fashion" },
  { _id: "6730d55777b0626758f6f678", name: "Style" },
  { _id: "6730d55777b0626758f6f679", name: "Shoes" },
  { _id: "6730d55777b0626758f6f680", name: "Events" },
  { _id: "6730d55777b0626758f6f681", name: "Architecture" },
  { _id: "6730d55777b0626758f6f682", name: "Vogue" },
  { _id: "6730d55777b0626758f6f683", name: "Health & Fitness" },
  { _id: "6730d55777b0626758f6f684", name: "Travel" },
  { _id: "6730d55777b0626758f6f685", name: "Recipe" },
  { _id: "6730d55777b0626758f6f686", name: "Music" },
  { _id: "6730d55777b0626758f6f687", name: "Lifestyle" },
  { _id: "6730d55777b0626758f6f688", name: "Gadgets" },
];

const seedCategories = async () => {
  try {
    await Category.deleteMany();  
    await Category.insertMany(categories);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedCategories();
