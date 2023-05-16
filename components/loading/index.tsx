import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";

const Loading : FunctionComponent = () => {
    return(
        <Container 
            fluid
            style = {{ minHeight : "100vh" }}
            className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 bg-white"
        >
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </Container>
    )
}

export default Loading;