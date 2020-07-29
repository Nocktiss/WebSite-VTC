import React from "react";
// Route
import { Switch, Route } from "react-router-dom";
// Utils
import { RT_PRICE } from "../../config/_constants";
// Custom components
import Home from "./Home";

const PriceRouter = () => {
  return (
    <Switch>
      <Route path={RT_PRICE} component={Home} exact={true} />
    </Switch>
  );
};

export default PriceRouter;
