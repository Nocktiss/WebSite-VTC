import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

const RootRouter = () => {
  return (
    <>
      <Router history={history}>
        <Switch></Switch>
      </Router>
    </>
  );
};

export default RootRouter;
