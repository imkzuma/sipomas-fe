import { Col, Container, Row } from "react-bootstrap";
import HeaderOverview from "../../welcomeDashboard";
import FormEditUser from "./form";

export default function EditUserComponents(){
    return(
        <Container fluid className = 'py-4 px-5'>
            <HeaderOverview name = "Admin" role = "admin" />
            <Row>
                <div className="py-2">
                    <h4 className="fw-bold">Search Data</h4>
                    <p className="text-muted">Search the data by email, to edit the data.</p>
                </div>

                <FormEditUser />
            </Row>
        </Container>
    )
}