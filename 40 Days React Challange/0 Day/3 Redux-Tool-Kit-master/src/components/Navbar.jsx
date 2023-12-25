import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const product = useSelector((state) => state.cart);

  // console.log("cart product", product);

  return (
    <div className="nav-head">
      <span className="logo">Redux Store</span>

      <div>
        <Link className="nav-link" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="nav-link" to="/shop">
          {" "}
          Shop{" "}
        </Link>
        <Link className="nav-link" to="/cart">
          {" "}
          Cart{" "}
        </Link>

        <span className="cart-count">Cart item: {product.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
