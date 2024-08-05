import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section speakers-banner">
                {/*<div className="bg-overlay"></div>*/}
                <Row className='w-100 justify-content-center'>
                    <Col lg={12} sm={12} xs={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Speaker Lineup</h2>
                    </Col>
                    <Col lg={7} sm={12} xs={12}>
                        <p className="w-70 mb-3 fs-15 text-white text-center">We are bringing together the most innovative thought leaders shaping the future of financial services. Join us to engage with diverse speakers who bring audacious thinking and transformative solutions to every discussion.</p>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;