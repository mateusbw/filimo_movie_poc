import React from "react";
import "./scss/index.scss";
import "./App.scss";

import { Provider } from "react-redux";
import Routes from "./routes/Routes";

import store from "./store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
