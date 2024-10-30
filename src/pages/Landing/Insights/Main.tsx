import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

    const pageSize = 6;
    const [newsState, setNewsState] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [pageState, setPageState] = useState(0);

    const [mainInsights, setMainInsights] = useState([]);

    const [articlesData, setArticlesData] = useState<IArticles[] | []>([]);

    const [currentPage, setCurrentPage] = useState(1);


      useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/7fm3rMLrgGBBxHrrT6yKN5?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
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
    
           // console.log(`NEW HOME BANNER: ${JSON.stringify(arr_articles)}`);
            setArticlesData(arr_articles);
    
        });
    
    }, []);

    
    const currentListData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return articlesData.filter(data => data.blogType === false).slice(firstPageIndex, lastPageIndex);
      }, [articlesData, currentPage]);

    return (
        <React.Fragment>
            <section className="section mobile-section">
                <Container>
                    <Row className='px-4 mb-5'>
                        <Col lg={4} sm={12}>
                            <h2 className='insight-title mb-2 fw-semibold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>News & Updates</h2>
                        </Col>
                    </Row>
                    <Row className='px-4 mb-3'>
                        {currentListData.length > 0 ?
                        
                            currentListData.map((item, key) => (
                                <Col lg={4}>
                                    <div className='w-100 news-bottom-margin' key={key}>
                                        <img src={item.blogImage.file.url} className='w-100 rounded-4'/>
                                        <div className='w-100 title-small-top-spacing-news'>
                                            <p className='fs-15 text-primary mb-2 fw-semibold'>{item.author.data.fields.name} <span>.</span> {moment(item.publishedDate).format("DD MMM YYYY")}</p>
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
                    {/*<div className="placeholder-insight-space"></div> */}
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Banner;