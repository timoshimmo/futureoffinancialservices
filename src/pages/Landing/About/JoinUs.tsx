import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { joinContactsData } from '../../../common/data';
import avatar_female from '../../../assets/images/icons/woman.png';
import avatar_male from '../../../assets/images/icons/men.png';

const JoinUs = () => {
    
    return (
        <React.Fragment>
            <section className="section join-full-body px-4" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Join Us</h2>
                                <p className="mb-5 fs-14 text-white text-center">Join the Future of Financial Services community and be part of a groundbreaking journey to shape the future of finance. Whether you are a financial institution, fintech company, regulator, or technology provider, FFS offers the insights, connections, and opportunities you need to thrive in the digital age.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4 justify-content-center">
                        {joinContactsData.map((item, key) => (
                            <Col key={key} lg={4} sm={12}>
                                <Card className="border-2 border-primary rounded-3 shadow-none">
                                    <CardBody className="p-3 d-flex flex-column align-items-center">
                                        <img src={item.img} alt="" className="p-2 rounded-circle bg-white border border-dark" width={100} height={100}/>
                                        <h5 className='text-white fw-semibold fs-14 my-2'>{item.name}</h5>                     
                                        <p className="text-primary fs-14"><u>{item.email}</u></p>
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

export default JoinUs;