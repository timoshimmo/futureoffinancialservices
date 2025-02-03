import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
import { connectData } from '../../../common/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import summit1 from "../../../assets/images/home/img_one_summit1.png";
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

interface IData {
    data: {
        fields: {
            title: string,
            description: string,
            file: any
        }
    };
}

const Connect = () => {

    const [imgName, setImageName] = useState(summit1);

    const [mobileImg, setMobileImg] = useState(summit1);
    const [indexVal, setIndexVal] = useState(0);

    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [entryData, setEntryData] = useState<IData[] | []>([]);

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/6wt5Sjk0vO3egd1YYsuJB8?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
                //console.log(`Response: ${JSON.stringify(response.data.fields.listData)}`);
                setTopic(response.data.fields.title1);
                setSubTopic(response.data.fields.title2);

                let arr_obj: any[] = [];

                await response.data.fields.listData.forEach((item: any) => {
                    const idVal = item.sys.id;
                    const assetLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                    arr_obj.push(assetLinks);

                   /* axios.get(assetLinks).then(res => {
                        //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
                        console.log(`Items: ${JSON.stringify(res.data)}`);
                       // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
                     
                    }); */
                });

                //console.log(JSON.stringify(arr_obj));

                Promise.all(arr_obj.map((endpoint) => axios.get(endpoint))).then(results => {
                    //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
                   // console.log(`Items: ${JSON.stringify(results)}`);
                    setEntryData(results);
                   // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
                 
                });
            
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server error");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
        });

    }, []);
    
    return (
        <React.Fragment>
            <section className="section summit-section body-bg-dark one-summit-section" style={{ backgroundColor: "#141413" }}>
                <Container>
                    {/* summit-padding web-one-summit */}
                    <Row className="gy-4 web-one-summit">
                        <Col lg={12} className='summit-padding'>
                            <div className="w-100">
                                <h2 className="mb-4 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{topic}, <br /><span className='text-primary'>{subTopic}</span></h2>
                            </div>
                        </Col>
                        <Col lg={7} sm={6} xs={12} className='summit-padding'>
                            <Row className="justify-content-center mx-auto">
                                {entryData.map((item, key) => (
                                    <Col key={key} lg={12} sm={12} onMouseOver={() => {setImageName(item.data.fields.file.url); setIndexVal(key); }} className={indexVal === key ? 'border-start border-2 border-primary fs-18 py-4' : 'border-start border-2 border-white fs-18 py-4'}>
                                        <div className="shadow-none px-3 py-2">
                                            <div className='w-100 justify-content-between align-items-start'>
                                                <h5 className={indexVal === key ? 'text-primary fs-18 mb-0' : 'text-white fs-18 mb-0'} style={{ fontFamily: 'Georgia' }}>{item.data.fields.title}</h5>
                                            </div>                       
                                            <p className="fs-12 text-white fw-light mb-0">{item.data.fields.description}</p>
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
                        <Col lg={12} className='summit-padding mb-3 px-2'>
                            <div className="w-100">
                                <h2 className="mb-4 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>One Summit, <br /><span className='text-primary'>Unlimited Possibilities</span></h2>
                            </div>
                        </Col>
                        <Col sm={12} className='px-2'>
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
                                onSlideChange={(swiper) => setMobileImg(entryData[swiper.realIndex].data.fields.file.url) /*console.log(connectData[swiper.realIndex].img)*/}
                            >
                                {entryData.map((item, key) => (
                                    <SwiperSlide key={key} className='mb-2'>
                                         {({ isActive }) => (
                                            <>
                                                <div className="shadow-none py-2">
                                                    <div className='w-100 justify-content-between align-items-start'>
                                                        <h5 className={isActive ? 'text-primary fs-18 mb-0' : 'text-white fs-18 mb-0'} style={{ fontFamily: 'Georgia' }}>{item.data.fields.title}</h5>
                                                    </div>                       
                                                    <p className="fs-12 text-white fw-light mb-0">{item.data.fields.description}</p>
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