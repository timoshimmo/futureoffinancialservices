import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section agenda-banner">
                {/*<div className="bg-overlay"></div> */}
                <Row>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-5 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS 2024 Agenda</h2>
                    </Col>
                </Row>
                
            </section>
        </React.Fragment>
    );
}

export default Banner;