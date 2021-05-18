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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/bogota" component={BogotaPage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
