/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row, Stack } from "react-bootstrap";
import { DataSectionWhy } from "@/utils/interfaces/landing";

import style from "@/styles/SectionWhy.module.css";

const data : DataSectionWhy[] = [
    { id: 1, title: "#1", description: "Users can create and manage posts easily without having special technical skills." },
    { id: 2, title: "#2", description: "Has a calendar view feature to make it easier for users to manage posts." },
    { id: 3, title: "#3", description: "SIPOMAS can help users to maintain consistency in their posts, both in frequency and time of posting." },
    { id: 4, title: "#4", description: "Calendar view feature for easy post management." },
];

export default function SectionWhy(){
    return(
        <Container className = 'position-relative'>
            <Row className = 'position-relative'>
                <Col lg = {1} className="d-flex justify-content-center align-item-center position-absolute" style = {{gap: "2rem"}}>
                    <div className = {style.parent__vr} >
                        <div className = {style.vr}></div>
                    </div>
                    <img alt="lines hero" aria-hidden="true" className={style.line__hero} width="237" height="437" src="/assets/img/section/section-why.svg" />
                </Col>
            </Row>

            <Stack direction = "vertical" className = 'ps-5 pt-5'>
                <Col lg = {5} className="ps-5 pt-5">
                    <div className="ps-5 pt-4">
                        <small className = "text-primary border border-primary py-1 px-2 rounded-pill">INFORMATION</small>
                        <h1 className = "display-5 fw-bold text-primary py-2">WHY SIPOMAS ?</h1>
                        <p className = "fs-4 text-white">
                            The following are the reasons why you should use SIPOMAS.
                        </p>
                    </div>
                </Col>
            </Stack>

            <div className = 'pt-5 mt-5 px-5'>
                <Row className = 'py-5 justify-content-start rounded border border-dark' style = {{background: "#161b22"}}>
                    {data.map((item) => {
                        return(
                            <Col lg = {3} key = { item.id }>
                                <div className = "px-5">
                                    <div>
                                        <h1 className = "text-primary">{ item.title }</h1>
                                        <p className = "text-white lh-lg fs-5">{ item.description }</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    )
}