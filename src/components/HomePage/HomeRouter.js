import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const HomeRouter = () => {
  return (
    <Switch>
      <Route component={Home} exact={true} />
    </Switch>
  );
};

export default HomeRouter;
