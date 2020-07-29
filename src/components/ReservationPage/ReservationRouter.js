import React from "react";
// Route
import { Switch, Route } from "react-router-dom";
// Utils
import { RT_RESERVATION } from "../../config/_constants";
// Custom components
import Home from "./Home";

const ReservationRouter = () => {
  return (
    <Switch>
      <Route path={RT_RESERVATION} component={Home} exact={true} />
    </Switch>
  );
};

export default ReservationRouter;
