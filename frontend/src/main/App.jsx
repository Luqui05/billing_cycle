import '../common/template/dependencies'
import React from "react";
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';

export default (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
        </div>
    );
};
