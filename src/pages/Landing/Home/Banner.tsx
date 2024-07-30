import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section nft-hero" id="hero">
            <div className="bg-overlay"></div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} sm={8} className='px-3'>
                        <div className="text-center">
                            <h1 className="display-2 fw-bold mb-2 text-white title" style={{ fontFamily: 'Georgia, Montserrat' }}>Future of Financial Services Summit</h1>
                            <p className="h4 text-primary mb-4 py-2 caption" style={{ fontWeight: 600 }}>October 8 - 10, 2024 | Level 39, Canary Wharf, London</p>
                            {/*<p className="h4 text-white mb-4 py-2 caption">Innovating the Next Generation of Finance</p> */}

                            <div className="hstack gap-3 justify-content-center">
                                <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                <NavLink href="#speakers" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
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