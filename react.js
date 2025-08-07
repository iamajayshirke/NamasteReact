import React from "react";
import * as ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"Hello World, ReactJS")
// const jsxHeading = <h1>React Js</h1>
const title = () => <h2>15 Days Fast Course🚀</h2>;
const ReactComp = () => {
  return (
    <>
      <h1>Welcome to ReactJS</h1>
      {title()}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComp />);
