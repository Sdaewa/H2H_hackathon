import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./component/layouts/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import Home from "./component/pages/Home";

//App tsx
const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={Home} exact />
            {/*<Route path="/educate" component={Educate} exact></Route>
        <Route path="/communicate" component={Communicate} exact></Route>
        <Route path="/advocate" component={Advocate} exact></Route>
            */}
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
