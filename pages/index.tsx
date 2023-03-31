/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Index(){
  const [data, setData] = useState<any[]>([]);

  const getData = async() => {
    const { data } = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id" : "64195978d29b3a3213c6c3cc"
      }
    });
    console.log(data.data);
    setData(data.data);
  }

  useEffect(() => {
    getData();

  }, []); 

  return(
    <Container>
      {
        data.map((item, index) => {
          return(
            <Row key = { index }>
              <Col lg = { 5 } className = 'text-end'>
                <img
                  src = { item.image }
                  width = "100%"
                  alt = { item.id }
                />
              </Col>
            </Row>
          )
        })
      }
    </Container>
  )
}