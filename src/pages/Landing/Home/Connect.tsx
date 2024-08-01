import React, { useState, useRef, RefObject  } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
import { connectData } from '../../../common/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import summit1 from "../../../assets/images/home/img_one_summit1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

const Connect = () => {

    const [imgName, setImageName] = useState(summit1);

    const [mobileImg, setMobileImg] = useState(summit1);
    const [indexVal, setIndexVal] = useState(0);
    //const swiperRef = useRef<RefObject | null>(null);


   /* swiperRef.current?.addEventListener('swiperslidechange', (e) => {
        console.log(e.currentTarget);
    }); */
    
    return (
        <React.Fragment>
            <section className="submit-section body-bg-dark one-summit-section" style={{ backgroundColor: "#141413" }}>
                <Container>
                    {/* summit-padding web-one-summit */}
                    <Row className="gy-4 web-one-summit">
                        <Col lg={12} className='summit-padding'>
                            <div className="w-100">
                                <h2 className="mb-4 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>One Summit, <br /><span className='text-primary'>Unlimited Possibilities</span></h2>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className='summit-padding'>
                            <Row className="justify-content-center mx-auto">
                                {connectData.map((item, key) => (
                                    <Col key={key} lg={12} sm={12} onMouseOver={() => {setImageName(item.img); setIndexVal(key); }} className={indexVal === key ? 'border-start border-2 border-primary fs-18 py-4' : 'border-start border-2 border-white fs-18 py-4'}>
                                        <div className="shadow-none px-3 py-2">
                                            <div className='w-100 justify-content-between align-items-start'>
                                                <h5 className={indexVal === key ? 'text-primary fs-18 mb-0' : 'text-white fs-18 mb-0'} style={{ fontFamily: 'Georgia' }}>{item.title}</h5>
                                            </div>                       
                                            <p className="fs-12 text-white fw-light mb-0">{item.textContent}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={5} sm={12} className="mx-auto">
                            <div className='sponsor-left'>
                                <img src={imgName} alt="" className="img-fluid mx-auto border border-0 rounded-4" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mobile-one-summit justify-content-center position-relative">
                        <Col lg={12} className='summit-padding mb-3'>
                            <div className="w-100">
                                <h2 className="mb-4 fw-semibold lh-base text-secondary text-center" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>One Summit, <br /><span className='text-primary'>Unlimited Possibilities</span></h2>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Swiper
                                spaceBetween={20}
                                centeredSlides={false}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                    type: "bullets",
                                    bulletClass: "bg-amber-400",
                                    bulletActiveClass: "bg-primary"
                                }}
                                scrollbar= {{
                                    el: '.swiper-scrollbar',
                                    draggable: true,
                                  }}
                                slidesPerView={1}
                                navigation={false}
                                modules={[Navigation, Scrollbar]}
                                className="mySwiper"
                                onSlideChange={(swiper) => setMobileImg(connectData[swiper.realIndex].img) /*console.log(connectData[swiper.realIndex].img)*/}
                            >
                                {connectData.map((item, key) => (
                                    <SwiperSlide key={key} className='mb-2'>
                                         {({ isActive }) => (
                                            <>
                                                <div className="shadow-none py-2">
                                                    <div className='w-100 justify-content-between align-items-start'>
                                                        <h5 className={isActive ? 'text-primary fs-18 mb-0' : 'text-white fs-18 mb-0'} style={{ fontFamily: 'Georgia' }}>{item.title}</h5>
                                                    </div>                       
                                                    <p className="fs-12 text-white fw-light mb-0">{item.textContent}</p>
                                                </div>
                                            </>
                                        )}
                                        
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                        <div className='swiper-scrollbar position-relative bg-white mb-5' style={{ height: '10px' }}></div>
                        <Col lg={5} sm={12} className="mx-auto">
                            <div className='sponsor-left'>
                                <img src={mobileImg} alt="" className="img-fluid mx-auto border border-0 rounded-4" />
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;