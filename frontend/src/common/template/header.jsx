import React from "react";

export default (props) => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">
                <b>BC</b>
            </span>
            <span className="logo-lg">
                <i className="fa fa-money"></i> <b>Billing</b> Cycle
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        </nav>
    </header>
);
