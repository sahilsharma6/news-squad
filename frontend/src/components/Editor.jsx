import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import DOMPurify from "dompurify";
import apiClient from "@/services/apiClient";


export default function ContentEditor({ content, handleContentChange }) {
  const editorRef = useRef(null);

  const handleEditorChange = () => {
    const cleanContent = DOMPurify.sanitize(editorRef.current.getContent());
    handleContentChange(cleanContent);
  };

  return (
    <div className="flex flex-col">
      <Editor
        apiKey={import.meta.env.VITE_EDITOR_KEY}
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
            const imageFile = new FormData();
            imageFile.append("file", blobInfo.blob());

            try {
         
              const response = await apiClient.post("/upload-image", imageFile);
              const imageUrl = response.data.imageUrl;
              return imageUrl;  
            } catch (error) {
              console.error("Image upload failed:", error);
              throw new Error("Image upload failed: " + error.message);
            }
          },
        }}
      />
    </div>
  );
}
