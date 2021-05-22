import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layouts/Navbar";
import Home from "./component/pages/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </>
  );
};

export default App;
