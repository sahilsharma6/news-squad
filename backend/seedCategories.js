import mongoose from 'mongoose';
import Category from './models/category.Model';


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/news-squad', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define categories
const categories = [
    { categoryName: "Politics", description: "News related to government, elections, and political affairs." },
    { categoryName: "Business", description: "Financial markets, corporate news, and economic updates." },
    { categoryName: "Technology", description: "Latest advancements in tech, gadgets, and innovation." },
    { categoryName: "Health", description: "News about medical breakthroughs, healthcare policies, and wellness tips." },
    { categoryName: "Science", description: "Updates on scientific research, discoveries, and space exploration." },
    { categoryName: "Sports", description: "Coverage of sports events, players, and major tournaments." },
    { categoryName: "Entertainment", description: "Celebrity news, movies, TV shows, and pop culture." },
    { categoryName: "World", description: "International news and global events." },
    { categoryName: "Lifestyle", description: "Fashion, travel, food, and personal development." },
    { categoryName: "Environment", description: "Climate change, wildlife, and sustainability." },
    { categoryName: "Education", description: "News on schools, universities, and education policies." },
    { categoryName: "Opinion", description: "Editorials, opinions, and analysis pieces." }
];

// Insert categories into the database
const seedCategories = async () => {
    try {
        await Category.insertMany(categories);
        console.log("Categories have been added successfully.");
        mongoose.connection.close(); // Close the connection after seeding
    } catch (error) {
        console.error("Error seeding categories:", error);
        mongoose.connection.close();
    }
};

// Run the function
seedCategories();
