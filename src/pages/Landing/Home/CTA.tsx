import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <React.Fragment>
            <section className="py-5 position-absolute bg-white border rounded-5 web-cta-home">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="justify-content-center align-items-center gy-4">
                        <Col lg={12}>
                            <div className='text-center'>
                                <p className="text-primary mb-4 fs-13">Never miss an update</p>
                                <h2 className="text-dark mb-0 fw-bold" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Join Our Ever Growing Community</h2>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="mt-3 hstack p-2 justify-content-between border border-1 rounded-5 cta-form">
                                <input type="email" placeholder="example@email.com" className="border-0 fs-15 px-3"  style={{ color: '#141413', backgroundColor: 'transparent' }} />
								<input type="button" className="btn btn-primary border border-primary rounded-5 py-2 fs-16" value="Subscribe" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-4 px-2 position-relative mobile-cta-home">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="justify-content-center align-items-center border rounded-4 mobile-inner-cta">
                        <Col lg={12}>
                            <div className='text-center'>
                                <p className="text-primary mb-2 fs-13">Never miss an update</p>
                                <h2 className="text-white mb-0 fw-bold" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Join Our Ever Growing Community</h2>
                            </div>
                            <div className="mt-2 hstack p-2 justify-content-between border bg-white border-1 rounded-5">
                                <input type="email" placeholder="example@email.com" className="border-0 fs-12 px-3 w-50"  style={{ color: '#141413', backgroundColor: 'transparent' }} />
								<input type="button" className="btn btn-primary border border-primary rounded-5 py-2 fs-13" value="Subscribe" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default CTA;