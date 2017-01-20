import React, {Component} from "react";
import {Layout, Menu, Icon} from "antd";
import "./App.css";
const {Header, Footer, Sider, Content} = Layout;


class App extends Component {
    render() {
        return (
            <Layout className="rootLayout">
                <Sider
                    collapsible
                >
                    <Menu theme="dark" mode={"inline"}
                          defaultSelectedKeys={['1']}
                    >
                        <div className="logo">ant-react-redux</div>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content className="contentParent">
                    <Header className="header">Header</Header>
                    <Content className="content">Content</Content>
                </Content>
            </Layout>
        );
    }
}

export default App;
