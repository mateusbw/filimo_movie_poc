import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import ROUTER_PATHS from "./RouterPaths";

import { MoviesSeries } from "../pages/MoviesSeries/MoviesSeries";
import Title from "../pages/Title/Title";
import Wishlist from "../pages/MyWishlist/MyWishlist";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={ROUTER_PATHS.HOME} />
        </Route>
        <Route exact path={ROUTER_PATHS.HOME} component={MoviesSeries} />
        <Route exact path={ROUTER_PATHS.TITLE} component={Title} />
        <Route exact path={ROUTER_PATHS.WISHLIST} component={Wishlist} />
      </Switch>
    </Router>
  );
};

export default Routes;
