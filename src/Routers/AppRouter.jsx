import Layout from "components/Layout";
import FavoritesPage from "pages/FavoritesPage";
import HomePage from "pages/HomePage";
import MapPage from "pages/MapPage";
import NotFound from "pages/NotFound";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
