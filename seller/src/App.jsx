import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ManageProducts from "./ManageProducts";

const App = () => (
  <div className="container">
    <div>Name: seller</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <ManageProducts />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
