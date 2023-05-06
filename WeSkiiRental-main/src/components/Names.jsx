import React, { useState } from "react";
import { TextField } from "@mui/material";

const Names = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const inner = {
    marginLeft: "10px",
    marginRight: "10px",
  };
  const outer = {
    width: "600px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "20px",
  };

  return (
    <div style={outer}>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={inner}
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={inner}
      />
    </div>
  );
};

export default Names;
