import React from 'react';
import { Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <React.Fragment>
            <section className="section contact-us-banner">
                {/*<div className="bg-overlay"></div>*/}
                <Row className='w-100'>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Terms and Conditions</h2>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;