import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, LockOutlined, MailOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Select, Space } from 'antd';
import { Col, Row } from 'react-bootstrap';

type RequiredMark = boolean | 'optional';

export default function FormAddUser(){
    const [ form ] = Form.useForm();

    return (
        <Form
            form={form}
            layout = "vertical"
            requiredMark = 'optional'
        >
            <Row>
                <Col lg = {6}>
                    <Form.Item label = "First Name" required tooltip="This is a required field">
                        <Input
                            placeholder="Enter your First Name"
                            prefix={<UserOutlined className="site-form-item-icon pe-3" />}
                            showCount
                            maxLength={50}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>
                <Col lg = {6}>
                    <Form.Item label = "Last Name" tooltip="This is a optional field">
                        <Input
                            placeholder="Enter your Last Name"
                            prefix={<UserOutlined className="site-form-item-icon pe-3" />}
                            showCount
                            maxLength={50}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col lg = {6}>
                    <Form.Item label = "Username" required tooltip="This is a required field">
                        <Input
                            placeholder="Enter your Username"
                            prefix={<TeamOutlined className="site-form-item-icon pe-3" />}
                            showCount
                            maxLength={20}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>
                <Col lg = {6}>
                    <Form.Item label = "Email" required tooltip="This is a required field">
                        <Input
                            placeholder="Enter your Email"
                            prefix={<MailOutlined className="site-form-item-icon pe-3" />}
                            showCount
                            maxLength={50}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col lg = {6}>
                    <Form.Item
                        label="Password"
                        required tooltip="This is a required field"
                    >
                        <Input.Password
                            placeholder="input password"
                            prefix={<LockOutlined className="site-form-item-icon pe-3" />}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            showCount
                            minLength={8}
                            maxLength={20}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>

                <Col lg = {6}>
                    <Form.Item
                        label="Retype Password"
                        required tooltip="This is a required field"
                    >
                        <Input.Password
                            placeholder="input password"
                            prefix={<LockOutlined className="site-form-item-icon pe-3" />}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            showCount
                            minLength={8}
                            maxLength={20}
                            className='p-2 px-3'
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item label="Role" required tooltip="This is a required field"> 
                <Select 
                    placeholder="Select a role"
                >
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="user">User</Select.Option>
                </Select>
            </Form.Item>
            
            <Form.Item className='text-end'>
                <Button type="primary" htmlType='submit'>Submit</Button>
                <Button type="default" htmlType='reset' danger className = 'ms-3'>Cancel</Button>
            </Form.Item>
        </Form>
    );
};