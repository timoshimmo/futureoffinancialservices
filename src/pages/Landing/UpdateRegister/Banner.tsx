import React from 'react';
import { Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section reg-banner">
                {/*<div className="bg-overlay"></div>*/}
                <Row className='w-100'>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 side-spacing" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS Workshops Booking 2024</h2>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;