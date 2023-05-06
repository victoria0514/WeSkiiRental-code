import React from "react";
import "./Styling/Shop.css";
import { Product } from "../components/Product";
import { PRODUCTS } from "../data/Products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>We Skii Rental Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
