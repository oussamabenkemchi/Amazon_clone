import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StatePovider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <StarIcon className="product__ratingStar" />
              ))}
          </div>
        </p>
      </div>

      <img className="product__image" src={image} alt="product image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
