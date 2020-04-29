import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore(); //it can be useful to pass initial state here, if you're server rendering or initializing redux store from local storage
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
