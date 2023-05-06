import React from "react";
import PayPalButton from "../components/PayPalButton";

const PaymentPage = () => {
  const handlePaymentSuccess = () => {
    alert("Payment Successful!");
    window.location.reload();
  };

  const styler = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "ror",
  };

  const part = {
    marginRight: "20px",
  };

  return (
    <div style={styler}>
      <h1 style={part}>Checkout Using Paypal</h1>
      <PayPalButton onSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default PaymentPage;
