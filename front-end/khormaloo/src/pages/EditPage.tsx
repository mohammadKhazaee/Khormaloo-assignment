import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { FirstPage } from "./FirstPage";
export const EditPage = () => {
  return (
    <React.Fragment>
      <h1>EditPage</h1>
      <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 flex border-solid rounded-3xl bg-[#5E47A1] w-44 justify-center items-center px-[12px] py-[20px] mt-14 mb-14">
        text box
      </button>
      <InputField title="" />
    </React.Fragment>
  );
};
