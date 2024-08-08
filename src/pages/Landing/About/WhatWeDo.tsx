import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

// Import Images
import imgWhatWeDo from "../../../assets/images/about/img_what_we_do.png";
import { whatWeDoData } from 'common/data';

const WhatWeDo = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark px-4 bottom-padding" id="features" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>What We Do</h2>
                                <p className="mb-5 fs-14 text-white text-center">FFS provides a comprehensive range of services and resources designed to support the continuous evolution of financial services</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} sm={12}>
                            <div className='h-100'>
                                <img src={imgWhatWeDo} alt="" className="img-fluid border border-0 rounded-4 h-100" />
                            </div>
                        </Col>
                        <Col lg={7} sm={12}>
                            <Row className='align-items-center pt-3'>
                                {whatWeDoData.map((item, key) => (
                                    <Col key={key} lg={6} sm={6} className="p-0 d-flex justify-content-end">
                                        <Card className="border mb-3 border-primary bg-primary rounded-2 shadow-none what-we-do-card">
                                            <CardBody className="p-3">
                                                <div className="py-2">
                                                    <img src={item.img} className='mb-2' width={30}/>
                                                    <h4 className='mb-2 fs-15 text-white fw-bold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.title}</h4>
                                                    <p className='text-white fs-11'>{item.description}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default WhatWeDo;