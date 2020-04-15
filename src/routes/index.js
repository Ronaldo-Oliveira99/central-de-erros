/* Arquivo de Configuração de Rotas  */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Páginas */

import Home from "../view/home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/novousuario" component={NovoUsuario} />
      <Route
        exact
        path="/usuariorecuperarsenha"
        component={UsuarioRecuperarSenha}
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:ambients" component={Home} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
