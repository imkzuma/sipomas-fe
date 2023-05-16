import { ButtonOutline, ButtonPrimary } from "@/components/button";
import Image from "next/legacy/image";
import { Col, Container, Row, Stack } from "react-bootstrap";

export default function SectionFaq(){
    return(
        <Container className = 'position-relative' style = {{minHeight: "100vh"}}>
            <Stack direction="vertical" className = 'pt-5 justify-content-center align-items-center'>
                <Col lg = {8} className = 'pt-4 text-center'>
                    <span className = "text-primary fs-4 border border-primary py-1 px-3 rounded-pill">Asked Questions</span>
                    <h1 className = 'display-3 fw-900 text-white py-2'>
                        The Place for anyone from anywhere to create anything
                    </h1>
                    <Col lg = {10} className="m-auto">
                        <p className = 'text-secondary fs-5'>
                            Whether you are a developer, a designer, or a business leader. SIPOMAS is the place to build your next big idea.
                            If you have any questions, please contact us at the following email address. dont worry we will reply as soon as possible. Thank you.
                        </p>
                    </Col>
                    <Row className="justify-content-center py-4">
                        <Col lg = {3}>
                            <ButtonPrimary className = "fs-5 px-5 border border-primary">
                                Contact Us
                            </ButtonPrimary>
                        </Col>
                        <Col lg = {4}>
                            <ButtonOutline variant = "primary" className = "fs-5 px-5">
                                Go to Dashboard
                            </ButtonOutline>
                        </Col>
                    </Row>
                </Col>
            </Stack>
            <Row className="justify-content-center">
                <Col lg = {5}>
                    <Image
                        src = "/assets/img/section/astrocat.png"
                        alt = "Astrocat"
                        layout = "responsive"
                        width = {10}
                        height = {10}
                    />
                </Col>
            </Row>
        </Container>
    )
}