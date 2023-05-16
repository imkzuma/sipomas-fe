import Image from "next/legacy/image";
import { Container, Row, Col, Stack } from "react-bootstrap";

export default function SectionWhat(){
    return(
        <Container className = 'py-3 pb-5'>
            <Row className = 'justify-content-center'>
                <Col lg = {10} className = "pb-4">
                    <Col lg = {10}>
                        <h6 className = "text-white fs-4 fw-bold pb-4">WHAT IS SIPOMAS FOR</h6>
                        <p className = "text-white fs-2" style = {{lineHeight: "1.6"}}>
                            <span className="text-primary pe-2">
                            SIPOMAS or Post Management Information System is a web-based application.
                            </span>
                            That assists officers and users in scheduling posts according to an organization is standard operating procedures (SOPs). 
                        </p>
                    </Col>
                </Col>
            </Row>
                <Col lg = {11} className = 'shadow-img rounded-4'>
                    <Image
                        src = "/assets/img/section/section-what.png"
                        alt = "What is SIPOMAS"
                        layout = "responsive"
                        width = {20}
                        height = {13}
                        className="shadow-img rounded-4"
                    />
                </Col>
        </Container>
    )
}