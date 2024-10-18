export default function HorizontalBlogPosts({ post }) {
  return (
    <article className="bg-white animate-fadeSlideDown   rounded-lg overflow-hidden shadow-lg">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
          {post.category}
        </span>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm">{post.date}</p>
      </div>
    </article>
  );
}
