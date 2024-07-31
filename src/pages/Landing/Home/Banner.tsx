import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section ffs-banner parallax">
            <div className="bg-overlay"></div>
            <Container className='ffs-container'>
                <Row className="justify-content-center">
                    <Col lg={8} sm={12} className='px-3'>
                        <div className="text-center">
                            <h1 className="display-2 fw-bold mb-2 text-white title" style={{ fontFamily: 'Georgia, Montserrat' }}>Future of Financial Services Summit</h1>
                            <p className="h4 text-primary mb-4 py-2 caption" style={{ fontWeight: 600 }}>October 8 - 10, 2024 | Level 39, Canary Wharf, London</p>
                            {/*<p className="h4 text-white mb-4 py-2 caption">Innovating the Next Generation of Finance</p> */}

                            <div className="w-100 btn-home-web">
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                    <NavLink href="#speakers" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                </div>
                            </div>
                           
                            <div className="w-100 btn-home-mobile">
                                <div className="d-flex flex-column align-items-center gps-3 px-5">
                                    <Link to="/register" className="w-100 btn btn-primary btn-banner">Register</Link>
                                    <NavLink href="#speakers" className="w-100 mt-3 btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Banner;