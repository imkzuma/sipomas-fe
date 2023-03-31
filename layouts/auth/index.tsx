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
                    <Col xl = {4} lg = {5} md = {7} sm = {8}>
                        { children }
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}