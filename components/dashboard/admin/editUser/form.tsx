import { useState } from 'react';
import { Form, Input, Table } from "antd";
import { Col } from "react-bootstrap";
import TableUser from "./tableUser";

export default function FormEditUser(){
    const [searched, setSearched] = useState(false);
    const [form] = Form.useForm();
    const data = [
        {
            id: 1,
            name: "joni",
            email : "joni@gmail.com",
            address: "this address",
            city: "this city",
            zipcode : 101010,
            phone: 890123
        }
    ];
    return(
        <>
            <Col lg = {6} className="p-4 bg-white rounded">
                <Form 
                    form={form}
                    layout = "vertical"
                    requiredMark = 'optional'
                >
                    <Form.Item label = "Search" required tooltip="Input value must be email to search data you want to edit.">
                        <Input.Search 
                            placeholder="Search the data"
                            onPressEnter = {() => setSearched(true)}
                            required
                        />
                    </Form.Item>
                </Form>
            </Col>
            {
                searched ?      
                    <Col lg = {12}>
                        <TableUser data = {data} />
                    </Col>
                : null
            }
        </>
    )
}