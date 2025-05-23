import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import App from "./App";
import Dashboard from "../dashboard/dashboard";
import billingCycle from "../billingCycle/billingCycle";

export default (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/billingCycles" component={billingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
);
