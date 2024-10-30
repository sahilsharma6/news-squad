import { Editor } from "@tinymce/tinymce-react";
import DOMPurify from "dompurify";
import { useRef, useState } from "react";
export default function ContentEditor() {
  const [content, setContent] = useState("");
  const [render, setRender] = useState(false);
  const editorRef = useRef(null);

  const handleEditorChange = () => {
    setContent(editorRef.current.getContent());
  };
  return (
    <div className="flex flex-col">

      //title, category list, 
      <Editor
        apiKey="bqv0d5kacgdmmfvh831hja4oddj56rtg7dcn4o11mph4fxej"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={handleEditorChange}
        init={{
          selector: "textarea#file-picker",
          height: 600,
          automatic_uploads: true,
          file_picker_types: "image",
          menubar: "edit view insert format tools table",
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "code",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          object_resizing: true,
          images_upload_handler: async (blobInfo) => {
            return new Promise((resolve, reject) => {
              let imageFile = new FormData();
              imageFile.append("file", blobInfo.blob());

              // Send the image to your backend or cloud storage (e.g., S3)
              fetch("http://localhost:5000/api/upload-image", {
                method: "POST",
                body: imageFile,
              })
                .then((response) => response.json())
                .then((data) => {
                  resolve(data.imageUrl);
                })
                .catch((error) => {
                  reject("Image upload failed: " + error.message);
                });
            });
          },
        }}
      />
      <button
        className="w-full mt-5 bg-black text-white px-4 py-2 text-lg rounded-md"
        onClick={() => {
          setContent(() => DOMPurify.sanitize(content));
          setRender(true);
        }}
      >
        Save
      </button>
      {render && (
        <>
          <h1 className="text-5xl text-center font-bold underline mb-3 ">
            Rendered Post
          </h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
      )}
    </div>
  );
}
