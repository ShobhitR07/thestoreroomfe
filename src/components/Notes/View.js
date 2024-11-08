import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Buttons from "../../utils/Buttons";
import ReactQuill from "react-quill";

const View = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Access parsedContent from the location state
  const parsedContent = location.state?.parsedContent || "empty";

  console.log(parsedContent) ;

  



  // Navigate to the previous page
  const onBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-[calc(100vh-74px)] p-10">
    

    <div className="h-72 sm:mb-20  lg:mb-14 mb-28 ">
      <ReactQuill
        className="h-full "
        value={parsedContent}
        
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
  </div>
  );
};

export default View;
