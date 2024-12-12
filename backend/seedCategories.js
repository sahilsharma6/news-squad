import mongoose from "mongoose";
import Category from "./models/categoryModel.js"; 

// Database URI
const dbURI = "mongodb://localhost:27017/newssquad";

// Function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); 
  }
};

// Categories to seed
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
  { _id: "6730d55777b0626758f6f689", name: "MakeitModern" },
];

// Function to seed categories
const seedCategories = async () => {
  try {
    console.log("Seeding categories...");
    
    // Delete all existing categories before seeding new ones
    const deleted = await Category.deleteMany();
    console.log(`${deleted.deletedCount} categories deleted.`);

    // Insert the new categories
    const inserted = await Category.insertMany(categories);
    console.log(`${inserted.length} categories seeded successfully!`);
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    mongoose.connection.close(); // Close the database connection
    console.log("Database connection closed.");
  }
};

// Run the script
const runSeeder = async () => {
  await connectToDatabase(); // First, connect to the database
  await seedCategories(); // Then, seed the categories
};

runSeeder();
