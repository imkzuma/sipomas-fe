import { Col, Container, Row } from "react-bootstrap";

export function AuthLayouts({ children } : any){
    return(
        <Container
            fluid 
            className = "d-flex justify-content-center align-items-center" 
            style = {{ minHeight: "100vh" }}
        >
            <Container>
                <Row className = 'justify-content-center'>
                    <Col lg = {4}>
                        { children }
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}