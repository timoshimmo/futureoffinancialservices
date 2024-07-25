import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import { partnerImgsData } from '../../../common/data';

const Partners = () => {
    
    return (
        <React.Fragment>
            <section className="section px-4" style={{ backgroundColor: "#141413" }}>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Partners</h2>
                            <p className="fs-13 text-white">From startups to the world’s largest companies</p>
                        </div>
                    </Col>
                </Row>
                
                <Row className='justify-content-center partners-row mx-auto'>
                 {partnerImgsData.map((item, key) => (
                    <Col key={key} lg={3} sm={6} xs={6} className='d-flex justify-content-center'>
                        <Card className="bg-white partner-card">
                            <CardBody className='p-0 d-flex justify-content-center align-items-center'>
                                <img src={item.img} alt="" />
                            </CardBody>
                        </Card>
                    </Col>
                 ))}                                   
                </Row>
                <Row className="justify-content-center mt-5">
                    <Link to="/nft-explore" className="btn btn-primary btn-partner">Become a Partner</Link>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Partners;