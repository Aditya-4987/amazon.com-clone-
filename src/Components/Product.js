import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket: ", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <img src={image} alt={title} />
      <div className="product_buttons">
        <button className="product_button" onClick={addToBasket}>
          Add to Basket
        </button>
        <button className="product_button">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
