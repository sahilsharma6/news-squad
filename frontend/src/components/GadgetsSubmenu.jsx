import HorizontalBlogPosts from "./HorizontalBlogPosts";

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
    title: "Style Spy: Fashion Model Goes Casual in Faux Furr and Plaid",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 3,
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 4,
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
  {
    id: 4,
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    date: "August 7, 2019",
    category: "Vogue",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-1024x683.jpg.webp",
  },
];

export default function GadgetsSubmenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {blogPosts.map((post) => (
        <HorizontalBlogPosts key={post.id} post={post} />
      ))}
    </div>
  );
}
