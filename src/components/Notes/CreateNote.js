import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdNoteAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Buttons from "../../utils/Buttons";
import toast from "react-hot-toast";

const CreateNote = () => {
  const navigate = useNavigate();
  //set the content of the reactquill
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  //note create handler
  const handleSubmit = async () => {
    if (editorContent.trim().length === 0) {
      return toast.error("Note content is required");
    }
    try {
      setLoading(true);
      const noteData = { content: editorContent };
      await api.post("/notes", noteData);
      toast.success("Note create successful");
      navigate("/my-notes");
    } catch (err) {
      toast.error("Error creating note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-74px)] p-10 bg-cpcolor">
      <div className="flex items-center  gap-1 pb-5">
        <h1 className="font-montserrat  text-black sm:text-4xl text-2xl font-semibold ">
          Create New Note
        </h1>
        <MdNoteAlt className="text-black text-4xl" />
      </div>

      <div className="h-72 sm:mb-20  lg:mb-14 mb-28 shadow-gray-300">
        <ReactQuill
          className="h-full bg-white  "
          value={editorContent}
          onChange={handleChange}
          modules={{
            toolbar: [
              [
                {
                  header: [1, 2, 3, 4, 5, 6],
                },
              ],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["clean"],
            ],
          }}
        />
      </div>

      <Buttons
        disabled={loading}
        onClickhandler={handleSubmit}
        className="bg-customRed  text-white px-4 py-2 hover:text-slate-300 rounded-sm"
      >
        {loading ? <span>Loading...</span> : " Create Note"}
      </Buttons>
    </div>
//     <div className="min-h-[calc(100vh-74px)] p-10 bg-cpcolor">
//   <div className="flex items-center gap-1 pb-5">
//     <h1 className="font-montserrat text-black sm:text-4xl text-2xl font-semibold ">
//       Create New Note
//     </h1>
//     <MdNoteAlt className="text-black text-4xl" />
//   </div>

//   <div className="mb-28 ">
//     <ReactQuill
//       className="bg-notepadColor"
//       value={editorContent}
//       onChange={handleChange}
//       modules={{
//         toolbar: [
//           [
//             {
//               header: [1, 2, 3, 4, 5, 6],
//             },
//           ],
//           [{ size: [] }],
//           ["bold", "italic", "underline", "strike", "blockquote"],
//           [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" },
//           ],
//           ["clean"],
//         ],
//       }}
//       style={{ minHeight: '300px' }} // Set a minimum height
//     />
//   </div>

//   <Buttons
//     disabled={loading}
//     onClickhandler={handleSubmit}
//     className="bg-customRed text-white px-4 py-2 hover:text-slate-300 rounded-sm"
//   >
//     {loading ? <span>Loading...</span> : " Create Note"}
//   </Buttons>
// </div>

  );
};

export default CreateNote;
