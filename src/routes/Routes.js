import React from "react";
import { Route, Switch, withRouter } from "react-router";
import RouteMap from "./RouteMap";
import PrivateRoute from "./PrivateRoute/PrivateRoute.container";

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
      key={route.path}
      exact
      path={route.path}
      render={(props) => {
        return route.private ? (
          <PrivateRoute component={<route.component {...props} />} />
        ) : (
          <route.component {...props} />
        );
      }}
    />
  );
};
export default withRouter(Routes);
