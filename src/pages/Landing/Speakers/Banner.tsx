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
                        <p className="w-70 mb-3 fs-15 text-white text-center">Uncover brilliant minds and groundbreaking, transformative ideas. Connect with speakers who bring unparalleled knowledge, passion, and insight.</p>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;