import { Row, Col } from "react-bootstrap";

import { BookOutlined, UserOutlined, CaretUpOutlined, CaretDownOutlined, AntCloudOutlined } from '@ant-design/icons';

interface DataOverview{
    id: number;
    icon: JSX.Element;
    title: string;
    total: number;
    percent: string;
    percentIcon?: JSX.Element;
}

const data : DataOverview[] = [
    {id: 1, icon: <UserOutlined className = "text-primary fs-2" />, title: "Active Users", total: 203, percent: "10%", percentIcon : <CaretUpOutlined className = "text-success fs-2" />},
    {id: 2, icon: <BookOutlined className = "text-primary fs-2" />, title: "Posts Booked", total: 203, percent: "10%", percentIcon: <CaretDownOutlined className = "text-danger fs-2" />}, 
    {id: 3, icon: <BookOutlined className = "text-primary fs-2" />, title: "Posts Booked", total: 203, percent: "10%", percentIcon : <CaretUpOutlined className = "text-success fs-2" />},
    {id: 4, icon: <AntCloudOutlined className = "text-primary fs-2" />, title: "Sipomas Acessed", total: 500, percent: "5%", percentIcon : <CaretUpOutlined className = "text-success fs-2" /> }
];

export default function SectionOneOverview(){
    return(
        <section className = 'pb-4'>
            <Row>
                {data.map((item) => {
                    return(
                        <Col lg = {3} key = { item.id }>
                            <div className="shadow-sm">
                                <div className="p-4 d-flex align-items-center justify-content-between bg-white">
                                    <div>
                                        <h6 className="text-primary fw-bold">{ item.title }</h6>
                                        <small className = 'text-muted'>10/04/2023</small>
                                    </div>
                                    { item.icon }
                                </div>
                                <div className="p-4 d-flex align-items-center justify-content-between" style = {{background: "#e6f4ff"}}>
                                    <h2 className="text-primary fw-bold">{ item.total }</h2>
                                    <div className="d-flex align-items-center gap-2">
                                        { item.percentIcon }
                                        <h6 className = 'text-muted fw-bold my-auto'>{ item.percent }</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )})
                }
            </Row>
        </section>
    )
}