import React from "react";
import logo from "../assets/image.png";

const PayPalButton = ({ onSuccess }) => {
  const handleButtonClick = () => {
    onSuccess();
  };

  return (
    <img
      src={logo}
      alt="Pay with PayPal"
      onClick={handleButtonClick}
      style={{ cursor: "pointer", width: "132px", height: "26px" }}
    />
  );
};

export default PayPalButton;
