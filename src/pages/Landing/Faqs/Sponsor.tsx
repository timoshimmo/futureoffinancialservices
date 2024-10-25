import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import imgNumbersAbout from "../../../assets/images/about/img_about_numbers.png";
import { numbersData } from 'common/data';

const Sponsor = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark px-4" id="features" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="gy-4">
                        <Col lg={6} sm={12}>
                            <div className="w-100">
                                <p className="mb-3 fw-semibold lh-base text-secondary fs-14">FFS <span className='text-primary'>by the Numbers</span></p>
                                <h3 className="mb-3 display-6 fw-semibold text-white">We’re only just getting started on our journey</h3>
                            </div>
                            <Row className="justify-content-center mx-auto">
                                {numbersData.map((item, key) => (
                                    <Col key={key} lg={6} sm={6} className="numbers-item p-0">
                                        <div className="w-100">
                                        <div className='d-flex align-items-start'>
                                                <span className='display-4 fw-bold' style={{ color: item.color, fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                                    {item.value}
                                                </span>
                                                <span className='fs-20' style={{ color: item.color }}>+</span>
                                        </div>
                                        <p className='text-white fs-15'>{item.caption}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={6} sm={12} className="mx-auto">
                            <div className='sponsor-left'>
                                <img src={imgNumbersAbout} alt="" className="img-fluid mx-auto border border-0 rounded-4" />
                            </div>
                        </Col>
                       
                    </Row>
                    
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Sponsor;