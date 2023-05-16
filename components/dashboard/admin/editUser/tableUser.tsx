import { MouseEvent, useEffect, useState } from 'react';
import { Button, Popconfirm, Skeleton, Space, Table, Tag } from 'antd';

import type { ColumnsType, TableProps } from 'antd/es/table';
import axios from 'axios';

import { InterfaceTableUsers } from '@/utils/interfaces/dashboard/admin';
import { QuestionCircleOutlined } from '@ant-design/icons';

const confirmDelete = (id : string) => {
    console.log(id);
}

const columns: ColumnsType<InterfaceTableUsers> = [
    {
        title: 'No',
        dataIndex: 'no',
        render: (text, record, index) => {
            return(
                <span>
                    {index + 1}
                </span>
            )
        },
        responsive : ['sm'],
        fixed : 'left',
        width : 70
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
        responsive : ['sm'],
        fixed: "left"
    },
    {
        title: 'Email',
        dataIndex: 'email',
        responsive : ['sm']
    },
    {
        title: 'Address',
        dataIndex: 'address',
        responsive : ['sm']
    },
    {
        title: 'City',
        dataIndex: 'city',
        responsive : ['sm']
    },
    {
        title: 'Zipcode',
        dataIndex: 'zipcode',
        responsive : ['sm']
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        responsive : ['sm']
    },
    {
        title: 'Role',
        dataIndex: 'role',
        render : (text, record, index) => {
            return(
                <Tag color = 'green' className = 'fw-bold'>Admin</Tag>
            )
        },
        responsive : ['sm'],
        width: 80
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record, index) => {
            return(
                <Space direction='horizontal' size='small'>
                    <Button type='primary' size='middle' onClick = {() => console.log(record.key)}>Edit</Button>
                    <Popconfirm
                        placement = 'topRight'
                        title = "Delete User"
                        description = "Are you sure to delete this user?"
                        icon = { <QuestionCircleOutlined style={{ color: 'red' }} /> }
                        onConfirm = { () => confirmDelete(record.email) }
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            )
        },
        responsive : ['sm'],
        fixed: "right"
    }
];

const onChange: TableProps<InterfaceTableUsers>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

export default function TableUser({ data } : any){
    const [loading, setLoading] = useState<boolean>(false);
    const [Data, setData] = useState<InterfaceTableUsers[]>([]);
    
    return(
        <div className = 'py-4'>
            <Table 
                columns = { columns } 
                dataSource = { loading ? [] : data } 
                locale = {{
                    emptyText : loading&& <Skeleton active /> 
                }}
                onChange = { onChange } 
                size = "large"
                scroll={{ x: 1300 }}
                rowKey='id'
                bordered
                loading = { loading }
                pagination = {{
                    defaultPageSize : 5,
                    showSizeChanger : false,
                    showTotal : (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    responsive : true
                }}
                summary={() => (
                    <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={2}>
                            <Tag color = 'green' className = 'fw-bold'>{data.length} User Get</Tag>
                        </Table.Summary.Cell>
                    </Table.Summary.Row>
                )}
                className='rounded-3 shadow-md' 
            />
        </div>
    )
}