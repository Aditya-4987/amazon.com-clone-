import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div className="checkout_empty">
            <h5>Hey👋</h5>
            <h4>{user ? user.email : "Guest"}</h4>
            <h2 className="checkout_title">Your Shopping Cart is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h5>Hey👋</h5>
            <h4>{user ? user.email : "Guest"}</h4>
            <h2 className="checkout_title">Shopping Cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
