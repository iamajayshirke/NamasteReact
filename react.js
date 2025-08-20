import React from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Restaurant from "./src/components/Restaurant";

const title = () => <h2>15 Days Fast Course🚀</h2>;
const ReactComp = () => {
  return (
    <>
      <Navbar/>
      <Restaurant />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComp />);
