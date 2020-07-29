import React from "react";
// Route
import { Switch, Route } from "react-router-dom";
// Utils
import { RT_HOME } from "../../config/_constants";
// Custom components
import Home from "./Home";

const HomeRouter = () => {
  return (
    <Switch>
      <Route path={RT_HOME} component={Home} exact={true} />
    </Switch>
  );
};

export default HomeRouter;
