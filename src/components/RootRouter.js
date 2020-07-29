import React from "react";
// Routes
import { Router, Route, Switch } from "react-router-dom";
// Utils
import {
  RT_HOME,
  RT_PRICE,
  RT_SERVICE,
  RT_RESERVATION,
  RT_CONTACT,
} from "../config/_constants";
// Custom Components
import HomeRouter from "./HomePage/HomeRouter";
import ServiceRouter from "./ServicePage/ServiceRouter";
import PriceRouter from "./PricePage/PriceRouter";
import Header from "./lib/Styled/Header";
import BarMenu from "./lib/Styled/BarMenu";
import ReservationRouter from "./ReservationPage/ReservationRouter";
import ContactRouter from "./ContactPage/ContactRouter";

const styles = {
  container: {
    width: "100%",
  },
};

const RootRouter = ({ history }) => {
  return (
    <div>
      <Header />
      <BarMenu />
      <div style={styles.container}>
        <Router history={history}>
          <Switch>
            <Route path={RT_HOME} exact={true} component={HomeRouter} />
            <Route path={RT_SERVICE} exact component={ServiceRouter} />
            <Route path={RT_PRICE} exact component={PriceRouter} />
            <Route path={RT_RESERVATION} exact component={ReservationRouter} />
            <Route path={RT_CONTACT} exact component={ContactRouter} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default RootRouter;
