import React from "react";
// Route
import { Switch, Route } from "react-router-dom";
// Utils
import { RT_SERVICE } from "../../config/_constants";
// Custom components
import Home from "./Home";

const ServiceRouter = () => {
  return (
    <Switch>
      <Route path={RT_SERVICE} component={Home} exact={true} />
    </Switch>
  );
};

export default ServiceRouter;
