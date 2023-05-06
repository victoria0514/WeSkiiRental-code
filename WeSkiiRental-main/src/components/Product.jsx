import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const Product = (props) => {
  const { id, productName, priceBuy, priceRent, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b> {productName}</b>
        </p>
        <p>
          {" "}
          Buy ${priceBuy} | Rent ${priceRent}
        </p>
      </div>
      <Button variant="outlined" color="primary" onClick={() => addToCart(id)}>
        Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </Button>
    </div>
  );
};
