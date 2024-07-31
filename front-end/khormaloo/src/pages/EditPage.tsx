import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { FirstPage } from "./FirstPage";
export const EditPage = () => {
  return (
    <React.Fragment>
      <h1>EditPage</h1>
      <button>text box</button>
      <InputField title="" />
      <FirstPage />
    </React.Fragment>
  );
};
