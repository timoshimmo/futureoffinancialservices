import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section agenda-banner">
                {/*<div className="bg-overlay"></div> */}
                <Row className='w-100 justify-content-center'>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS 2024 Agenda</h2>
                    </Col>
                    <Col lg={6}>
                        <p className="w-70 mb-3 fs-15 text-white text-center">Explore the Day's Tech-Focused Discussions and Interactive Sessions. Detailed Schedule of Tech Talks, Demos, and Networking Opportunities</p>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;