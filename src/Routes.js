import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthedLayout from "layouts/authed/AuthedLayout";
import AuthLayout from "layouts/auth/AuthLayout";
import HomePage from 'views/home/PageContent'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/"
          component={HomePage}
          fullLayout exact={true}
        />
        {/* <AuthedRoute path="/"
          component={RankPage}
          fullLayout exact={true}
        /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

const AuthRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <AuthLayout pathname={props.location.pathname}>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
};

const AuthedRoute = ({
  component: Component,
  fullLayout,
  publicRoute,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <AuthedLayout
          fullLayout={fullLayout}
          pathname={props.location.pathname}
          publicRoute={publicRoute}
        >
          <Component {...props} />
        </AuthedLayout>
      )}
    />
  );
};
