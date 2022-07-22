import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import ManageBuyers from "admin/ManageBuyers";
import ManageSellers from "admin/ManageSellers";
import ManageProducts from "seller/ManageProducts";
import UserCart from "buyer/UserCart";
import UserOrders from "buyer/UserOrders";

import "./index.css";
import Header from "./Header";

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/manage-buyers" render={() => <ManageBuyers />} />
        <Route path="/manage-sellers" render={() => <ManageSellers />} />
        <Route path="/manage-products" render={() => <ManageProducts />} />
        <Route path="/user-cart" render={() => <UserCart />} />
        <Route path="/user-orders" render={() => <UserOrders />} />
      </Switch>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
