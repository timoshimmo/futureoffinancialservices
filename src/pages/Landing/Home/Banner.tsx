import React, { useEffect, useRef }  from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { speakersData } from '../../../common/data';

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
//import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ic_slide_left_arrow from "../../../assets/images/icons/ic_slide_left_arrow.png";
import ic_slide_right_arrow from "../../../assets/images/icons/ic_slide_right_arrow.png";

const Banner = () => {

    let navigate = useNavigate();
    //const sliderRef = useRef();
    const swiperRef = useRef<SwiperRef>(null);

   /* useEffect(() => {
        //swiperRef.current?.in;
    }, []);*/

    const redirect =() => {
        navigate('/speakers');
    }

    return (
        <React.Fragment>
            <section className="section ffs-banner parallax" id="banner">
            <div className="bg-overlay"></div>
            <Container className='ffs-container'>
                <Row className='justify-content-center'>
                    <Col lg={7} sm={12} className='px-3'>
                        <div className="text-center">
                            <h1 className="display-3 fw-bold text-white title" style={{ fontFamily: 'Georgia, Montserrat' }}>Future of Financial Services Summit</h1>
                            <p className="h5 text-primary mb-4 py-2 caption-banner" style={{ fontWeight: 600 }}>October 8 - 10, 2024 | Level 39, Canary Wharf, London</p>
                            {/*<p className="h4 text-white mb-4 py-2 caption">Innovating the Next Generation of Finance</p> */}

                        </div>
                    </Col>
                </Row>
                <div className='web-featured-speakers my-3 position-relative'>
                    {/* <Col sm={12}> */}
                        <Swiper
                            spaceBetween={5}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove
                            speed={1500}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            slidesPerView={5}
                            modules={[Autoplay, Navigation]}
                            ref={swiperRef}
                            className="position-relative mySwiper"
                        >
                            {speakersData.map((item, key) => (
                                <SwiperSlide key={key} className='swiper-slide-web' onClick={redirect} style={{ cursor: 'pointer' }}>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-3' >
                                        <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    {/* </Col> */}
                    <div className="slide-button-left-area">
                        <button onClick={() => swiperRef?.current?.swiper.slidePrev()} className="swiper-button-custom bg-primary d-flex justify-content-center align-items-center">
                            <img src={ic_slide_left_arrow} />
                        </button>
                    </div>
                    <div className="slide-button-right-area">
                        <button onClick={() => swiperRef?.current?.swiper.slideNext()} className="swiper-button-custom btn-primary d-flex justify-content-center align-items-center">
                            <img src={ic_slide_right_arrow} />
                        </button>
                    </div>
                </div >
                <Row className="mobile-featured-speakers justify-content-center">
                    <Col lg={5}>
                        <Swiper
                            spaceBetween={5}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove={false}
                            speed={3000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1.7}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper positio-relative"
                        >
                            {speakersData.map((item, key) => (
                                <SwiperSlide key={key}>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-3'>
                                        <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>        
                <Row className="justify-content-center mt-5">
                    <Col lg={8} sm={12} xs={12} className='px-3'>
                        {/*
                        
                                <div className="w-100 btn-home-web">
                                        <div className="d-flex gap-3 justify-content-center">
                                            <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                            <NavLink href="#whatis" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                        </div>
                                </div>

                                <div className="w-100">
                                    <div className="d-flex gap-3 justify-content-center">
                                        <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                        <NavLink href="#whatis" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                    </div>
                                </div>

                            */}

                            <div className="w-100 btn-home-mobile">
                                <div className="d-flex flex-column align-items-center gps-3 px-5">
                                    <Link to="/register" className="w-100 btn btn-primary btn-banner">Register</Link>
                                    <NavLink href="#whatis" className="w-100 mt-3 btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                </div>
                            </div>  
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Banner;