/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";
import { ButtonPrimary, ButtonTransparent } from "@/components/button";

import style from "@/styles/Hero.module.css";
import Link from "next/link";

export default function Hero(){
    const [email, setEmail] = useState<String>("");
    return(
        <Container 
            fluid
            className = 'd-flex justify-content-center'
            style = {{ minHeight: "150vh", paddingTop: "10rem" }}
        >
            <div className = {style.drone}>
                <img src = "/assets/img/hero/hero-drone.webp" alt = "drone" width="100%" />
            </div>

            <Container>
                <Row className = "align-items-center">
                    <Col lg = {1} className = "position-relative">
                        <img alt="lines hero" aria-hidden="true" className={style.line__hero} width="537" height="737" src="/assets/img/hero/lines-hero.svg" />
                        <div className = {style.parent__vr} >
                            <div className = {style.vr}></div>
                        </div>
                    </Col>
                    <Col lg = {9} style = {{paddingTop: "20rem", zIndex: "1"}}>
                        <h6 className = 'pt-5 fs-3 text-primary'>Event Bookings</h6>
                        <h1 className = 'display-1 mb-3 fw-900 text-white'>
                            SIPOMAS BOOKINGS
                        </h1>
                        <Col lg = {10}>
                            <p className = 'fs-4 text-muted mb-4'>
                                Sipomas is a productivity platform that allows users to create and manage various types of content in one integrated place. Collaboration features make teamwork easy.
                            </p>
                        </Col>
                        <Row className = 'align-items-center'>
                            <Col lg = {7}>
                                <InputGroup>
                                    <Form.Control
                                        type = "email"
                                        placeholder = "Enter your email address"
                                        className = "p-3"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <ButtonPrimary>
                                        <Link href = {`/auth/register?regmail=${email ? email : ""}`} className = 'text-white text-decoration-none'>
                                            Sign Up For Sipomas
                                        </Link>
                                    </ButtonPrimary>
                                </InputGroup>
                            </Col>
                            <Col lg = {3}>
                                <ButtonTransparent>
                                    <span className = 'text-white'>Read More</span>
                                </ButtonTransparent>
                            </Col>
                        </Row>
                        <Stack direction  = "horizontal" gap = {4} className = 'pt-5 text-secondary'>
                            <p>BOOTSTRAP</p>
                            <p>NEXT.JS</p>
                            <p>FRAMER MOTION</p>
                            <p>GOLANG</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}