import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";
import HomeRouter from "./HomePage/HomeRouter";

const RootRouter = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomeRouter} />
        </Switch>
      </Router>
    </>
  );
};

export default RootRouter;
