import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';

const Banner = () => {

    const pageSize = 6;
    const [newsState, setNewsState] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [pageState, setPageState] = useState(0);

   /* useEffect(() => {
        setNewsState(insightsData);
        setPageState(Math.ceil(insightsData.length / pageSize));
      }, []); */

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className='px-4 mb-5'>
                        <Col lg={4} sm={12}>
                            <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Pre 2024</h2>
                        </Col>
                    </Row>
                    <Row className='px-4'>
                        {insightsData.filter(data => data.type === 1).map((item, key) => (
                            <Col lg={4}>
                                <div className='w-100' key={key}>
                                    <img src={item.image} className='w-100 rounded-4'/>
                                    <div className='w-100 mt-5'>
                                        <p className='fs-15 text-primary mb-2 fw-semibold'>{item.writer[0].name} <span>.</span> {item.date}</p>
                                        <div className='d-flex justify-content-between'>    
                                            <div style={{ width: '90%' }}>
                                                <Link to="#" className='h5 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.topic}</Link> 
                                            </div>
                                            <div className='d-flex justify-content-end mt-1' style={{ width: '10%' }}>
                                                <img src={ic_up_right_arrow} height={10}/>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-2 mt-3'>
                                            <p className='fs-12 border border-primary text-primary py-2 px-4 rounded-pill'>{item.event}</p>
                                            <p className='fs-12 border border-secondary text-secondary py-2 px-4 rounded-pill'>{item.tags[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );

}

export default Banner;