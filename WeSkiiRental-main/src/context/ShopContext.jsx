import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let buyAmount = 0;
    let rentAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        buyAmount += cartItems[item] * itemInfo.priceBuy;
        rentAmount += cartItems[item] * itemInfo.priceRent;
      }
    }
    return { buyAmount, rentAmount };
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateItemCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    getDefaultCart,
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCartAmount,
    getTotalCartAmount,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {" "}
      {props.children}{" "}
    </ShopContext.Provider>
  );
};
