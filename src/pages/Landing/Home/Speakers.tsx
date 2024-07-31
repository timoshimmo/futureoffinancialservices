import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Marquee from "react-fast-marquee";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
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

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const animation = { duration: 30000, easing: (t: number) => t }

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        initial: 0,
        slides: {
            origin: "center",
            perView: 4,
            spacing: 30,
        },
        drag: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created(s) {
          s.moveToIdx(5, true, animation)
          setLoaded(true)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        
    })

    /*
 <Card className="w-100 shadow-none rounded-0 speakers-card mx-3 text-white" style={{ cursor: "pointer" }}>
                                    <CardBody className='p-0'>
                                        <img src={item.img} alt="" className="avatar-speaker"/>
                                        <div className='w-100 mt-3 px-2' >
                                            <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                            <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                        </div>
                                        
                                    </CardBody>
                                </Card>

    */


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

                <Row className="justify-content-center speakers-mobile">
                    <Col sm={12} xs={12}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 h1 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Featured Speakers</h2>
                            <p className="mb-5 fs-12 text-white text-center">Discover the Voices Behind the Most Impactful Ideas and Transformative Solutions. Engage with Our Diverse Speakers Who Bring Knowledge, Passion, and Insight</p>
                            {/* <p className="mb-3 fs-13 text-white">Our Esteemed Panel of Influential Experts Sharing Their Wisdom, Experience, and Innovative Ideas</p> */}
                        </div>
                    </Col>
                </Row>

                {/*<Row className="justify-content-center" style={{ height: '400px' }}>
                    <Col lg={12}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 25000,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>

                    </Col>
                </Row>

                  <Row className='web-featured-speakers'>
                    <Col>
                        <div ref={sliderRef} className="keen-slider">
                            {speakersData.map((item, key) => (
                                <div className="keen-slider__slide">
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-3 px-2' >
                                        <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
*/}
                <Row className='web-featured-speakers'>
                    <Marquee
                        pauseOnClick={true}>
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
                </Row>
                <Row className='mobile-featured-speakers mt-3'>
                    {speakersData.map((item, key) => (
                        <Col key={key} sm={12} className='px-2'>
                            <Card className="shadow-none rounded-0 speakers-card text-white" style={{ cursor: "pointer" }}>
                                <CardBody className='p-0 d-flex flex-column align-items-center'>
                                    <img src={item.img} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-2'>
                                        <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                        <p className="text-white fs-11 fw-light">{item.credentials}</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))} 
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Speakers;