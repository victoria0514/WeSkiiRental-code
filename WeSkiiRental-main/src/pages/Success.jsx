import React from "react";
import "./Styling/Success.css";

const Success = () => {
  const purchaseType = sessionStorage.getItem("purchaseType");
  const totalAmount = sessionStorage.getItem("totalAmount");
  let orderID = Math.random() * 100000000;
  let trackingNumber = Math.random() * 100000000;
  orderID = Math.floor(orderID);
  trackingNumber = Math.floor(trackingNumber);
  return (
    <div className="content">
      <h1>Success!</h1>
      <p>
        You have chosen to {purchaseType} your gear for ${totalAmount}.
      </p>
      <p>
        Your order ID is <b> {orderID}</b> and your tracking number is{" "}
        <b> {trackingNumber}</b>.
      </p>
    </div>
  );
};

export default Success;
