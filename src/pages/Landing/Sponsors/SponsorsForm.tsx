import React from 'react';
import { Container, Row, Col, Card, CardBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const PartnerForm = () => {
    return (
        <React.Fragment>
            <section className="section form-container-sponsor">
                <Container>
                    <Row className="justify-content-end">
                        <Col lg={7} sm={12} className='px-3'>
                            <Card className="border mb-5 border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                    <Row>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">First Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter First Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Last Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Last Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>

                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Company Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Company Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Position/Title Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Position/Title Name" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
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
                                            <Label className="fs-13 form-label mb-0">Company Website</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <input type="text" placeholder="Enter Company's Website URL" className="border-0 fs-14"  style={{ color: '#303030', backgroundColor: 'transparent' }} />
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

export default PartnerForm;