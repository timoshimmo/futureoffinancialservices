import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section partner-banner">
                {/*<div className="bg-overlay"></div>*/}
                <Row>
                    <Col lg={12}>
                        <h2 className="fw-bold lh-base text-primary display-4 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Partner With Us</h2>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;