import React from "react";
// Routes
import { Router, Route, Switch } from "react-router-dom";
// Utils
import { RT_HOME, RT_PRICE, RT_SERVICE } from "../config/_constants";
// Custom Components
import history from "./history";
import HomeRouter from "./HomePage/HomeRouter";
import ServiceRouter from "./ServicePage/ServiceRouter";
import PriceRouter from "./PricePage/PriceRouter";
import NavBar from "./lib/Styled/NavBar";

const styles = {
  container: {
    width: "100%",
  },
};

const RootRouter = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <Router history={history}>
          <Switch>
            <Route path={RT_HOME} exact={true} component={HomeRouter} />
            <Route path={RT_PRICE} exact component={ServiceRouter} />
            <Route path={RT_SERVICE} exact component={PriceRouter} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default RootRouter;
