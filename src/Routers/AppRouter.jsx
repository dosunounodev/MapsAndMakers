import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import BogotaPage from "pages/BogotaPage";
import MapPage from "pages/MapPage";
import FavoritesPage from "pages/FavoritesPage";
import NotFound from "pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/MapsAndMakers/" component={HomePage} />
          <Route exact path="/MapsAndMakers/bogota" component={BogotaPage} />
          <Route exact path="/MapsAndMakers/map" component={MapPage} />
          <Route
            exact
            path="/MapsAndMakers/favorites"
            component={FavoritesPage}
          />
          <Route path="/MapsAndMakers/*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
