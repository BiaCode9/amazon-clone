import React from "react";
import './CheckoutProduct.css'
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  //magic code we use to pull information or change information with the dispatch
  // if we ever need to manipulate the basket, we need to dispatch an action
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id, 
    })


  }


  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image}
        />
 
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star__icon" />
            ))}

        </div>

              <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button>
        </div>

      </div>
    
  );
}

export default CheckoutProduct;
