import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import imgSponsor from "../../../assets/images/home/img_sponsor_spacing.png";

const Sponsor = () => {
    return (
        <React.Fragment>

            <section className="body-bg-dark px-4" id="features" style={{ backgroundColor: "#141413", marginBottom: '50px' }}>
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} sm={12} className="mx-auto">
                            <div className='sponsor-left d-flex justify-content-center'>
                                <img src={imgSponsor} alt="" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="w-100 sponsor-right">
                                <h3 className="mb-3 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Together, We Do More</h3>
                                <p className="mb-4 fw-light text-white fs-15" >This is not your average branding exercise. This is your chance to be part of fintech’s beating heart. Being part of the show doesn’t just guarantee you eou exposure, connections and growth, it makes you an integral part of the frontiers of fintech. This is your unfair advantage.</p>
                                <Link to="/sponsors" className="btn btn-primary btn-partner mt-2">Become a Sponsor</Link>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Sponsor;