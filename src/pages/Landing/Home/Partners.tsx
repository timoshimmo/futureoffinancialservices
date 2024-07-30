import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import partnerBazara from "../../../assets/images/brands/bazara_logo.png";
//import { partnerImgsData } from '../../../common/data';

const Partners = () => {
    
    return (
        <React.Fragment>
            <section className="partners-section px-5" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={6}>
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                                <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                            </div>
                            <div className="mt-5">
                                <Link to="/partners" className="btn btn-primary btn-partner">Become a Partner</Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='justify-content-center d-flex align-items-center gap-2'>
                                <div className='px-2'>
                                    <img src={partnerBazara} alt="" width={250}/>
                                </div>
                                <div className="vl"></div>
                                <div className='px-2'>
                                    <img src={partnerBazara} alt="" width={250}/>
                                </div>
                            </div>
                            {/*<Row className='justify-content-center d-flex mx-auto gap-2'>
                                <Col lg={6} sm={6} xs={6} className='d-flex gap-2 justify-content-center'>
                                    <div>
                                        <img src={partnerBazara} alt="" width={100}/>
                                    </div>
                                </Col>
                                <div className="vl border h-100"></div>
                                <Col lg={6} sm={6} xs={6} className='d-flex gap-2 justify-content-center'>
                                    <div className='w-100'>
                                        <img src={partnerBazara} alt="" />
                                    </div>
                                </Col>
                                partnerImgsData.map((item, key) => (
                                    <Card className="bg-white w-100 partner-card">
                                        <CardBody className='p-0 d-flex justify-content-center align-items-center'>
                                            
                                        </CardBody>
                                    </Card>
                                ))                      
                            </Row> */} 
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Partners;