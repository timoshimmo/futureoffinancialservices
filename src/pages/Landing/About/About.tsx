import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import img1 from "../../../assets/images/home/img_about_summit.png";

const About = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark" id="features">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center mb-5">
                                <h2 className="fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>About</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} sm={12} className="mx-auto">
                            <div>
                                <img src={img1} alt="" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="px-2">
                                <p className="mb-4 fw-light text-white fs-15" >A premier event that will bring together global leaders, innovators, and visionaries from the financial services industry to explore and shape its future. With a variety of insightful sessions, roundtables, workshops, and exhibitions, participants will engage in an in-depth exploration of the future of financial services and the technological advancements that will drive the next decade. With participants from the United Kingdom, United States, UAE, South Africa, Saudi Arabia, Kenya, Qatar, Nigeria and beyond, this conference promises to be a hub of insightful discussions, groundbreaking launches, and unparalleled networking opportunities.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;