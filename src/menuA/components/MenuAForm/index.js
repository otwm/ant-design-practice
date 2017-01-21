import React, {Component} from "react";
import {Breadcrumb, Icon} from "antd";
import SaveForm from './SaveForm';

class MenuAForm extends Component {
    renderBreadcrumb() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <Icon type="home"/>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/menuA">
                    <Icon type="user"/>
                    <span>menu A</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    List
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }

    render(){
        return (
            <div className="contentRoot">
                {this.renderBreadcrumb()}
                <h1 className="panel">
                    Menu A
                </h1>
                <SaveForm/>
            </div>
        );
    }
}

export default MenuAForm;