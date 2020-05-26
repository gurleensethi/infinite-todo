import React, { FunctionComponent } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import { createAppStore } from "./data/redux/store.redux";
import "./App.css";
import ModalManager from "./components/Modal/ModalManager";

const store = createAppStore();

const getBasename = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.PUBLIC_URL + "/";
  }
  return "/";
};

const App: FunctionComponent = () => {
  return (
    <HashRouter basename={getBasename()}>
      <Provider store={store}>
        <ModalManager>
          <Route path="/" component={Home} />
        </ModalManager>
      </Provider>
    </HashRouter>
  );
};

export default App;
