import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, NavLink, Button } from 'reactstrap';
//import { insightsData } from '../../../common/data';
import VideoModal from 'Components/Common/VideoModal';
import axios from 'axios';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IArticles {
    blogImage: any,
    title: string,
    tags: any,
    publishedDate: string,
    author: any,
    blogType: boolean,
    contentText: string,
    slug: string 
}

const Banner = () => {

const videoEl = useRef<HTMLVideoElement>(null);
const [videoModal, setVideoModal] = useState<boolean>(false);
const navigate = useNavigate();

const [title, setTitle] = useState("");
const [btnText, setBtnText] = useState("");
const [btnUrl, setBtnUrl] = useState("");
const [videoUrl, setVideoUrl] = useState("");

const [articlesData, setArticlesData] = useState<IArticles[] | []>([]);

useEffect(() => {
    attemptPlay();
  }, []);

  useEffect(() => {

    axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/7fm3rMLrgGBBxHrrT6yKN5?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
    .then(async response => {

        setTitle(response.data.fields.title);
        setBtnText(response.data.fields.titleButtonText);
        setBtnUrl(response.data.fields.titleButtonUrl);
        setVideoUrl(response.data.fields.introVideoUrl);

        let arr_articles: any= [];
                
        //await response.data.fields.agendas.forEach((item: any) => {
        for (let item of response.data.fields.articles) { 

            const idVal = item.sys.id;
            const objLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
            

            let compose = await axios.get(objLinks).then(async results => {

                const articleItem = results.data.fields;

               // console.log(`ARTICLE ITEMS ${JSON.stringify(articleItem.author.sys.id)}`);

                const blogImgAssetLink = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${articleItem.mainImage.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                const authorEntryLink = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${articleItem.author.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;

                let blogImgAsset = await axios.get(blogImgAssetLink);
                let authorEntry = await axios.get(authorEntryLink);

                delete articleItem?.mainImage;
                delete articleItem?.author;

                const res_result = {
                    ...articleItem,
                    blogImage: blogImgAsset.data.fields,
                    author: authorEntry
                };

                return res_result;

            });

            arr_articles.push(compose);
        }
        setArticlesData(arr_articles);

    });

}, []);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current?.play().catch(error => {
        console.error("Error attempting to play", error);
      });

      //https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4
  };

  const onClickFull = () => {
    setVideoModal(true);
  };
//to={`/blog/${item.slug}`} state={JSON.stringify(item)}
  /*const handleRedirect = (route: string, data:any) => {

    navigate(route ,{state: data});

  } */
  
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
                                        <NavLink href={btnUrl} className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">{btnText}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col> 
                        <Col lg={7} sm={12} xs={12} className='mob-width-vid position-relative'>
                            
                            <video
                                style={{ maxWidth: "100%", width: "100%", margin: "0 auto"}}
                                className='rounded-4 border border-dark'
                                playsInline
                                loop
                                muted
                                src="https://res.cloudinary.com/westpaybankit/video/upload/v1730055056/FFS/FFS_Summit_Summary.mp4"
                                ref={videoEl}
                            />
                            <div className="d-flex position-absolute bottom-0 start-0 ps-4 pb-4">
                                <Button onClick={onClickFull} className="btn border-0 px-4 py-2 fs-14 font-semibold text-white opacity-100" style={{ background: "rgba(255,255,255,0.15)" }}><span className='me-2'>Watch Full Video</span><i className="ri-external-link-fill"></i></Button>
                            </div>  
                        </Col>
                    </Row>
                </Container>
                <div className="features-section mobile-section">
                    <Container>
                        <Row className='px-4 mb-3'> 
                        {articlesData.length > 0 ?
                                articlesData.filter(data => data.blogType === true).map((item, idx) => ( 
                                    <Col lg={3}>
                                        <div className='insight-img-right w-100 rounded-4 d-flex align-items-end' style={{ backgroundImage: `url(${item.blogImage.file.url})`, position: 'relative', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center center'  }}>
                                            <div className="w-100 h-100 d-block" style={{ backgroundColor: '#000', opacity: '0.4', position: 'absolute' }}></div>
                                            <div className='px-3 mb-2' style={{ zIndex: '100' }}>
                                                <p className='fs-14 text-primary mb-2 fw-semibold title-top-spacing'>{item.author.data.fields.name} <span>.</span> {moment(item.publishedDate).format("DD MMM YYYY")}</p>
                                                <Link to={`/blog/${item.slug}`} state={JSON.stringify(item)} className='h5 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.title}</Link> 
                                            </div>
                                        </div>
                                    </Col>
                                ))
                                :
                                <>
                                    <Col lg={3}>
                                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                            <p>
                                                <Skeleton count={1} height={320} className='rounded-4'/>
                                            </p>
                                        </SkeletonTheme>
                                    </Col>
                                    <Col lg={3}>
                                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                            <p>
                                                <Skeleton count={1} height={320} className='rounded-4'/>
                                            </p>
                                        </SkeletonTheme>
                                    </Col>
                                    <Col lg={3}>
                                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                            <p>
                                                <Skeleton count={1} height={320} className='rounded-4'/>
                                            </p>
                                        </SkeletonTheme>
                                    </Col>
                                    <Col lg={3}>
                                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                            <p>
                                                <Skeleton count={1} height={320} className='rounded-4'/>
                                            </p>
                                        </SkeletonTheme>
                                    </Col>
                                </>
                        
                        } 
                            
                        </Row>
                    </Container>
                </div>
            </section>
            <VideoModal
                show={videoModal}
                onCloseClick={() => setVideoModal(false)}
            />
        </React.Fragment>
    );

}

export default Banner;