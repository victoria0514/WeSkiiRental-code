import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Styling/ShippingInfo.css";

const ShippingInfo = () => {
  const [formData, setFormData] = useState({
    firstName: sessionStorage.getItem("firstName") || "",
    lastName: sessionStorage.getItem("lastName") || "",
    address: sessionStorage.getItem("address") || "",
    city: sessionStorage.getItem("city") || "",
    state: sessionStorage.getItem("state") || "",
    zip: sessionStorage.getItem("zip") || "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    sessionStorage.setItem(name, value);
  };

  return (
    <div className="shipping-info">
      <form>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="state"
              label="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="zip"
              label="Zip"
              value={formData.zip}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
