import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import img1 from "../../../assets/images/home/img_about_summit.png";

const About = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark bottom-padding">
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
                                <h2 className="fw-semibold lh-base text-primary mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>About Future of Financial Services (FFS)</h2>
                                <p className="mb-4 fw-light text-white fs-15 lh-base" >Welcome to the Future of Financial Services (FFS), an innovative platform dedicated to driving the evolution and transformation of the financial services industry.<br /> At FFS, we strive to be the foremost authority and catalyst for global advancements in financial services, offering unparalleled insights, in-depth research, and unique collaboration opportunities for industry leaders, innovators, and visionaries.</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;