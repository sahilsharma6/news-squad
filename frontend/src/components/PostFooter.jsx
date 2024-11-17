// PostFooter.js
const PostFooter = ({ likes, views, tags, previousArticle, nextArticle, author, authorLink, authorDes }) => {
  return (
    <footer className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Likes:</span> {likes} <span className="ml-4"><span className="font-semibold">Views:</span> {views}</span>
        </div>
        <div className="flex space-x-4">
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Tags:</span> {tags.join(", ")}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">About the Author</h3>
        <p>{authorDes}</p>
        <a href={authorLink} className="text-blue-500">{author}</a>
      </div>

      <div className="mt-6 flex justify-between">
        {previousArticle && (
          <div>
            <span className="text-sm text-gray-500">Previous Article</span>
            <h4 className="font-semibold text-blue-600">{previousArticle.title}</h4>
          </div>
        )}
        {nextArticle && (
          <div>
            <span className="text-sm text-gray-500">Next Article</span>
            <h4 className="font-semibold text-blue-600">{nextArticle.title}</h4>
          </div>
        )}
      </div>
    </footer>
  );
};

export default PostFooter;
