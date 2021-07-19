import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Financeiro from "./Financeiro";
import Configuracoes from "./Configuracoes";
import Formulario from "./Formulario";

const CheckRoute = props => {
  const { component: Component, isAuthenticated, location } = props;
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
    />
  );
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <CheckRoute
        isAuthenticated={isAuthenticated}
        component={Component}
        {...props}
      />
    )}
  />
);

const Routes = ({ isAuthenticated }) => (
  <Switch>
    {/*FORMULÁRIO*/}
    <PrivateRoute
      path="/formulario"
      component={Formulario}
      isAuthenticated={isAuthenticated}
    />
    {/*FINANCEIRO*/}
    <PrivateRoute
      path="/financeiro"
      component={Financeiro}
      isAuthenticated={isAuthenticated}
    />

    {/*CONFIGURACOES*/}
    <PrivateRoute
      path="/configuracoes"
      component={Configuracoes}
      isAuthenticated={isAuthenticated}
    />

  </Switch>
);

export default Routes;
