import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import partnerBazara from "../../../assets/images/brands/bazara_logo.png";
import partnerPeerless from "../../../assets/images/brands/peerless_logo_light.svg";
//import { partnerImgsData } from '../../../common/data';

const Partners = () => {
    
    return (
        <React.Fragment>
        <section className="section partners-section px-5" style={{ backgroundColor: "#141413" }}>
            <Container>
                <Row className="justify-content-center align-items-center partners-row-web">
                        <Col lg={6} sm={12}>
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                                <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                            </div>
                            <div className="mt-5">
                                <Link to="/partners" className="btn btn-primary btn-partner">Become a Partner</Link>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='justify-content-center d-flex align-items-center gap-2 partners-img-area'>
                                <div className='px-2'>
                                    <img src={partnerPeerless} alt="" className="partners-img-style" />
                                </div>
                                <div className="vl"></div>
                                <div className='px-2'>
                                    <img src={partnerBazara} alt="" className="partners-img-style" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center partners-row-mobile">
                        <Col lg={6} sm={12}>
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                                <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 partners-img-area'>
                                <div className='ps-2'>
                                    <img src={partnerPeerless} alt="" className="partners-img-style" />
                                </div>
                                <div className="vl"></div>
                                <div className='pe-2'>
                                    <img src={partnerBazara} alt="" className="partners-img-style" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="d-flex mt-5">
                                <Link to="/partners" className="btn btn-primary btn-partner">Become a Partner</Link>
                            </div>
                        </Col>
                    </Row>
                {/*<Row className="justify-content-center align-items-center">
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
                                <img src={partnerPeerless} alt="" width={250}/>
                            </div>
                        </div>
                    </Col>
    </Row> */}
            </Container>
        </section>
    </React.Fragment>
    );
}

export default Partners;