import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';

const Banner = () => {

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className='px-4 mb-5'>
                        <Col lg={4} sm={12}>
                            <h2 className='insight-title-2 mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Insights</h2>
                        </Col>
                    </Row>
                    <Row className='px-4'>
                        <Col lg={7} sm={12}>
                            {insightsData.filter(data => data.type === 9).map((item, key) => (
                                <div className='w-100' key={key}>
                                    <img src={item.image} className='w-100'/>
                                    <div className='w-100 mt-5'>
                                        <p className='fs-15 text-primary mb-2 fw-semibold'>{item.writer[0].name} <span>.</span> {item.date}</p>
                                        <div className='d-flex justify-content-between mb-2'>    
                                            <div style={{ width: '90%' }}>
                                                <Link to="#" className='h4 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.topic}</Link> 
                                            </div>
                                            <div className='d-flex justify-content-end mt-1' style={{ width: '10%' }}>
                                                <img src={ic_up_right_arrow} height={12}/>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 mt-4'>
                                            <p className='fs-12 border border-primary text-primary py-2 px-4 rounded-pill'>{item.event}</p>
                                            <p className='fs-12 border border-secondary text-secondary py-2 px-4 rounded-pill'>{item.tags[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                        <Col lg={5} sm={12} className=' d-flex flex-column'>
                            {insightsData.filter(data => data.type === 0).map((item, key) => (
                                <Row className='mb-4 flex-grow-1' key={key}>
                                    <Col lg={6}>
                                        <img src={item.image} className='w-100 h-100 rounded-3 insight-img-right'/>  
                                    </Col>
                                    <Col lg={6}>
                                        <div className='w-100'>
                                            <p className='fs-14 text-primary mb-2 fw-semibold'>{item.writer[0].name} <span>.</span> {item.date}</p>
                                            <div className='mb-3'>    
                                                <Link to="#" className='h4 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.topic}</Link> 
                                            </div>
                                            <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                                <NavItem role="presentation">
                                                    <NavLink type="button" className='fs-10 border border-primary text-primary py-2 px-4 rounded-pill'>{item.event}</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" className='fs-10 border border-secondary text-secondary py-2 px-4 rounded-pill'>{item.tags[0]}</NavLink>
                                                </NavItem>
                                            </Nav>
                                            {/*
                                                <Row className='d-flex justify-content-between align-items-center gap-2 mt-4 w-100'>
                                                    <p className='fs-10 border border-primary text-primary py-2 px-4 rounded-pill'>{item.tags[0]}</p>
                                                    <p className='fs-10 border border-secondary text-secondary py-2 px-4 rounded-pill'>{item.event}</p>
                                                </Row>
                                            */}
                                            
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );

}

export default Banner;