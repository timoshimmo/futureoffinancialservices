import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import img1 from "../../../assets/images/home/img_about_summit.png";

const About = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark py-5" id="features">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={7} sm={7} className="mx-auto">
                            <div>
                                <img src={img1} alt="" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="px-5">
                                <h3 className="mb-3 fs-50 text-primary" style={{ fontFamily: 'Georgia, Montserrat' }}>About The Summit</h3>
                                <p className="mb-4 fw-light text-white fs-15" >A premier event that will bring together global leaders, innovators, and visionaries from the financial services industry to explore and shape its future. With a variety of insightful sessions, <a className='text-primary fw-semi-bold' href="#">See more</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;