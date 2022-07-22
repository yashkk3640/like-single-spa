import React from "react";
import { Link } from "react-router-dom";

const styleObj = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
};

const Header = () => {
  return (
    <div
      style={{
        fontSize: "20px",
        display: "flex",
        with: "100vw",
        justifyContent: "space-between",
      }}
    >
      <Link to="/manage-buyers" style={styleObj}>
        Manage Buyers
      </Link>
      <Link to="/manage-sellers" style={styleObj}>
        Manage Sellers
      </Link>
      <Link to="/manage-products" style={styleObj}>
        Manage Products
      </Link>
      <Link to="/user-cart" style={styleObj}>
        User Cart
      </Link>
      <Link to="/user-orders" style={styleObj}>
        User Orders
      </Link>
    </div>
  );
};

export default Header;
