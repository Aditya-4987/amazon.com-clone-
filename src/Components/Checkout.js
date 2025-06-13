import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h2 className="checkout_title">ShoppingCart</h2>
        {/* Basket Item */}
        {/* Basket Item */}
        {/* Basket Item */}
        {/* Basket Item */}
        {/* Basket Item */}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
