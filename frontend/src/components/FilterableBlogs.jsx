import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HorizontalBlogPosts from "./HorizontalBlogPosts";

const categories = [
  "All",
  "New Look",
  "Street Fashion",
  "Style Hunter",
  "Vogue",
];
const blogPosts = [
  {
    id: 1,
    title: "Fashion Outfit Ideas From the Biggest Instagram Influencers",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 2,
    title: "Style Spy: Fashion Model Goes Casual in Faux Fur and Plaid",
    date: "August 7, 2019",
    category: "New Look",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/24-1024x683.jpg.webp",
  },
  {
    id: 3,
    title: "Street Fashion Trends Dominating 2024",
    date: "August 8, 2019",
    category: "Street Fashion",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/25-1024x683.jpg.webp",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Achieving the Style Hunter Look",
    date: "August 9, 2019",
    category: "Style Hunter",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/26-1024x683.jpg.webp",
  },
  {
    id: 5,
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 6,
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 7,
    title: "Top Fashion Moments Captured on the Streets of Milan",
    date: "August 8, 2019",
    category: "Street Fashion",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/27-1024x683.jpg.webp",
  },
  {
    id: 8,
    title: "New Look: The Boldest Fashion Choices This Year",
    date: "August 8, 2019",
    category: "New Look",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-1024x683.jpg.webp",
  },
  {
    id: 9,
    title: "Style Hunter: Master the Art of Timeless Fashion",
    date: "August 9, 2019",
    category: "Style Hunter",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-1024x683.jpg.webp",
  },
  {
    id: 10,
    title: "Vogue’s Top Picks for Fashion Week 2024",
    date: "August 10, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-1024x683.jpg.webp",
  },
];

export default function FilterableBlog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="w-full bg-white z-[999999]">
      <div className="flex">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <main className="flex-1 px-4 py-8 ">
          <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPosts.slice(0, 4).map((post) => (
              <HorizontalBlogPosts key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-200">
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onMouseEnter={() => setActiveCategory(category)}
              className={`text-left w-full py-2 px-4 rounded ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
