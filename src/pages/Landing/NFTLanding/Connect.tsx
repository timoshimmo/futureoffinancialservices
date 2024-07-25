import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connectData } from '../../../common/data';
import arrow_link from "../../../assets/images/home/img_link_arrow.png";

const Connect = () => {
    
    return (
        <React.Fragment>
            <section className="section body-bg-dark" id="wallet">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-secondary">One Summit <span className='text-primary'>Unlimited Possibilities</span></h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-4 mt-1">
                        {connectData.map((item, key) => (
                            <Col key={key} lg={3} sm={12}>
                                <Card className="border-2 border-primary rounded-4 shadow-none card-possibilities">
                                    <CardBody className="p-2">
                                        <img src={item.img} alt="" className="mb-3 pb-2 w-100 rounded-2" />
                                        <div className='hstack w-100 justify-content-between align-items-start pb-2'>
                                            <h5 className='text-primary fs-18 mb-0' style={{ fontFamily: 'Georgia' }}>{item.title}</h5>
                                            <img height={23} src={arrow_link}/>
                                        </div>                       
                                        <p className="pb-3 fs-12">{item.textContent}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;