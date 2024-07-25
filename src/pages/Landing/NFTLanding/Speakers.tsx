import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { speakersData } from '../../../common/data';

const Speakers = () => {
    
    return (
        <React.Fragment>
            <section className="section" id="speakers">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Featured Speakers</h2>
                        </div>
                    </Col>
                </Row>
                
                <Row className='web-featured-speakers'>
                    <Marquee
                        pauseOnClick={true}>
                            {speakersData.map((item, key) => (
                                <Col key={key} lg={3}>
                                    <Card className="shadow-none rounded-0 speakers-card mx-2 text-white" style={{ cursor: "pointer" }}>
                                        <CardBody className='p-0'>
                                            <img src={item.img} alt="" className="avatar-speaker"/>
                                            <div className='w-100 mt-2 px-2'>
                                                <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                            </div>
                                            
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}   
                    </Marquee>
                                                  
                </Row>
                <Row className='mobile-featured-speakers'>
                    {speakersData.map((item, key) => (
                        <Col key={key} sm={12}>
                            <Card className="shadow-none rounded-0 speakers-card text-white" style={{ cursor: "pointer" }}>
                                <CardBody className='p-0'>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-2 px-2'>
                                        <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                    
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

export default Speakers;