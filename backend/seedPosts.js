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
  },
  {
    views: 230,
    likes: 89,
    tags: ["technology", "gadgets", "innovation", "trends"],
    userId: ["60d5f3b8c0f8c32bc8b3b013"],
    title: "Top 10 Gadget Innovations to Watch in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2022/03/gadget-1024x684.jpg.webp",
    author: "John Doe",
    content:
      "Discover the latest innovations in the gadget world. From AI-driven devices to next-gen smart home technology, here’s what to expect in 2024.",
    introDescription: "Upcoming gadget trends shaping 2024.",
    category: "Technology",
  },
  {
    views: 180,
    likes: 76,
    tags: ["travel", "destinations", "vacation", "beaches"],
    userId: ["60d5f3b8c0f8c32bc8b3b014"],
    title: "Best Beach Destinations to Visit in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2021/09/beach-destinations-1024x684.jpg.webp",
    author: "Lisa Monroe",
    content:
      "Planning a beach vacation? Explore the most beautiful beach destinations of 2024, perfect for a relaxing and scenic getaway.",
    introDescription: "Top beach destinations for a perfect vacation.",
    category: "Travel",
  },
  {
    views: 95,
    likes: 35,
    tags: ["health", "fitness", "wellness", "lifestyle"],
    userId: ["60d5f3b8c0f8c32bc8b3b015"],
    title: "5 Fitness Trends You’ll See Everywhere in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2022/01/fitness-trends-1024x684.jpg.webp",
    author: "Alex Kim",
    content:
      "From wearable tech to virtual workouts, we cover the biggest fitness trends that will dominate in 2024.",
    introDescription: "Get ahead of the fitness trends coming in 2024.",
    category: "Health",
  },
  {
    views: 320,
    likes: 150,
    tags: ["movies", "awards", "celebrities", "red carpet"],
    userId: ["60d5f3b8c0f8c32bc8b3b016"],
    title: "Highlights from the 2024 Movie Awards Red Carpet",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2024/05/red-carpet-1024x684.jpg.webp",
    author: "Sophia Diaz",
    content:
      "Catch up on the glamour and style as the biggest celebrities walk the 2024 movie awards red carpet. Check out who wore what!",
    introDescription: "Best-dressed moments from the 2024 awards season.",
    category: "Entertainment",
  },
  {
    views: 240,
    likes: 98,
    tags: ["food", "recipes", "healthy eating", "nutrition"],
    userId: ["60d5f3b8c0f8c32bc8b3b017"],
    title: "Quick and Easy Healthy Recipes for Busy Weeknights",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/11/healthy-recipes-1024x684.jpg.webp",
    author: "Emily Chen",
    content:
      "From smoothies to one-pan dinners, these quick and easy recipes will keep you eating healthy even on the busiest nights.",
    introDescription: "Healthy meal ideas for those on the go.",
    category: "Food",
  },
  {
    views: 410,
    likes: 200,
    tags: ["business", "entrepreneurship", "startups", "innovation"],
    userId: ["60d5f3b8c0f8c32bc8b3b018"],
    title: "The Startup Scene in 2024: What Entrepreneurs Should Know",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2022/04/startup-scene-1024x684.jpg.webp",
    author: "Nathan Lee",
    content:
      "Explore the evolving startup landscape, emerging trends, and key insights for aspiring entrepreneurs in 2024.",
    introDescription: "Essential insights for startups in the year ahead.",
    category: "Business",
  }, 
  {
    views: 320,
    likes: 130,
    tags: ["vogue", "fashion", "style", "runway"],
    userId: ["60d5f3b8c0f8c32bc8b3b020"],
    title: "Vogue's Runway Recap: Top Trends from Fashion Week",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/02/fashion-week-1024x684.jpg.webp",
    author: "Maria Lopez",
    content:
      "Catch up on the boldest trends and styles that emerged from this season's fashion week. Get inspired by the leading designers and their runway masterpieces.",
    introDescription: "Highlights from the latest Fashion Week by Vogue.",
    category: "Vogue",
  },
  {
    views: 240,
    likes: 85,
    tags: ["vogue", "editorial", "high fashion", "luxury"],
    userId: ["60d5f3b8c0f8c32bc8b3b021"],
    title: "Inside Vogue: How Editorials Shape Fashion Culture",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/04/vogue-editorial-1024x684.jpg.webp",
    author: "Hannah Smith",
    content:
      "An inside look at Vogue's iconic editorials, examining how they influence high fashion culture and shape industry standards.",
    introDescription: "Explore the impact of Vogue's editorials on fashion.",
    category: "Vogue",
  },
  {
    views: 400,
    likes: 150,
    tags: ["health", "wellness", "workouts", "mindfulness"],
    userId: ["60d5f3b8c0f8c32bc8b3b022"],
    title: "Health & Fitness: Building a Mindful Workout Routine",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/05/mindful-workout-1024x684.jpg.webp",
    author: "James Anderson",
    content:
      "Learn how to incorporate mindfulness into your daily workouts to boost physical and mental well-being. From breathing techniques to workout sequences, we cover it all.",
    introDescription: "Boost your workout routine with mindfulness.",
    category: "Health & Fitness",
  },
  {
    views: 290,
    likes: 95,
    tags: ["nutrition", "wellness", "diets", "lifestyle"],
    userId: ["60d5f3b8c0f8c32bc8b3b023"],
    title: "Top Health & Fitness Trends to Watch in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/06/fitness-trends-1024x684.jpg.webp",
    author: "Laura Kim",
    content:
      "Stay up-to-date with the most popular Health & Fitness trends of 2024, from plant-based diets to digital health apps.",
    introDescription: "Explore the latest trends in Health & Fitness.",
    category: "Health & Fitness",
  },
  {
    views: 210,
    likes: 88,
    tags: ["travel", "gadgets", "tech", "innovation"],
    userId: ["60d5f3b8c0f8c32bc8b3b024"],
    title: "Top 5 Gadgets to Take on Your Next Travel Adventure",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/07/travel-gadgets-1024x684.jpg.webp",
    author: "Samantha Brown",
    content:
      "Planning a trip? Discover the best travel gadgets that will make your adventure more convenient and memorable.",
    introDescription: "Essential gadgets for your next journey.",
    category: "Travel",
  },
  {
    views: 175,
    likes: 70,
    tags: ["destinations", "gadgets", "travel", "gear"],
    userId: ["60d5f3b8c0f8c32bc8b3b025"],
    title: "Explore the World: Best Travel Gear for Every Destination",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/08/travel-gear-1024x684.jpg.webp",
    author: "Michael Torres",
    content:
      "Whether you’re headed to the mountains or the beach, this guide covers the top travel gear to pack for every destination.",
    introDescription: "Top travel gear recommendations for every trip.",
    category: "Travel",
  },
  {
    views: 180,
    likes: 60,
    tags: ["recipe", "quick meals", "family dinner", "healthy eating"],
    userId: ["60d5f3b8c0f8c32bc8b3b026"],
    title: "5 Quick and Delicious Dinner Recipes for Busy Nights",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/09/quick-dinner-1024x684.jpg.webp",
    author: "Emma White",
    content:
      "Need dinner on the table fast? Try these five quick, delicious, and healthy recipes perfect for busy weeknights.",
    introDescription: "Quick and easy dinner ideas for busy families.",
    category: "Recipe",
  },
  {
    views: 270,
    likes: 120,
    tags: ["baking", "desserts", "holiday recipes", "sweet treats"],
    userId: ["60d5f3b8c0f8c32bc8b3b027"],
    title: "Holiday Baking Guide: Best Dessert Recipes of the Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/10/holiday-baking-1024x684.jpg.webp",
    author: "Anna Baker",
    content:
      "Get ready for the holiday season with these delicious dessert recipes. From classic pies to modern treats, we've got something for every sweet tooth.",
    introDescription: "Delicious holiday dessert recipes to try.",
    category: "Recipe",
  },
  {
    views: 310,
    likes: 140,
    tags: ["music", "concerts", "artists", "festivals"],
    userId: ["60d5f3b8c0f8c32bc8b3b028"],
    title: "Top 10 Music Festivals to Attend in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/11/music-festival-1024x684.jpg.webp",
    author: "Oliver King",
    content:
      "Get ready to groove! Here’s our roundup of the top music festivals worldwide that you should mark on your calendar for 2024.",
    introDescription: "Must-attend music festivals in 2024.",
    category: "Music",
  },
  {
    views: 230,
    likes: 95,
    tags: ["albums", "new releases", "music trends", "2024"],
    userId: ["60d5f3b8c0f8c32bc8b3b029"],
    title: "Music Trends 2024: New Albums to Look Forward To",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/12/music-albums-1024x684.jpg.webp",
    author: "Sophia Green",
    content:
      "From chart-topping artists to indie debuts, discover the most anticipated album releases of 2024.",
    introDescription: "Upcoming album releases and music trends for 2024.",
    category: "Music",
  },
  {
    views: 150,
    likes: 60,
    tags: ["lifestyle", "minimalism", "wellness", "home decor"],
    userId: ["60d5f3b8c0f8c32bc8b3b030"],
    title: "Embrace Minimalism: How to Declutter Your Life in 2024",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/13/minimalism-lifestyle-1024x684.jpg.webp",
    author: "Jessica White",
    content:
      "Learn how minimalism can help you live a more fulfilled and organized life. From home decor to daily habits, start decluttering today.",
    introDescription: "Simplify and declutter with minimalism.",
    category: "Style",
  },
  {
    views: 190,
    likes: 78,
    tags: ["productivity", "self-care", "lifestyle", "wellness"],
    userId: ["60d5f3b8c0f8c32bc8b3b031"],
    title: "Balancing Productivity and Self-Care in a Busy World",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/14/productivity-1024x684.jpg.webp",
    author: "William Blake",
    content:
      "Explore ways to balance productivity and self-care in a busy world, from effective time management tips to stress-relief techniques.",
    introDescription: "Find the right balance between work and wellness.",
    category: "Style",
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
    category: "Gadgets",
  },
  {
    views: 250,
    likes: 85,
    tags: ["gadgets", "smartphones", "technology", "AI"],
    userId: ["60d5f3b8c0f8c32bc8b3b004"],
    title: "AI-Powered Smartphones: The Future of Mobile Technology",
    image: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/11/ai-smartphone-1024x684.jpg.webp",
    author: "John Doe",
    content: "AI-powered smartphones are revolutionizing the way we interact with mobile devices. From AI-driven cameras to smarter user interfaces, discover how this technology will shape the future of mobile gadgets.",
    introDescription: "Exploring the future of smartphones with AI-powered features that enhance performance and user experience.",
    category: "Gadgets"
  },
  {
    views: 350,
    likes: 120,
    tags: ["gadgets", "wearables", "fitness", "technology"],
    userId: ["60d5f3b8c0f8c32bc8b3b005"],
    title: "The Best Fitness Gadgets of 2024: Track Your Health Smarter",
    image: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/12/fitness-gadget-1024x684.jpg.webp",
    author: "Jane Smith",
    content: "Fitness gadgets have evolved over the years to offer better health tracking. From heart-rate monitors to smartwatches, here are the best gadgets to track your health in 2024.",
    introDescription: "Stay ahead in your fitness journey with the top gadgets of 2024, designed to help you monitor and improve your health.",
    category: "Gadgets"
  },
  {
    views: 120,
    likes: 45,
    tags: ["gadgets", "AI", "smart home", "tech trends"],
    userId: ["60d5f3b8c0f8c32bc8b3b006"],
    title: "Smart Home Devices You Can't Live Without in 2024",
    image: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2023/11/smart-home-gadgets-1024x684.jpg.webp",
    author: "Chris Johnson",
    content: "Smart home gadgets are transforming the way we interact with our living spaces. From voice-controlled assistants to intelligent lighting, discover the devices that will elevate your home in 2024.",
    introDescription: "Upgrade your living space with the latest in smart home technology. These gadgets are a must-have for every modern home.",
    category: "Gadgets"
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
    await mongoose.connect("mongodb://127.0.0.1:27017/newssquad", {
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
