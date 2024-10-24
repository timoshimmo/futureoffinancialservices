import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';

import Pagination from 'Components/Common/Pagination';

const Features = () => {

    const pageSize = 6;
    const [newsState, setNewsState] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [pageState, setPageState] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return insightsData.filter(data => data.type === 1).slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);



   /* useEffect(() => {
        setNewsState(insightsData);
        setPageState(Math.ceil(insightsData.length / pageSize));
      }, []); */

    return (
        <React.Fragment>
            <section className="section mobile-section">
                <Container>
                    <Row className='px-4 mb-5'>
                        <Col lg={4} sm={12}>
                            <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Features</h2>
                        </Col>
                    </Row>
                    <Row className='px-4 mb-3'>  
                        {insightsData.filter(data => data.type === 0).map((item, idx) => ( 
                            <Col lg={3}>
                                <div className='insight-img-right w-100 rounded-4 d-flex align-items-end' style={{ backgroundImage: `url(${item.image})`, position: 'relative', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center center'  }}>
                                    <div className="w-100 h-100 d-block" style={{ backgroundColor: '#000', opacity: '0.4', position: 'absolute' }}></div>
                                    <div className='px-3 mb-2' style={{ zIndex: '100' }}>
                                        <p className='fs-14 text-primary mb-2 fw-semibold title-top-spacing'>{item.writer[0].name} <span>.</span> {item.date}</p>
                                        <Link to="#" className='h5 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.topic}</Link> 
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

export default Features;