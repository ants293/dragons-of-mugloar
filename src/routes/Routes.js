import React from "react";
import { Route, Switch, withRouter } from "react-router";
import RouteMap from "./RouteMap";

const Routes = () => {
  return <Switch>{getRoutes(RouteMap)}</Switch>;
};

const getRoutes = (providedRouteMap) => {
  let subRoutesArray = [];

  const routesArray = providedRouteMap.map((route) => {
    if (route.routes && route.routes.length) {
      subRoutesArray = [...getRoutes(route.routes)];
    }
    return getRoute(route);
  });

  return [...routesArray, ...subRoutesArray];
};

const getRoute = (route) => {
  return (
    <Route
      exact
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  );
};
export default withRouter(Routes);
