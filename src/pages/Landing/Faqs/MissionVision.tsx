import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

// Import Images
import imgMission from "../../../assets/images/about/img_mission.png";
import imgVision from "../../../assets/images/about/img_vision.png";
import ic_interactive from "../../../assets/images/icons/ic_interactive.png";
import ic_notepad from "../../../assets/images/icons/ic_notepad.png";

const MissionVision = () => {
    return (
        <React.Fragment>

            <section className="section body-bg-dark px-4 bottom-padding" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <Card className="border mb-3 border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                    <Row className='justify-content-center'>
                                        <Col lg={7} sm={12} className='p-4'>
                                            <img src={ic_notepad}  className='mb-4'/>
                                            <h4 className='text-dark mb-2 fw-bold fs-20 mt-2' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Mission</h4>
                                            <p className='text-dark fs-14 fw-medium' style={{ color: '#303030' }}>At FFS, our mission is to shape the future of financial services by fostering innovation, promoting cutting-edge technology, and facilitating strategic discussions among key stakeholders. We aim to empower financial institutions, fintech companies, regulators, and technology providers to navigate and thrive in the rapidly evolving financial landscape."</p>
                                        </Col>
                                        <Col lg={5} sm={12} className='p-4'>
                                            <img src={imgMission} className='w-100'/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={12} sm={12}>
                            <Card className="border border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                    <Row className='justify-content-center'>
                                        <Col lg={5} sm={12} className='p-4'>
                                            <img src={imgVision} className='w-100'/>
                                        </Col>
                                        <Col lg={7} sm={12} className='p-4'>
                                            <img src={ic_interactive}  className='mb-4'/>
                                            <h4 className='text-dark mb-2 fw-bold fs-20 mt-2' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Our Vision</h4>
                                            <p className='text-dark fs-14 fw-medium' style={{ color: '#303030' }}>Our vision is to be the foremost platform for thought leadership, research, and industry collaboration in financial services. We aspire to lead the way in identifying and addressing the challenges and opportunities that lie ahead, ensuring that the financial services sector is well-equipped to meet the demands of the future.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
        </React.Fragment>
    );
};

export default MissionVision;