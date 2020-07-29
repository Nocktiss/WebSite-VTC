import React from "react";
// Route
import { Switch, Route } from "react-router-dom";
// Utils
import { RT_CONTACT } from "../../config/_constants";
// Custom components
import Home from "./Home";

const ContactRouter = () => {
  return (
    <Switch>
      <Route path={RT_CONTACT} component={Home} exact={true} />
    </Switch>
  );
};

export default ContactRouter;
