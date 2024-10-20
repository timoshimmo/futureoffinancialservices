import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import partnerBazara from "../../../assets/images/brands/bazara_logo.png";
import partnerPeerless from "../../../assets/images/brands/peerless_logo_light.svg";
import img_skaleet_logo from "../../../assets/images/brands/skaleet_logo@2x.png";
import sterling_logo_new from "../../../assets/images/brands/sterling_logo_new.png";
import SeaBaas_logo_white from "../../../assets/images/brands/SeaBaas_logo_white.png";
//Sponsors: SeaBaas by Peerless, Bazara, Sterling, Skaleet
const Partners = () => {
    
    return (
        <React.Fragment>
            <section className="partners-section px-4" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center align-items-center partners-row-web">
                        <Col lg={4} sm={12}>
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                                <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                            </div>
                            <div className="mt-5">
                                <Link to="/partners" className="btn btn-primary btn-partner">Become a Partner</Link>
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Row className="justify-content-between">
                                <Col lg={5}>
                                    <p className='fs-12 text-white fw-semibold'>Anchor Sponsors</p> 
                                    <div className='d-flex align-items-center gap-4 partners-img-area'>
                                        <div>
                                            <img src={SeaBaas_logo_white} alt="" className="partners-img-style" />
                                        </div>
                                        <div>
                                            <img src={partnerBazara} alt="" className="partners-img-style" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                <p className='fs-12 text-white fw-semibold'>Other Sponsors</p>
                                <div className='d-flex align-items-center gap-4 partners-img-area'>
                                    <div>
                                        <img src={sterling_logo_new} alt="" className="partners-img-style" />
                                    </div>
                                    <div>
                                        <img src={img_skaleet_logo} alt="" className="partners-img-style" />
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>

                    <Row className="align-items-center partners-row-mobile">
                        <Col lg={6} sm={12} className="mb-4">
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                                <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                            </div>
                            <p className='fs-12 text-white fw-semibold'>Anchor Sponsors</p> 
                            <div className='d-flex justify-content-between align-items-center gap-3 mb-5 partners-img-area'>
                                <div>
                                    <img src={SeaBaas_logo_white} alt="" className="partners-img-style" />
                                </div>
                                <div>
                                    <img src={partnerBazara} alt="" className="partners-img-style" />
                                </div>
                            </div>
                            <p className='fs-12 text-white fw-semibold'>Other Sponsors</p> 
                            <div className='d-flex justify-content-between align-items-center gap-3 partners-img-area'>
                                <div>
                                    <img src={sterling_logo_new} alt="" className="partners-img-style" />
                                </div>
                                <div>
                                    <img src={img_skaleet_logo} alt="" className="partners-img-style" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="d-flex">
                                <Link to="/partners" className="btn btn-primary btn-partner mt-5">Become a Partner</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Partners;