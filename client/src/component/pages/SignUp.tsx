import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="main">
        <div className="form">
          <h1>SignUp</h1>
          <form action="http://localhost:5000/user/signup" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="password" name="password" placeholder="Enter your password" />
            <input type="submit" value="signup" />
          </form>
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
