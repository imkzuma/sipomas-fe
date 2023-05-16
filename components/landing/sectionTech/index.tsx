/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { DataSectionTech } from "@/utils/interfaces/landing";

import style from "@/styles/SectionTech.module.css";

const technologies : DataSectionTech[] = [
    { id: 1, img: 'nextjs.webp', alt: "NEXT JS", title: "Next Js", description: "Next.js is an open-source React front-end development web framework functionality such as server-side rendering" },
    { id: 2, img: "golang.webp", alt: "GO LANG", title: "Go Lang", description: "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software." },
    { id: 3, img: "bootstrap.webp", alt: "BOOTSTRAP", title: "Bootstrap", description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development." }
];

export default function SectionTechnology(){ 
    return(
        <Container className = 'py-5'>
            <Row className = 'position-relative'>
                <Col lg = {1} className="d-flex justify-content-center align-item-center position-absolute" style = {{gap: "2rem"}}>
                    <div className = {style.parent__vr} >
                        <div className = {style.vr}></div>
                    </div>
                    <img alt="lines hero" aria-hidden="true" className={style.line__hero} width="237" height="437" src="/assets/img/section/git-branch-security.svg" />
                </Col>
                <Col lg = {11} className = 'offset-lg-1 pt-5 ps-5'>
                    <Col lg = {6}>
                        <Stack className = 'py-5'>
                            <div className="pt-5">
                                <small className = "text-primary border border-primary py-1 px-2 rounded-pill">INFORMATION</small>
                                <h1 className = 'py-2 fw-bold text-primary display-5'>TECHNOLOGY USED</h1>
                                <p className="text-white fs-4">
                                    The following are the technologies used in SIPOMAS
                                </p>
                            </div>
                        </Stack>
                    </Col>

                    <Row>
                        {technologies.map((item) => {
                            return(
                                <Col lg = {4} key = { item.id }>
                                    <Card style = {{background: "#161b22"}}>
                                        <Card.Header className = 'text-center' style = {{ background: "rgba(235, 245, 255, 0.3)" }}>
                                            <Image 
                                                src = {`/assets/img/section/${ item.img }`} 
                                                alt = { item.alt } 
                                                width = {150} 
                                                height = {150} 
                                            />
                                        </Card.Header>
                                        <Card.Body className = 'text-center p-4'>
                                            <h4 className = 'fw-bold text-white'>{ item.title }</h4>
                                            <p className = 'text-secondary'>{ item.description }</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}