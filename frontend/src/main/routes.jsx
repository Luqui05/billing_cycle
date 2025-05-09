import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import dashboard from "../dashboard/dashboard";
import billingCycle from "../billingCycle/billingCycle";

export default (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={dashboard} />
        <Route path="/billingCycles" component={billingCycle} />
        <Redirect from="*" to="/" />
    </Router>
);
