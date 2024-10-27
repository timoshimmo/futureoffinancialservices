import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';
import insights1 from "../../../assets/images/insights/insight1.png";
import insights2 from "../../../assets/images/insights/insight2.png";
import insights3 from "../../../assets/images/insights/insight3.png";
import home_top_banner from "../../../assets/images/banners/home_top_banner.png";


import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';

const Banner = () => {

const videoEl = useRef<HTMLVideoElement>(null);

useEffect(() => {
    attemptPlay();
  }, []);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current?.play().catch(error => {
        console.error("Error attempting to play", error);
      });

      //https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4
  };

    return (
        <React.Fragment>
            <section className="home-section-main insight-banner home-banner-bg">
                <Container>
                    {/* <Row className='px-4 mb-5 justify-content-center'>
                        <Col lg={12} sm={12} className='d-flex justify-conntent-center'>
                            <h2 className='w-100 display-4 mb-5 text-center fw-bold text-white' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Future of <br />Financial Services</h2>
                        </Col>
    </Row> */}
                    <Row className='px-4'>
                        <Col lg={5} sm={12} className=' d-flex flex-column justify-content-center'>
                            <div className='py-5'>
                                <h2 className='w-100 display-6 mb-4 fw-bold text-white home-title-mobile' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Future of <br /> Financial Services</h2>
                                {/* <h6 className="fw-bold text-white title" style={{ fontFamily: 'Georgia, Montserrat', fontSize: '35px' }}>Dedicated to driving the evolution and transformation of the financial services industry.</h6> */}
                                <div className="w-100 btn-home-web">
                                    <div className="d-flex gap-3">
                                        <NavLink href="/about" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col> 
                        {/*
                        <video
                                style={{ maxWidth: "100%", width: "800px", margin: "0 auto", borderRadius: '20px' }}
                                playsInline
                                loop
                                muted
                                src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                                ref={videoEl}
                            />
                        
                        */}
                        <Col lg={7} sm={12} xs={12} className='mob-width-vid'>

                            {/*
                              <iframe
                            src='https://www.youtube.com/embed/K6ckNHTy2r4?autoplay=1&mute=1'
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; '
                            allowFullScreen
                            title='video'
                            className='w-100 h-100 rounded-4'
                            />

                             <video
                                style={{ maxWidth: "100%", width: "800px", margin: "0 auto", borderRadius: '20px' }}
                                playsInline
                                loop
                                muted
                                src="https://drive.google.com/uc?id=1BIJrJLGnpJrvCQ-yR_KKuZEoE7HJDkqf"
                                ref={videoEl}
                            />
                        
                    */}

                            <video
                                style={{ maxWidth: "100%", width: "100%", margin: "0 auto"}}
                                className='rounded-4 border border-dark'
                                playsInline
                                loop
                                muted
                                src="https://res.cloudinary.com/westpaybankit/video/upload/v1730055056/FFS/FFS_Summit_Summary.mp4"
                                ref={videoEl}
                            />

{/*

 <iframe 
                            src="https://drive.google.com/file/d/1BIJrJLGnpJrvCQ-yR_KKuZEoE7HJDkqf/preview" 
                            allow='autoplay'
                            allowFullScreen
                            title='video'
                            className='w-100 h-100 rounded-4 border border-dark'
                            />
                */}
                           
                        </Col>
                        
                    </Row>
                    {/* <div className="placeholder-insight-space"></div> ?autoplay=1*/}
                </Container>
                <div className="features-section mobile-section">
                    <Container>
                        {/*
                            <Row className='px-4 mb-5'>
                                <Col lg={4} sm={12}>
                                    <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Featured Updates</h2>
                                </Col>
                            </Row>
                        */}
                       
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
                </div>
            </section>
        </React.Fragment>
    );

}

export default Banner;