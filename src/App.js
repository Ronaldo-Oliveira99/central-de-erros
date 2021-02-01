import React, { Fragment } from "react";
import Routes from "./routes";
import store from "../src/store";
import { Provider } from "react-redux";

import GlobalStyle from "./view/components/Global";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;