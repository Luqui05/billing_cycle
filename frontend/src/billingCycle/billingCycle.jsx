import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

export default class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader
                    title="Ciclos de Pagamentos"
                    small="Cadastro "
                ></ContentHeader>
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        );
    }
}
