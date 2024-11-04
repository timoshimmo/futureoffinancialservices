import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface IImg {
    file: any,
    title: string,
    description: string
}

const Main = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [imgUrl, setImgUrl] = useState("");
    const blogProps = location.state;

    const result =  JSON.stringify(blogProps);

    const dataFull =  JSON.parse(result);
    let jsobObj = JSON.parse(dataFull);

    useEffect(() => {

        axios.get(`https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${jsobObj.author.avatar.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`)
        .then(async response => {
           // const blogImgAssetLink = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${articleItem.mainImage.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
           console.log("AUTHOR", response);
           setImgUrl(response.data.fields.file.url);
        });

    }, []);

    const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node: any, children:any) => (
            <p className={paragraphClass(node)}>{children}</p>
          ),
          [BLOCKS.HEADING_1]: (node: any, children:any) => (
            <h2 className={heading1Class(node)}>{children}</h2>
          ),
          [BLOCKS.HEADING_2]: (node: any, children:any) => (
            <h3 className={heading2Class(node)}>{children}</h3>
          ),
          [BLOCKS.HEADING_3]: (node: any, children:any) => (
            <h3 className={heading3Class(node)}>{children}</h3>
          ),
          [BLOCKS.HEADING_4]: (node: any, children:any) => (
            <h5 className={heading4Class(node)}>{children}</h5>
          ),
          [BLOCKS.HEADING_6]: (node: any, children:any) => (
            <h6 className={heading6Class(node)}>{children}</h6>
          ),
        },
      };
      
      function paragraphClass(node:any) {
        const className = 'content-p';
        //alternate logic for 'odd' | 'even'
        return className;
      }

      function heading1Class(node:any) {
        const className = 'content-h1';
        return className;
      }

      function heading2Class(node:any) {
        const className = 'content-h2';
        return className;
      }

      function heading3Class(node:any) {
        const className = 'content-h3';
        return className;
      }

      function heading4Class(node:any) {
        const className = 'content-h4';
        return className;
      }

      function heading6Class(node:any) {
        const className = 'content-h6';
        return className;
      }

    return (
        <React.Fragment>
            <section className="section blog-outer-padding">
                <Container>
                    <div className='pb-4'>
                        <Button onClick={() => navigate(-1)} className='bg-transparent border-0 p-0'><i className="mdi mdi-arrow-left display-6"></i></Button>
                    </div>
                    <div className='blog-inner-padding-all mb-5'>
                        <h5 className='text-center text-secondary fw-semibold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Published {moment(jsobObj.publishedDate).format("DD MMM YYYY")}</h5>
                        <h4 className='text-center text-primary fw-semibold mt-4' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{jsobObj.title}</h4>
                        <img className='w-100 mt-5' src={jsobObj.image.file.url} style={{ objectFit: 'cover', height: '400px' }}/>
                    </div>
                    <div className='blog-inner-padding'>
                        <div className='blog-inner-padding'>
                            {documentToReactComponents(jsobObj.contentText, options)}
                            <hr className='my-5 white-divider'/>
                            <div className='d-flex gap-3 w-100 align-items-center'>
                                <div style={{ width: '80px', height: '80px' }}>
                                    <img className='w-100 h-100 rounded-circle border border-dark' src={imgUrl} />
                                </div>
                                <div className='w-50'>
                                    <p className='text-primary font-semibold fs-14 mb-1'>{jsobObj.author.name}</p>
                                    <p className='text-white fs-14'>{jsobObj.author.credentials}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </Container>
            </section>
        </React.Fragment>
    );
}

export default Main;