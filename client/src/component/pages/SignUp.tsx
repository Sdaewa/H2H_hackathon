import React from "react";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormControl } from "@material-ui/core";

function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="signUp">
      <div className="main">
        <div className="form">
          <h1>SignUp</h1>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={() => {
                (async () => {
                  try {
                    const res = await fetch(
                      "http://localhost:5000/user/signup",
                      {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                          Accept: "application/json text/plain */*",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                          name,
                          email,
                          password,
                        }),
                      }
                    );
                    const data = await res.json();
                    console.log(data);
                  } catch (err) {
                    console.log(err);
                  }
                })();
              }}
              variant="outlined"
              color="primary"
            >
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

export default SignUp;
