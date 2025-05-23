/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";

const root = createRoot(document.getElementById("contents"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// wrap the App in the Provider Component and pass in the store
