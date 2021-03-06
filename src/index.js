import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { setId, movieHero } from "./redux/reducers";
import logger from "redux-logger";

const rootReducers = combineReducers({ setId, movieHero });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
