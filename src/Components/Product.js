import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">
          {title.length > 110 ? `${title.slice(0, 90)}...` : title}
        </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product Image" />
      <div className="product_buttons">
        <button className="product_button">Add to Basket</button>
        <button className="product_button">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
