import React, { useState, useEffect, useRef }  from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

interface IBanner {
    bannerTitle: string;
    caption: string;
    mobileCaption: string;
    button1: string;
    button2: string;
    speakerImages: any;
    seoFields: any;
}

interface ISpeakers {
    fields: {
        title: '',
        description: '',
        file: any
    };
}

const initBanner = {
    bannerTitle: '',
    caption: '',
    mobileCaption: '',
    button1: '',
    button2: '',
    speakerImages: [],
    seoFields: {}
};


const Banner = () => {

    let navigate = useNavigate();
    const swiperRef = useRef<SwiperRef>(null);
    const [dataEntry, setDataEntry] = useState<IBanner>(initBanner);
    const [speakersList, setSpeakersList] = useState<ISpeakers[] | []>([]);

    useEffect(() => {
        let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/3vrx9Ezv34q2B8pY0kjP25?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&metadata.tags.sys.id[all]=speakersImage'
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: fields}, {data: items}] )=> {
            //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
            //console.log(`Items: ${JSON.stringify(items.items[0].sys)}`);
           // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
            const sortedSpeakers = items.items.sort(function(a: any, b: any) {
                let c = new Date(a.sys.updatedAt) as any;
                var d = new Date(b.sys.updatedAt) as any;
                return c-d;
            });
            console.log(`Sorted: ${JSON.stringify(sortedSpeakers)}`);
            setDataEntry(fields.fields);
            setSpeakersList(sortedSpeakers);
        });
    }, []);

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
                            <h1 className="display-3 fw-bold text-white title" style={{ fontFamily: 'Georgia, Montserrat' }}>{dataEntry.bannerTitle}</h1>
                            <p className="h5 text-primary mb-4 py-2 caption-web" style={{ fontWeight: 600 }}>{dataEntry.caption}</p>
                            <p className="h5 text-primary mb-4 py-2 caption-mobile" style={{ fontWeight: 600 }}>{dataEntry.mobileCaption}</p>
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
                            {speakersList.map((item, key) => (
                                <SwiperSlide key={key} className='swiper-slide-web' onClick={redirect} style={{ cursor: 'pointer' }}>
                                    <img src={item.fields.file.url} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-3' >
                                        <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.fields.title}</h5>
                                        <p className="text-white fs-11 fw-light">{item.fields.description}</p>
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
                            spaceBetween={15}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove={true}
                            speed={3000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1.9}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper positio-relative"
                        >
                            {speakersList.map((item, key) => (
                                <SwiperSlide key={key}>
                                    <img src={item.fields.file.url} alt="" className="avatar-speaker"/>
                                    <div className='w-100 mt-3'>
                                        <h5 className="text-white fs-14 mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.fields.title}</h5>
                                        <p className="text-white fs-11 fw-light">{item.fields.description}</p>
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

                            <div className="w-100 btn-home-web">
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                    <NavLink href="#whatis" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                </div>
                            </div>

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