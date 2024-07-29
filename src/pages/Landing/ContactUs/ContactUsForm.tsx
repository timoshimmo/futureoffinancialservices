import React from 'react';
import { Container, Row, Col, Card, CardBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const SponsorsForm = () => {
    return (
        <React.Fragment>
            <section className="section form-container">
                <Container>
                    <Row className="justify-content-end">
                        <Col lg={5}>
                            <div className="w-100">
                                <h2 className="fw-bold lh-sm text-primary display-6" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Have Questions? Get in Touch</h2>
                                <p className="mb-4 fw-light text-white fs-15" >Whether you need more information about the conference, assistance with registration, or have specific inquiries, our team is ready to assist you. Fill out the form and our team will get back to you shortly.</p>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className='px-3'>
                            <Card className="border mb-5 border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={6} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">First Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter First Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Last Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Last Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Email Address</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="email" placeholder="Enter Email Address" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Phone Number</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Primary Phone Number" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Additional Information</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <textarea rows={4} placeholder="Enter Your Message here" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-5'>
                                            <input type="button" className="w-100 btn btn-primary border border-primary rounded-5 py-2 fs-16" value="Send" />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default SponsorsForm;