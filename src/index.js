/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * index.js
 * 7/23/2021
 */

//Import statements
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"


//Wrap main app in <router>
//Render function renders the app to the DOM
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
