import React, { FunctionComponent } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Provider } from "react-redux";
import { createAppStore } from "./data/redux/store.redux";

const store = createAppStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={Home} />
      </HashRouter>
    </Provider>
  );
};

export default App;
