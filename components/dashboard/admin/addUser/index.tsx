import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";
import { Skeleton } from "antd";

const FormAddUser = dynamic(() => import("./form"), { loading: () => <Skeleton active />});
const HeaderOverview = dynamic(() => import("@/components/dashboard/welcomeDashboard"), { loading: () => <Skeleton active />});

export default function AddUserComponent(){
    return(
        <Container fluid className = 'py-4 px-5'>
            <HeaderOverview name = "Admin" role = "admin" />
            <Row>
                <div className="py-2">
                    <h4 className="fw-bold">User Form</h4>
                    <p className="text-muted">Fill this form to create a user and give a role.</p>
                </div>
                
                <Col lg = {6} className = 'bg-white p-4 rounded shadow-md'>
                    <FormAddUser />
                </Col>
            </Row>
        </Container>
    )
}