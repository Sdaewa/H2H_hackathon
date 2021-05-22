import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <SignIn />
      <SignUp />
    </>
  );
};

export default Home;
