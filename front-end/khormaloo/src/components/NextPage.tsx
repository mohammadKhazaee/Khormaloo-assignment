import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NextPage = () => {
  const [pagePath, setPagePath] = useState(true);
  const navigate = useNavigate();

  const gotToNewPage = () => {
    if (pagePath) {
      navigate("Editpage");
    } else {
      return null;
    }
  };
  return (
    <>
      <button
        onClick={() => gotToNewPage()}
        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 flex border-solid rounded-3xl bg-[#5E47A1] w-44 justify-center items-center px-[12px] py-[20px] mt-14 mb-14"
      >
        Go to Edit Page
      </button>
    </>
  );
};
export default NextPage;
