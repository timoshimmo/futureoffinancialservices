import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section reg-banner">
                {/*<div className="bg-overlay"></div>*/}
                <Row className='w-100 justify-content-center'>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 side-spacing" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Register For FFS 2024</h2>
                    </Col>
                    {/*
                     <Col lg={7} sm={12} xs={12}>
                        <p className="w-70 fs-15 text-white text-center">Choose any two of our exclusive roundtable sessions, each designed to facilitate focused discussions on key industry challenges and opportunities. Each session lasts 60 minutes and is limited to just 15 participants to ensure meaningful engagement.</p>
                        <p className="w-70 mb-3 fs-15 text-white text-center">Please indicate which roundtable sessions you would like to join.</p>
                    </Col>
    */}
                   
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;