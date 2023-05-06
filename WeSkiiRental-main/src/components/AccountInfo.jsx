import React, { useState } from "react";
import "./Styling/Title.css";
import { Button, TextField } from "@mui/material";
import "./Styling/AccountInfo.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AccountInfo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // e.preventDefault()
    console.log(username);
    console.log(password);
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="outer-outer">
      <h3 className="title">Login Info</h3>
      <div className="outer">
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inner"
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="inner"
        />
      </div>
      <Button variant="contained" onClick={onSubmit}>
        Sign Up
      </Button>
    </div>
  );
};

export default AccountInfo;
