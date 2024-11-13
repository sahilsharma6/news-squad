import mongoose from "mongoose";
import Post from "./models/postModel.js"; // Adjust path based on your project structure
import Category from "./models/categoryModel.js"; // Adjust path based on your project structure

const newsDataJson = [
  {
    views: 120,
    likes: 45,
    tags: ["fashion", "influencers", "instagram", "outfits"],
    userId: ["60d5f3b8c0f8c32bc8b3b002"],
    title: "Fashion Outfit Ideas From the Biggest Instagram Influencers",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "This is a sample content for the fashion outfit ideas from Instagram influencers. Stay tuned for more updates.",
    introDescription:
      "Fashion ideas from the biggest influencers on Instagram.",
    category: "Fashion",
  }, {
    views: 120,
    likes: 45,
    tags: ["fashion", "influencers", "instagram", "outfits"],
    userId: ["60d5f3b8c0f8c32bc8b3b002"],
    title: "Fashion Outfit Ideas From the Biggest Instagram Influencers",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "This is a sample content for the fashion outfit ideas from Instagram influencers. Stay tuned for more updates.",
    introDescription:
      "Fashion ideas from the biggest influencers on Instagram.",
    category: "Fashion",
  },
  {
    views: 98,
    likes: 32,
    tags: ["style", "casual", "plaid", "fashion models"],
    userId: ["60d5f3b8c0f8c32bc8b3b003"],
    title: "Style Spy: Fashion Model Goes Casual in Faux Fur and Plaid",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "Discover the latest casual fashion trends as we dive into the world of faux fur and plaid outfits.",
    introDescription: "The latest casual fashion featuring faux fur and plaid.",
    category: "Style",
  },
  {
    views: 120,
    likes: 45,
    tags: ["fashion", "influencers", "instagram", "outfits"],
    userId: ["60d5f3b8c0f8c32bc8b3b002"],
    title: "Fashion Outfit Ideas From the Biggest Instagram Influencers",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "This is a sample content for the fashion outfit ideas from Instagram influencers. Stay tuned for more updates.",
    introDescription:
      "Fashion ideas from the biggest influencers on Instagram.",
    category: "Fashion",
  },
  {
    views: 98,
    likes: 32,
    tags: ["style", "casual", "plaid", "fashion models"],
    userId: ["60d5f3b8c0f8c32bc8b3b003"],
    title: "Style Spy: Fashion Model Goes Casual in Faux Fur and Plaid",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "Discover the latest casual fashion trends as we dive into the world of faux fur and plaid outfits.",
    introDescription: "The latest casual fashion featuring faux fur and plaid.",
    category: "Style",
  },
  {
    views: 210,
    likes: 76,
    tags: ["shoes", "winter", "fashion", "cold season"],
    userId: ["60d5f3b8c0f8c32bc8b3b004"],
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "Check out these fabulous over-the-ankle shoes that are perfect for the winter season and beyond.",
    introDescription: "Top picks for over-the-ankle shoes this winter season.",
    category: "Shoes",
  },
  {
    views: 152,
    likes: 56,
    tags: ["gala", "nightwear", "fashion", "events"],
    userId: ["60d5f3b8c0f8c32bc8b3b005"],
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Sophie Lee",
    content:
      "Gala night is the perfect occasion to showcase your style. Here's what fashion experts have to say about what to wear.",
    introDescription: "Expert advice on dressing for a gala night event.",
    category: "Events",
  },
  {
    views: 350,
    likes: 102,
    tags: ["fashion", "shoes", "style", "fall fashion"],
    userId: ["60d5f3b8c0f8c32bc8b3b006"],
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Rachel Green",
    content:
      "Discover the best over-the-ankle shoes to keep your feet warm and stylish this fall.",
    introDescription: "Perfect shoes for the cold fall season.",
    category: "Shoes",
  },
  {
    views: 295,
    likes: 88,
    tags: ["gala", "fashion advice", "nightwear", "red carpet"],
    userId: ["60d5f3b8c0f8c32bc8b3b007"],
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Sophie Lee",
    content:
      "Get the best red carpet advice from top designers and influencers on what to wear for a gala event.",
    introDescription: "Red carpet advice from top fashion designers.",
    category: "Events",
  },
  {
    views: 145,
    likes: 50,
    tags: ["style", "winter", "casual", "trends"],
    userId: ["60d5f3b8c0f8c32bc8b3b008"],
    title: "Winter Style Guide: Must-Have Casual Outfits for 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Emily Austin",
    content:
      "Learn how to style casual outfits that are perfect for winter. From cozy jackets to stylish boots, we have it all covered.",
    introDescription:
      "Stay warm and stylish this winter with these casual outfit ideas.",
    category: "Style",
  },
  {
    views: 310,
    likes: 120,
    tags: ["fashion", "party", "outfits", "gala"],
    userId: ["60d5f3b8c0f8c32bc8b3b009"],
    title: "Party Perfect: The Best Outfits for a Night to Remember",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Chloe Martin",
    content:
      "Get inspired with the best party outfits that will make you stand out at any event. From glamorous dresses to chic suits, we have you covered.",
    introDescription: "Find the perfect party outfit with our latest guide.",
    category: "Fashion",
  },
  {
    views: 180,
    likes: 64,
    tags: ["shoes", "winter", "fashion", "outdoor"],
    userId: ["60d5f3b8c0f8c32bc8b3b010"],
    title: "Winter Footwear Trends: Best Outdoor Shoes to Stay Warm and Dry",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Carlos Ruiz",
    content:
      "Check out these top outdoor footwear options to keep your feet dry and stylish during the cold winter months.",
    introDescription: "Top winter footwear trends for staying warm and dry.",
    category: "Shoes",
  },
  {
    views: 250,
    likes: 99,
    tags: ["gala", "fashion", "red carpet", "celebrity"],
    userId: ["60d5f3b8c0f8c32bc8b3b011"],
    title: "Red Carpet Moments: The Best Dressed Celebrities of 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Mia Taylor",
    content:
      "Take a look at the best-dressed celebrities on the red carpet in 2024. From bold colors to stunning gowns, we break it all down.",
    introDescription: "Red carpet fashion moments from 2024’s top events.",
    category: "Events",
  },
  {
    views: 140,
    likes: 55,
    tags: ["fashion", "street style", "outfits", "trends"],
    userId: ["60d5f3b8c0f8c32bc8b3b012"],
    title: "Street Style: The Best Outfits Spotted Around the City",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Lily Parker",
    content:
      "Get inspired by the best street style outfits spotted around the city. From casual looks to edgy trends, we’ve got you covered.",
    introDescription: "Top street style looks you’ll want to recreate.",
    category: "Fashion",
  },

  {
    views: 210,
    likes: 76,
    tags: ["shoes", "winter", "fashion", "cold season"],
    userId: ["60d5f3b8c0f8c32bc8b3b004"],
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    author: "Armin Vans",
    content:
      "Check out these fabulous over-the-ankle shoes that are perfect for the winter season and beyond.",
    introDescription: "Top picks for over-the-ankle shoes this winter season.",
    category: "Shoes",
  },
  // Add additional posts as needed
];

const seedPosts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/newssquad", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Post.deleteMany({});

    // Fetch categories to get their ObjectIds
    const categories = await Category.find({});
    const categoryMap = categories.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    }, {});

    // Update posts with the correct category ObjectId
    const updatedNewsData = newsDataJson.map((post) => ({
      ...post,
      category: categoryMap[post.category] || null,
    }));

    await Post.insertMany(updatedNewsData);

    console.log("Posts successfully seeded!");
  } catch (error) {
    console.error("Error seeding posts:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedPosts();
