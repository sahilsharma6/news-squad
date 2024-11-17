// PostContent.js
const PostContent = ({ content }) => {
    return (
      <div className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
    );
  };
  
  export default PostContent;
  