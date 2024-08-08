import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ic_phone from "../../../assets/images/icons/ic_call.png";
import ic_email from "../../../assets/images/icons/ic_email.png";

const Contact = () => {
    return (
        <React.Fragment>
            <section className="outer-contact-body position-relative" style={{ backgroundColor: '#33CC997A' }}>
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="inner-contact-body">
                        <Col lg={4} sm={12} className='mobile-bottom-padding'>
                            <div>
                                <h2 className="mb-2 fw-bold lh-base text-white">Need More Assistance?</h2>
                                <p className="fs-14 text-white">We are here to assist you with any requires you may have.</p>
                            </div>
                        </Col>
                        <Col lg={3} sm={12} className='mobile-bottom-padding'>
                            <div>
                                <div className='border border-white rounded-3 d-flex align-items-center justify-content-center mb-2' style={{ height: '30px', width: '30px' }}>
                                    <img src={ic_phone} height={15} />
                                </div>
                                <h6 className="fw-semibold lh-base text-white fs-14">Call Suppport Team</h6>
                                <p className="mb-2 fs-14 text-white">Questions? We've got you covered</p>
                                <a href="tel:+12816835601" target="_blank" className="text-white fw-normal fs-14"><u>+12816835601</u></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                            <div>
                                <div className='border border-white rounded-3 d-flex align-items-center justify-content-center mb-2' style={{ height: '30px', width: '30px' }}>
                                    <img src={ic_email} height={15}/>
                                </div>
                                <h6 className="fw-semibold lh-base text-white fs-14">Email Suppport Team</h6>
                                <p className="mb-2 fs-14 text-white">Questions? We've got you covered</p>

                                <a href="mailto:contact@futureoffinancialservices.org" target="_blank" className="text-white fw-normal fs-14"><u>contact@futureoffinancialservices.org</u></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};
export default Contact;