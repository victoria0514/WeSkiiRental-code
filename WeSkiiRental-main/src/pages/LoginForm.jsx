import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Styling/LoginForm.css";
import logo from "../icons/WeSkiiLogo.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = (e) => {
    // if (username === 'admin' && password === 'admin') {
    //   console.log('Login Successful');
    //   navigate('/');
    // }

    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);

        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", user.email);
        sessionStorage.setItem("password", password);
        // Get rest of information and store it here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSingupclick = () => {
    navigate("/signup");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", "admin");
      sessionStorage.setItem("password", "admin");
      sessionStorage.setItem("firstName", "Morris");
      sessionStorage.setItem("lastName", "Admin");
      sessionStorage.setItem("address", "College of Staten Island");
      sessionStorage.setItem("city", "Staten Island");
      sessionStorage.setItem("state", "New York");
      sessionStorage.setItem("zip", "10314");
      sessionStorage.setItem("creditCard", "123124019283");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="LoginForm-Wrapper">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{
            width: "300px",
            height: "300px",
          }}
        />

        <h1> We Skii Rental </h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <form onSubmit={handleFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginTop: "10px" }}
          />
        </form>
        <div className="buttons">
          <Button
            style={{
              width: "125px",
              marginRight: "12px",
              marginLeft: "12px",
              marginTop: "12px",
            }}
            size="large"
            variant="contained"
            onClick={handleLoginClick}
          >
            Login
          </Button>

          <Button
            style={{
              width: "125px",
              marginRight: "12px",
              marginLeft: "12px",
              marginTop: "12px",
            }}
            size="large"
            variant="contained"
            onClick={handleSingupclick}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
