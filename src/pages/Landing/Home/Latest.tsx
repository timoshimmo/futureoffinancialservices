import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { latestData } from '../../../common/data';
import arrow_link from "../../../assets/images/home/img_link_arrow.png";

const Latest = () => {
    
    return (
        <React.Fragment>
            <section className="section px-4" id="wallet" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-secondary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Summit <span className='text-primary'>Features</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4 mt-1">
                        {latestData.map((item, key) => (
                            <Col key={key} lg={3} sm={12}>
                                <Card className="border-2 rounded-4 shadow-none card-latest">
                                    <CardBody className="px-2 py-2 pb-3">
                                        <img src={item.img} alt="" className="mb-4 pb-2 w-100 rounded-2" />
                                        <div className='hstack w-100 justify-content-between item-center pb-3'>
                                            <h5 className='text-primary fs-18 mb-0' style={{ fontFamily: 'Georgia' }}>{item.title}</h5>
                                            <img height={23} src={arrow_link} />
                                        </div>                       
                                        <p className="pb-2 mb-0 fs-12">{item.textContent}</p>
                                        {/* <a className='fs-12 text-secondary fw-semi-bold' href="#">Learn more</a> */}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Latest;