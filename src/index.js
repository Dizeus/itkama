import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderTree = (state) => {
  root.render(
      <Provider store={store}>
        <App/>
      </Provider>
  );
};
renderTree(store.getState())

store.subscribe(()=>{renderTree(store.getState())})