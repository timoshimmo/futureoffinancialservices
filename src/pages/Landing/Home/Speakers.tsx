import React from 'react';
import { useNavigate  } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { speakersData } from '../../../common/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Speakers = () => {

    let navigate = useNavigate();

    const redirect =() => {
        navigate('/speakers');
    }

    return (
        <React.Fragment>
            <section className="section pb-custom" id="speakers">
            <Container>
                <Row className="justify-content-center speakers-web">
                    <Col lg={7}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Featured Speakers</h2>
                            <p className="mb-5 fs-14 text-white text-center">Discover the Voices Behind the Most Impactful Ideas and Transformative Solutions. Engage with Our Diverse Speakers Who Bring Knowledge, Passion, and Insight</p>
                            {/* <p className="mb-3 fs-13 text-white">Our Esteemed Panel of Influential Experts Sharing Their Wisdom, Experience, and Innovative Ideas</p> */}
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center speakers-mobile mt-4">
                    <Col sm={12} xs={12}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 h1 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Featured Speakers</h2>
                            <p className="mb-5 fs-12 text-white text-center">Discover the Voices Behind the Most Impactful Ideas and Transformative Solutions. Engage with Our Diverse Speakers Who Bring Knowledge, Passion, and Insight</p>
                            {/* <p className="mb-3 fs-13 text-white">Our Esteemed Panel of Influential Experts Sharing Their Wisdom, Experience, and Innovative Ideas</p> */}
                        </div>
                    </Col>
                </Row>
                <Row className='web-featured-speakers'>
                    <Col lg={12}>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove={false}
                            speed={10000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            slidesPerView={4}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            {speakersData.map((item, key) => (
                                <SwiperSlide key={key} className='mb-5' onClick={redirect} style={{ cursor: 'pointer' }}>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 px-2 mt-3' >
                                        <h5 className="text-white text-center fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white text-center fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                    {/*
                    
                  <Marquee
                        pauseOnClick={true}
                        pauseOnHover={true}
                        >
                            {speakersData.map((item, key) => (
                                <Col key={key} lg={3}>
                                    <Card className="shadow-none rounded-0 speakers-card mx-3 text-white" style={{ cursor: "pointer" }}>
                                        <CardBody className='p-0'>
                                            <img src={item.img} alt="" className="avatar-speaker"/>
                                            <div className='w-100 mt-3 px-2' >
                                                <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}   
                    </Marquee>       
                
                            */}
                                      
                </Row>
                <Row className="mobile-featured-speakers justify-content-center">
                    <Col lg={12}>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove={false}
                            speed={10000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            slidesPerView={1.5}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            {speakersData.map((item, key) => (
                                <SwiperSlide key={key} className='mb-5'>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 px-2 mt-3' >
                                        <h5 className="text-white text-center fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white text-center fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>        
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Speakers;