import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Styling/LoginForm.css";
import { useNavigate } from "react-router-dom";
import "./Styling/Account.css";
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import {auth} from '../firebase';

const Account = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const password = sessionStorage.getItem("password");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === oldPassword) {
      alert("Password Changed");
      sessionStorage.setItem("password", newPassword);
    } else {
      alert("Password Incorrect");
    }
  };

  const errorPasswordIncorrect = () => {
    alert("Password Incorrect");
  };

  const errorFieldBlank = (field) => {
    alert(field + " cannot be blank");
  };

  const handleSignOut = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    sessionStorage.setItem("password", "");
    sessionStorage.setItem("username", "");
    sessionStorage.setItem("firstName", "");
    sessionStorage.setItem("lastName", "");
    sessionStorage.setItem("address", "");
    sessionStorage.setItem("city", "");
    sessionStorage.setItem("state", "");
    sessionStorage.setItem("zip", "");
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      {isLoggedIn === "true" ? (
        <div className="yes-logged-in">
          <div className="change-password">
            <h1>Change Password</h1>
            <TextField
              style={{ marginBottom: "20px" }}
              id="standard"
              label="Old Password"
              variant="standard"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
            <form onSubmit={handlePasswordSubmit}>
              <TextField
                id="standard"
                label="New Password"
                variant="standard"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="change-shipping">
            <h1> Your Shipping Info </h1>
            <div className="form-row">
              <div className="form-col">
                <TextField
                  id="standard"
                  label="First Name"
                  variant="standard"
                  value={sessionStorage.getItem("firstName")}
                />
                <TextField
                  id="standard"
                  label="Last Name"
                  variant="standard"
                  value={sessionStorage.getItem("lastName")}
                />
              </div>
              <div className="form-row">
                <div className="form-col">
                  <TextField
                    id="standard"
                    label="Address"
                    variant="standard"
                    value={sessionStorage.getItem("address")}
                  />
                  <TextField
                    id="standard"
                    label="City"
                    variant="standard"
                    value={sessionStorage.getItem("city")}
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <TextField
                  id="standard"
                  label="State"
                  variant="standard"
                  value={sessionStorage.getItem("state")}
                />
                <TextField
                  id="standard"
                  label="Zip"
                  variant="standard"
                  value={sessionStorage.getItem("zip")}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <TextField
                  id="standard"
                  label="Credit Card"
                  variant="standard"
                  value={sessionStorage.getItem("creditCard")}
                />
              </div>{" "}
            </div>
          </div>
          <div className="sign-out-button">
            <h1> Sign Out</h1>
            <Button variant="contained" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      ) : (
        <div className="not-logged-in">
          <h1> You are not logged in</h1>
          <Button variant="contained" onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Account;
