import Link from "next/link";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BsEnvelopeFill, BsPinFill, BsTelephoneFill } from "react-icons/bs";

export default function FooterComponent(){
    return(
        <Container fluid className = 'pt-5 px-0'>
            <Container className = 'py-5'>
                <Row className="gap-3">
                    <Col lg = {3}>
                        <Stack direction = "vertical" gap = {4}>
                            <h4 className = {`text-white fw-900 my-auto`}>
                                <span className='text-white bg-primary rounded px-2 me-1'>SI</span>POMAS.
                            </h4>
                            <p className = "text-secondary">
                                SIPOMAS or Post Management Information System is a web-based application.
                            </p>
                        </Stack>
                    </Col>
                    <Col lg = {3}>
                        <Stack direction = "vertical" gap = {4}>
                            <h5 className="text-white">Contact Us</h5>
                            <Stack direction="vertical" gap = {2} className = "align-items-center">
                                <Stack direction="horizontal" gap = {3}>
                                    <BsTelephoneFill className = "secondary text-primary opacity-50" />
                                    <span className = "text-secondary">+62 812 3456 7890</span>
                                </Stack>
                                <Stack direction="horizontal" gap = {3}>
                                    <BsEnvelopeFill className = "secondary text-primary opacity-50" />
                                    <span className = "text-secondary">sipomas@mail.com</span>
                                </Stack>
                                <Stack direction="horizontal" gap = {3} className="align-items-center">
                                    <BsPinFill className = "secondary fs-4 text-primary opacity-50" />
                                    <span className = "text-secondary">
                                        Udayana University Street, Jimbaran, Bali, Indonesia.
                                    </span>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg = {2}>
                        <Stack direction = "vertical" gap = {4}>
                            <h5 className="text-white">Useful Links</h5>
                            <Stack direction="vertical" gap = {2}>
                                <Link href = "/" className = "text-secondary text-decoration-none"> Home </Link>
                                <Link href = "/" className = "text-secondary text-decoration-none"> About </Link>
                                <Link href = "/" className = "text-secondary text-decoration-none"> Contact </Link>
                                <Link href = "/auth" className = "text-secondary text-decoration-none">Sipomas</Link>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg = {3}>
                        <Stack direction = "vertical" gap = {4}>
                            <h5 className="text-white">Random Quotes</h5>
                            <Stack direction="vertical" gap = {2} className = 'text-secondary'>
                                <q className="fs-6">
                                    The technology of today is the result of the imagination of yesterday.
                                </q>
                                <p>- Carl Saganv</p>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <div className="p-4 text-center text-secondary" style = {{background: "#161b22"}}>
                &copy; 2023 SIPOMAS. All Rights Reserved.
            </div>
        </Container>
    )
}