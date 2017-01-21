import React, {Component} from "react";
import {Col, Row, Button, Table, Card} from "antd";
import {Link} from 'react-router';

const ButtonGroup = Button.Group;

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};

class SearchResult extends Component {
    handleDelete() {

    }

    render() {
        const totalCount = 10;
        return (
            <Card title={`총 ${totalCount}건`} className="panel">
                <Row>
                    <Col span={12} style={{textAlign: 'left'}}>
                        <Button style={{marginLeft: 8}} onClick={::this.handleDelete}
                            className="red-6"
                        >
                            삭제
                        </Button>
                        <ButtonGroup style={{marginLeft: 10}}>
                            <Button icon="download">선택 다운로드</Button>
                            <Button type="primary" icon="download">전체 다운로드</Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={12} style={{textAlign: 'right'}}>
                        <Button type="primary">
                            <Link to="/menuA/form">등록</Link>
                        </Button>
                    </Col>
                </Row>
                <br/>
                <Table columns={columns} dataSource={data} rowSelection={rowSelection}>
                </Table>
            </Card>
        );
    }
}

export default SearchResult;