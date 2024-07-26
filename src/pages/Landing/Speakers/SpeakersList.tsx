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
                                    <NavLink type="button" onClick={() => setNav("emerging-technologies")} className={nav === "emerging-technologies" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Emerging Technologies</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("open-banking")} className={nav === "open-banking" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Open Banking</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("ai-finances")} className={nav === "ai-finances" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>AI Finances</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("fintech-inclusion")} className={nav === "fintech-inclusion" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Fintech Inclusion</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("digital-banking")} className={nav === "digital-banking" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Digital Banking</NavLink>
                                </NavItem>

                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("wealth-management")} className={nav === "wealth-management" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Wealth Management</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("cross-border")} className={nav === "cross-border" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Cross-Border Payments</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("financial-automation")} className={nav === "financial-automation" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Financial Automation</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("startup-incubators")} className={nav === "startup-incubators" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Startup Incubators</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("blockchain")} className={nav === "blockchain" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Blockchain Implementation</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("big-data")} className={nav === "big-data" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Big Data</NavLink>
                                </NavItem>

                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("decentralized-finance")} className={nav === "decentralized-finance" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Decentralized Finance</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setNav("cybersecurity")} className={nav === "cybersecurity" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Cybersecurity Solutions</NavLink>
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