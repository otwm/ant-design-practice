import React, {Component, PropTypes} from "react";
import {Menu, Icon} from "antd";

const SubMenu = Menu.SubMenu;

class Menus extends Component {
    constructor() {
        super();
        this.state = {
            selectedKeys: []
        };
    }

    componentWillReceiveProps() {
        this.setState({selectedKeys: [this.props.router.location.pathname]});
    }

    componentDidMount() {
        this.setState({selectedKeys: [this.props.router.location.pathname]});
    }

    linkTo(item) {
        this.props.go(item.key);
    }

    render() {
        return (
            <Menu theme="dark" mode={"inline"}
                  defaultSelectedKeys={['menuA']}
                  selectedKeys={this.state.selectedKeys}
                  onClick={::this.linkTo}
            >
                <Menu.Item key="/menuA">
                    <Icon type="user"/>
                    <span className="nav-text">
                        menuA
                    </span>
                </Menu.Item>
                <SubMenu key="/sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

Menus.PropTypes = {
    go: PropTypes.func.isRequired,
    router: PropTypes.func.isRequired
};

export default Menus;
