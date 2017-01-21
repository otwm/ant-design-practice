import React, {Component} from "react";
import {Form, Card, Row, Col, Button, Input, Select} from "antd";

const FormItem = Form.Item;
const form = Form.create;

@Form.create()
class SaveForm extends Component {
    constructor() {
        super();
    }

    handleSave() {

    }

    handleChange() {

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19},
        };

        return (
            <div>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={::this.handleSave}
                >
                    <Card title="내용1" className="panel">
                        <Row>
                            <Col span={12} key={1}>
                                <FormItem {...formItemLayout} label="item1">
                                    {getFieldDecorator(`field-item1`)(
                                        <Input placeholder="placeholder"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12} key={2}>
                                <FormItem {...formItemLayout} label="item1">
                                    {getFieldDecorator(`field-item1`)(
                                        <Input placeholder="placeholder"/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} key={1}>
                                <FormItem {...formItemLayout} label="item1">
                                    {getFieldDecorator(`field-item1`)(
                                        <Select defaultValue="lucy" style={{width: 120}} onChange={::this.handleChange}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>Disabled</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} key={1}>
                            </Col>
                            <Col span={12} key={2}>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="내용2" className="panel">

                    </Card>
                    <Row className="panel">
                        <Col style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">목록</Button>
                            <Button type="primary" htmlType="submit">저장</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default SaveForm;