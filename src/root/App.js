import React, {Component} from "react";
import {Layout,BackTop} from "antd";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import Menus from "./Menus";
import "./App.css";

const {Header, Sider, Content} = Layout;

const moveActions = {
    go: url => (dispatch) => {
        return dispatch(push(url));
    }
};

@connect(
    null,
    {...moveActions}
)
class App extends Component {
    render() {
        return (
            <Layout className="rootLayout">
                <Sider
                    collapsible
                >
                    <div className="logo">ant-react-redux</div>
                    <Menus go={this.props.go} router={this.props.router}/>
                </Sider>
                <Content className="contentParent">

                    <Header className="header">Header</Header>
                    <Content className="content">
                        {this.props.children}
                    </Content>

                </Content>
            </Layout>
        );
    }
}

export default App;
