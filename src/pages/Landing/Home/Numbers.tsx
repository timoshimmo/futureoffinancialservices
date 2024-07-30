import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { numbersData } from '../../../common/data';

const Numbers = () => {

    return (
        <React.Fragment>
            <section className="section body-bg-dark numbers-section" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS <span className='text-primary'>by the Numbers</span></h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mx-auto" style={{ maxWidth: '700px' }}>
                        {numbersData.map((item, key) => (
                            <Col key={key} lg={3} sm={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-start'>
                                        <span className='display-5 fw-bold' style={{ color: item.color, fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            {item.value}
                                        </span>
                                        <span className='fs-20' style={{ color: item.color }}>+</span>
                                   </div>
                                   <p className='text-white fs-15'>{item.caption}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Numbers;