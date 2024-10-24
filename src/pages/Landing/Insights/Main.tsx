import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';
import { mainBlogData } from '../../../common/data';


import Pagination from 'Components/Common/Pagination';

const Banner = () => {

    const pageSize = 6;
    const [newsState, setNewsState] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [pageState, setPageState] = useState(0);

    const [mainInsights, setMainInsights] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return insightsData.filter(data => data.type === 1).slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);



  /*  useEffect(() => {
       const insights = insightsData.filter(data => data.type === 1);
       setMainInsights(insights);
      }, []); */

    return (
        <React.Fragment>
            <section className="section mobile-section">
                <Container>
                    <Row className='px-4 mb-5'>
                        <Col lg={4} sm={12}>
                            <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>News & Updates</h2>
                        </Col>
                    </Row>
                    <Row className='px-4 mb-3'>
                        {currentListData.map((item, key) => (
                            <Col lg={4}>
                                <div className='w-100 news-bottom-margin' key={key}>
                                    <img src={item.image} className='w-100 rounded-4'/>
                                    <div className='w-100 title-small-top-spacing-news'>
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
                    <Row>
                        <Col lg={12} className='mt-5 side-spacing-pagination'>
                            <Pagination
                                data={mainBlogData}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                perPageData={pageSize}
                            />
                        </Col>
                    </Row>
                    {/*<div className="placeholder-insight-space"></div> */}
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Banner;