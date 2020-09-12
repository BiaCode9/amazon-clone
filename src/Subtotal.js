import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer.js";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
             
              {/* Subtotal (0 items): */}
              Subtotal ({basket.length} items):
              {/* <strong> 0</strong> */}
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input className="input__checkbox" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}
      
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="button__subtotal">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
