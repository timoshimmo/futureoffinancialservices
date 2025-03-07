import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import ffsLogoLight1 from "../../../assets/images/ffs_top_logo_light2.png";

const FooterSummit = () => {
    return (
        <React.Fragment>
            <footer className="bg-dark pb-5 position-relative footer-style">
                <Container>
                    <hr className='mb-4'/>
                    <Row>
                        <Col lg={5} className="mt-5">
                            <div>
                                <div className='mb-5'>
                                <Link to="/" className="d-block">
                                    <img src={ffsLogoLight1} alt="logo light" className="footer-logo" />
                                 </Link>   
                                    
                                </div>
                                <div className="mt-4 fs-13">
                                    <ul className="list-inline mb-0 footer-social-link">
                                        <li className="list-inline-item">
                                            <Link to="https://www.linkedin.com/company/finance-ffs/" target="_blank" rel="noopener noreferrer" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-linkedin-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://x.com/finance_ffs" className="avatar-xs d-block" target='_blank'>
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-twitter-x-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://www.youtube.com/@finance_ffs" className="avatar-xs d-block" target='_blank'>
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-youtube-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-lg-auto">
                            <Row className='row-footer'>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>About Us</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/about" className="text-white fs-14">About FFS</Link></li>
                                            {/* home#banner */}
                                            {/* <li><Link to="/pages-gallery" className="text-white fs-14">Team</Link></li> */}
                                            <li><Link to="/contact-us" className="text-white fs-14">Contact Us</Link></li>
                                            <li><Link to="/faq" className="text-white fs-14">FAQs</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Get Involved</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/register" className="text-white fs-14">Register</Link></li>
                                            <li><Link to="/sponsors" className="text-white fs-14">Be a Sponsor</Link></li>
                                            {/* <li><Link to="/exhibitors" className="text-white fs-14">Be an Exhibitor</Link></li> */}
                                            <li><Link to="/partners" className="text-white fs-14">Partner With Us</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Events</h5>
                                    <div className="text-white  mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            {/* <li><Link to="/summit" className="text-white fs-14">FFS Summit 2024</Link></li> */}
                                            <li><Link to="/speakers" className="text-white fs-14">Speakers</Link></li>
                                            <li><Link to="/agenda" className="text-white fs-14">Agenda</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="text-center text-sm-start align-items-center mt-3">
                        <Col sm={6}>
                            <div>
                                <p className="copy-rights mb-0 fs-14">
                                 © {new Date().getFullYear()} FFS - All Rights Reserved
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end mobile-copyright-area">
                                <ul className="list-inline mb-0 footer-social-link">
                                    <li className="list-inline-item px-2">
                                        <Link to="/terms" className="d-block">
                                            <span className="text-muted fs-14">Terms</span>
                                        </Link> 
                                    </li>
                                    <li className="list-inline-item px-2">
                                         <Link to="/privacy" className="d-block"> 
                                            <span className="text-muted fs-14">Privacy</span>
                                         </Link>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <Link to="/cookie-policy" className="d-block">
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

export default FooterSummit;