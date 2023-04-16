import state,{ addPost, updateNewPostText, subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderTree = (state) => {
  root.render(
    <App
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      state={state}
    />
  );
};
renderTree(state)

subscribe(renderTree)