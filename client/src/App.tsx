import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./component/layouts/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import Home from "./component/pages/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
