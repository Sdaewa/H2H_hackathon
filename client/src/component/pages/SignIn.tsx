import React from "react";
import "./SignUp";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormControl } from "@material-ui/core";

function SignIn() {
  return (
    <div className="signUp">
      <div className="main">
        <div className="form">
          <h1>SignIn</h1>
          <FormControl>
            <TextField id="standard-basic" label="Email" type="text" />
            <TextField id="standard-basic" label="Password" type="password" />
            <Button variant="outlined" color="primary">
              Submit
            </Button>
          </FormControl>
        </div>
        <div className="svg">
          <img
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt="svg"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
