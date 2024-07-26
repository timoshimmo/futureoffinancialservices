import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { speakersFullData } from '../../../common/data';
import ic_search from '../../../assets/images/icons/ic_search.png';

const SpeakersList = () => {

    const [nav, setNav] = useState("All");

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={7} sm={12}>
                            <Row>
                                {speakersFullData.filter(data => data.tags.includes(nav) || nav === 'All').map((item) => (
                                    <Col key={item.id} lg={6} sm={12}>
                                        <Card className="shadow-none rounded-0 speakers-card mb-2 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img} alt="" className="avatar-speaker"/>
                                                <div className='w-100 mt-2 px-2'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={5} sm={12}>
                            <div className="w-100 hstack py-2 gap-2 search-box">
                                <img src={ic_search} height={15} />
                                <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                            </div>
                            <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Topics</h2>
                            <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("All")} className={nav === "All" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>All</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("digital-business-models")} className={nav === "digital-business-models" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Digital Business Models</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("distribution-models")} className={nav === "distribution-models" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Distribution Models</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("customer-experience")} className={nav === "customer-experience" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Customer Experience</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("artificial-intelligence")} className={nav === "artificial-intelligence" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Artificial Intelligence</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("fintech")} className={nav === "fintech" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Financial Technology</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default SpeakersList;