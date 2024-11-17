import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import DOMPurify from "dompurify";

export default function ContentEditor({ content, handleContentChange }) {
  //   const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleEditorChange = () => {
    const cleanContent = DOMPurify.sanitize(editorRef.current.getContent());
    handleContentChange(cleanContent);
  };
  return (
    <div className="flex flex-col">
      <Editor
        apiKey="lfqevskjzwe9ooap19ndn8lbigt79ghkothcuuyb704olerc"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={handleEditorChange}
        value={content}
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
            "fullscreen",
            "quickbars",
          ],
          toolbar:
            "undo redo fullscreen  | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          object_resizing: true,

          images_upload_handler: async (blobInfo) => {
            return new Promise((resolve, reject) => {
              const imageFile = new FormData();
              imageFile.append("file", blobInfo.blob()); // Use "file" as the field name

              // Send the image to your backend
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
    </div>
  );
}
