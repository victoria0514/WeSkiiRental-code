import React, { useState } from "react";
import "./Styling/Title.css";
import { TextField } from "@mui/material";
import "./Styling/AddressInfo.css";

const ContactInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  return (
    <>
      <h3 className="title"> Shipping Info </h3>

      <div className="outer">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="inner"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="inner"
        />
      </div>

      <div className="outer">
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="inner"
        />

        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="inner"
        />
      </div>

      <div className="outer">
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="inner"
        />

        <TextField
          id="outlined-basic"
          label="Zip"
          variant="outlined"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="inner"
        />
      </div>
    </>
  );
};

export default ContactInfo;
