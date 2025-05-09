import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import promise from 'redux-promise'

import App from "./main/App";
import reducers from "./main/reducers";
import { applyMiddleware } from "redux";

const store = applyMiddleware(promise)(createStore)(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
