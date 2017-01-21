import React, {Component} from "react";
import {Form, Icon, Col, Row, Input, Button, Card} from "antd";

const FormItem = Form.Item;
const form = Form.create;

@Form.create()
class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            expand: false
        };
    }

    handleSearch(e) {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    toggle() {
        const {expand} = this.state;
        this.setState({expand: !expand});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19},
        };
        const expand = this.state.expand;
        const rowGutter = 40;
        const collapse = (<a style={{marginLeft: 8, fontSize: 12}} onClick={::this.toggle}>
            Collapse <Icon type={expand ? 'up' : 'down'}/>
        </a>);
        return (
            <Card title="검색" extra={collapse}>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={::this.handleSearch}
                >
                    <Row gutter={rowGutter}>
                        <Col span={8} key={1}>
                            <FormItem {...formItemLayout} label="item1">
                                {getFieldDecorator(`field-item1`)(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} key={2}>
                            <FormItem {...formItemLayout} label="item2">
                                {getFieldDecorator(`field-item2`)(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    {expand &&
                    <Row gutter={rowGutter}>
                        <Col span={8} key={1}>
                            <FormItem {...formItemLayout} label="item1">
                                {getFieldDecorator(`field-item1`)(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} key={2}>
                            <FormItem {...formItemLayout} label="item2">
                                {getFieldDecorator(`field-item2`)(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    }
                    <Row>
                        <Col span={12} style={{textAlign: 'left'}}>
                            <Button style={{marginLeft: 8}} onClick={::this.handleReset}>
                                Clear
                            </Button>
                        </Col>
                        <Col span={12} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        );
    }
}

export default SearchForm;