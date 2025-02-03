import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

//import { insightsData } from '../../../common/data';
//import { mainBlogData } from '../../../common/data';
import Pagination from 'Components/Common/Pagination';
import moment from 'moment';
import axios from 'axios';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IArticles {
    image: any,
    title: string,
    tags: any,
    publishedDate: string,
    author: any,
    blogType: boolean,
    contentText: string,
    slug: string 
}

const Main = () => {

    const navigate = useNavigate();
    const pageSize = 6;
    const [articlesData, setArticlesData] = useState<IArticles[] | []>([]);
    const [currentPage, setCurrentPage] = useState(1);


      useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&include=2&content_type=blogModel")
        .then(async result => {
    
           // console.log("INCLUDES:", result.data);
    
            let arr_obj: any[] = [];
    
            //const entryData = result.data.filter(row => row.data.sys.contentType.sys.id === "footerLinks" && row.data.fields.column === "About Us");
            await result.data.items.forEach((item: any) => {
                const entryData = result.data.includes.Entry.filter((row: any) => row.sys.id === item.fields.author.sys.id);
                const assetData = result.data.includes.Asset.filter((row: any) => row.sys.id === item.fields.mainImage.sys.id);
                const author = entryData[0].fields;
                const image = assetData[0].fields;
    
                delete item.fields?.mainImage;
                const mydata = {
                    ...item.fields,
                    author,
                    image
                };
                arr_obj.push(mydata);
                /*if(item.sys.id === result.data.items[idx].fields.author.sys.id) {
    
                } */
            });
    
            console.log("BLOGS:", arr_obj);
            setArticlesData(arr_obj);
    
           /* const mydata = {
                ...result.data.fields,
    
            } */
    
        }); 

      /*  axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/7fm3rMLrgGBBxHrrT6yKN5?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
    
            let arr_articles: any= [];
                    
            //await response.data.fields.agendas.forEach((item: any) => {
            for (let item of response.data.fields.articles) { 
    
                const idVal = item.sys.id;
                const objLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                
    
                let compose = await axios.get(objLinks).then(async results => {
    
                    const articleItem = results.data.fields;
    
                    const blogImgAssetLink = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${articleItem.mainImage.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                    const authorEntryLink = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${articleItem.author.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
    
                    let blogImgAsset = await axios.get(blogImgAssetLink);
                    //let authorEntry = await axios.get(authorEntryLink);
    
                    delete articleItem?.mainImage;
                    //delete articleItem?.author;
    
                    const res_result = {
                        ...articleItem,
                        blogImage: blogImgAsset.data.fields
                    };
    
                    return res_result;
    
                });
    
                arr_articles.push(compose);
            }
    
           // console.log(`NEW HOME BANNER: ${JSON.stringify(arr_articles)}`);
            setArticlesData(arr_articles);
    
        }); */
    
    }, []);

    const featuredListData = useMemo(() => {
        return articlesData.filter(data => data.blogType === true);
      }, [articlesData]);

    
    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return articlesData.filter(data => data.blogType === false).slice(firstPageIndex, lastPageIndex);
      }, [articlesData, currentPage]);


    const handleRedirect = (route: string, data:any) => {
        navigate(route ,{state: data});
    } 


    return (
        <React.Fragment>
            <section className="features-section mobile-section home-banner-bg">
                <Container>
                    <Row className='px-4 mb-3'> 
                        {featuredListData.length > 0 ?
                                featuredListData.map((item, idx) => ( 
                                    idx < 4 ?
                                    <Col lg={3}>
                                        <div onClick={()=>handleRedirect(`/blog/${item.slug}`, JSON.stringify(item))} className='insight-img-right w-100 rounded-4 d-flex align-items-end' style={{ backgroundImage: `url(${item.image.file.url})`, position: 'relative', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center center', cursor: "pointer"  }}>
                                            <div className="w-100 h-100 d-block" style={{ backgroundColor: '#000', opacity: '0.4', position: 'absolute' }}></div>
                                            <div className='px-3 mb-2' style={{ zIndex: '100' }}>
                                                <p className='fs-14 text-primary mb-2 fw-semibold title-top-spacing'>{item.author.name} <span>.</span> {moment(item.publishedDate).format("DD MMM YYYY")}</p>
                                                <Link to={`/blog/${item.slug}`} state={JSON.stringify(item)} className='h5 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.title}</Link> 
                                            </div>
                                        </div>
                                    </Col>
                                    :
                                    null
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
                    <div className='section px-4'>
                        <Row className='px-2 mb-5'>
                            <Col lg={4} sm={12}>
                                <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>News & Updates</h2>
                            </Col>
                        </Row>
                        <Row className='px-2 mb-3'>
                            {currentListData.length > 0 ?
                            
                                currentListData.map((item, key) => (
                                    <Col lg={4}>
                                        <div className='w-100 news-bottom-margin' key={key}>
                                            <div className='w-100' onClick={()=>handleRedirect(`/blog/${item.slug}`, JSON.stringify(item))} style={{ cursor: 'pointer' }}>
                                                <img src={item.image.file.url} className='w-100 rounded-4 img-blog-gen-style' />
                                            </div>
                                            <div className='w-100 title-small-top-spacing-news'>
                                                <p className='fs-15 text-primary mb-2 fw-semibold'>{item.author.name} <span>.</span> {moment(item.publishedDate).format("DD MMM YYYY")}</p>
                                                <div className='d-flex justify-content-between'>    
                                                    <div style={{ width: '90%' }}>
                                                        <Link to={`/blog/${item.slug}`} state={JSON.stringify(item)} className='h5 fw-bold insight-title-link' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.title}</Link> 
                                                    </div>
                                
                                                    <div className='d-flex justify-content-end mt-1' style={{ width: '10%' }}>
                                                        <img src={ic_up_right_arrow} height={10}/>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center gap-2 mt-3'>
                                                {
                                                    item.tags.map((row: any) => (
                                                        <p className='fs-12 border border-secondary text-secondary py-2 px-4 rounded-pill'>{row}</p>
                                                    ))
                                                
                                                }
                                                    
                                                    {/* <p className='fs-12 border border-secondary text-secondary py-2 px-4 rounded-pill'>{item.tags[0]}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                                :
                                <>
                                <Col lg={4}>
                                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                        <p>
                                            <Skeleton count={1} height={200} className='rounded-4 mb-3'/>
                                            <Skeleton count={3} className='rounded-4'/>
                                        </p>
                                    </SkeletonTheme>
                                </Col>
                                <Col lg={4}>
                                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                        <p>
                                            <Skeleton count={1} height={200} className='rounded-4 mb-3'/>
                                            <Skeleton count={3} className='rounded-4'/>
                                        </p>
                                    </SkeletonTheme>
                                </Col>
                                <Col lg={4}>
                                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                        <p>
                                            <Skeleton count={1} height={200} className='rounded-4 mb-3'/>
                                            <Skeleton count={3} className='rounded-4'/>
                                        </p>
                                    </SkeletonTheme>
                                </Col>
                            </>
                        
                        }
                        </Row>
                        <Row>
                            <Col lg={12} className='mt-5 side-spacing-pagination'>
                                <Pagination
                                    data={articlesData.filter(data => data.blogType === false)}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    perPageData={pageSize}
                                />
                            </Col>
                        </Row>

                    </div>
                    
                    {/*<div className="placeholder-insight-space"></div> */}
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Main;