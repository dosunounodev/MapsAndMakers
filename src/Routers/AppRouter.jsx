import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import BogotaPage from "pages/BogotaPage";
import LocationPage from "pages/LocationPage";
import FavoritesPage from "pages/FavoritesPage";
import NotFound from "pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* Fallback para ghpages */}
          <Route exact path="/MapsAndMakers/" component={HomePage} />
          {/* OK Routes */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/bogota" component={BogotaPage} />
          <Route exact path="/map" component={LocationPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
