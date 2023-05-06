import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "../components/CartItem";
import { PRODUCTS } from "../data/Products";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Styling/Cart.css";

const Cart = () => {
  const { clearCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const { buyAmount, rentAmount } = getTotalCartAmount();
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate("/");
  };

  const rentCart = () => {
    let totalAmount = Math.round(rentAmount * 100) / 100;
    sessionStorage.setItem("purchaseType", "rent");
    sessionStorage.setItem("totalAmount", totalAmount);
    clearCart();
    navigate("/success");
  };

  const buyCart = () => {
    let totalAmount = Math.round(buyAmount * 100) / 100;
    sessionStorage.setItem("purchaseType", "purchase");
    sessionStorage.setItem("totalAmount", totalAmount);
    clearCart();
    navigate("/success");
  };

  // Call this with string, "Shipping info, Credit Card, Login etc."
  const notFoundError = (error) => {
    alert(error + " was not found");
  };

  return (
    <div className="cart">
      <div className="cartItems">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] > 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>

      {buyAmount > 0 ? (
        <div className="not-cart-items">
          <div className="subtotal">
            <h1>Checkout:</h1>
            <Button variant="contained" onClick={buyCart}>
              Buy Gear ${Math.round(buyAmount * 100) / 100}
            </Button>
            <Button variant="contained" onClick={rentCart}>
              Rent Gear ${Math.round(rentAmount * 100) / 100}
            </Button>
          </div>
          <div className="checkout">
            <Button variant="outlined" onClick={handleBackToShop}>
              ← Back to Shop
            </Button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty! </h1>
      )}
    </div>
  );
};

export default Cart;
