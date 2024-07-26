import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ic_phone from "../../../assets/images/icons/ic_call.png";
import ic_email from "../../../assets/images/icons/ic_email.png";

const Contact = () => {
    return (
        <React.Fragment>
            <section className="p-5 position-relative" style={{ backgroundColor: '#33CC997A' }}>
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="align-items-center justify-content-between p-5">
                        <Col lg={4} sm={12}>
                            <div>
                                <h2 className="mb-2 fw-bold lh-base text-white">Need More Assistance?</h2>
                                <p className="fs-14 text-white">We are here to assist you with any requires you may have.</p>
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                            <div>
                                <div className='border border-white rounded-3 d-flex align-items-center justify-content-center mb-2' style={{ height: '30px', width: '30px' }}>
                                    <img src={ic_phone} height={15} />
                                </div>
                                <h6 className="fw-semibold lh-base text-white fs-14">Call Suppport Team</h6>
                                <p className="mb-2 fs-14 text-white">Questions? We've got you covered</p>

                                <Link to="//1.envato.market/velzon-admin" target="_blank" className="text-white fw-normal fs-14"><u>Call Support Team</u></Link>
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                            <div>
                                <div className='border border-white rounded-3 d-flex align-items-center justify-content-center mb-2' style={{ height: '30px', width: '30px' }}>
                                    <img src={ic_email} height={15}/>
                                </div>
                                <h6 className="fw-semibold lh-base text-white fs-14">Email Suppport Team</h6>
                                <p className="mb-2 fs-14 text-white">Questions? We've got you covered</p>

                                <Link to="//1.envato.market/velzon-admin" target="_blank" className="text-white fw-normal fs-14"><u>Email Support Team</u></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};
export default Contact;