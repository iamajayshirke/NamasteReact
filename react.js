import React from "react"
import * as ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{},"Hello World, ReactJS")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
