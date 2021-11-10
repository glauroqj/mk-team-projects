import React from "react";
import ReactDOM from "react-dom";
/** routes */
import Routes from "./routes/Routes";
/** firebase */
import { initializeApp } from "firebase/app";
import { credentials } from "./credentials";
/** css */
import "./assets/css/main.scss";

initializeApp(credentials);

ReactDOM.render(<Routes />, document.getElementById("root"));
