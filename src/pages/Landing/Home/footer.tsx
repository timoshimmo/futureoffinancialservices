import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import logolight from "../../../assets/images/ffs_top_logo_light.png";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="custom-footer bg-dark pb-5 position-relative" style={{ paddingTop: '170px' }}>
                <Container>
                    <Row>
                        <Col lg={5} className="mt-4">
                            <div>
                                <div className='mb-5'>
                                    <img src={logolight} alt="logo light" height="70" />

                                </div>
                                <div className="mt-4 fs-13">
                                    <ul className="list-inline mb-0 footer-social-link">
                                        <li className="list-inline-item">
                                            <Link to="#" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-facebook-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-instagram-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-linkedin-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-twitter-x-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        {/*<li className="list-inline-item">
                                            <Link to="#" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-dribbble-line"></i>
                                                </div>
                                            </Link>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-lg-auto">
                            <Row className='justify-content-end'>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>About Us</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/about" className="text-white fs-14">About FFS</Link></li>
                                            <li><Link to="/pages-gallery" className="text-white fs-14">Team</Link></li>
                                            <li><Link to="/apps-projects-overview" className="text-white fs-14">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Get Involved</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-pricing" className="text-white fs-14">Register</Link></li>
                                            <li><Link to="/apps-mailbox" className="text-white fs-14">Be a Sponsor</Link></li>
                                            <li><Link to="/apps-chat" className="text-white fs-14">Be an Exhibitor</Link></li>
                                            <li><Link to="/apps-crm-deals" className="text-white fs-14">Partner With Us</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-primary mb-0">Resources</h5>
                                    <div className="text-white  mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-faqs" className="text-white fs-14">Insights</Link></li>
                                            <li><Link to="/pages-faqs" className="text-white fs-14">Events</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <hr />
                    <Row className="text-center text-sm-start align-items-center mt-5">
                        <Col sm={6}>
                            <div>
                                <p className="copy-rights mb-0 fs-14">
                                 © {new Date().getFullYear()} FFS - All Rights Reserved
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end">
                                <ul className="list-inline mb-0 footer-social-link">
                                        <li className="list-inline-item px-2">
                                            <Link to="#" className="d-block">
                                                <span className="text-muted fs-14">Terms</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <Link to="#" className="d-block">
                                                <span className="text-muted fs-14">Privacy</span>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <Link to="#" className="d-block">
                                                <span className="text-muted fs-14">Cookies</span>
                                            </Link>
                                        </li>
                                    </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;