import { Button, Input } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Styling/CartItem.css";

export const CartItem = (props) => {
  const { id, productName, priceBuy, priceRent, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateItemCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          {" "}
          <b> {productName}</b>
        </p>
        <p>
          {" "}
          Buy ${priceBuy} | Rent ${priceRent}
        </p>
        <div className="countHandler">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => removeFromCart(id)}
          >
            {" "}
            -{" "}
          </Button>

          <Input
            size="small"
            value={cartItems[id]}
            onChange={(e) => {
              updateItemCartAmount(Number(e.target.value), id);
            }}
          />

          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              addToCart(id);
            }}
          >
            {" "}
            +{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
