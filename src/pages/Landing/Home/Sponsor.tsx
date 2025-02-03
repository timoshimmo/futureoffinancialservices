import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import axios from 'axios';

// Import Images
import imgSponsor from "../../../assets/images/home/img_sponsor_spacing.png";

const Sponsor = () => {


    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [btnText, setBtnText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/4Hx1IwvdDPyNmjy1E40Wat?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
                //console.log(`SPONSOR: ${JSON.stringify(response.data)}`);
                setTopic(response.data.fields.title);
                setContent(response.data.fields.content);
                setBtnText(response.data.fields.buttonText);

               // const endpoint = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
               const idVal = response.data.fields.imgUrl.sys.id;
               const endpoint = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;

                await axios.get(endpoint).then(results => {
                   // console.log(`SPONSOR IMAGES: ${JSON.stringify(results.data.fields.file.url)}`);
                    setImgUrl(results.data.fields.file.url);
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

            <section className="body-bg-dark px-4" id="features" style={{ backgroundColor: "#141413", marginBottom: '50px' }}>
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col lg={6} sm={12} className="mx-auto">
                            <div className='sponsor-left d-flex justify-content-center'>
                                <img src={imgUrl} alt="" className="img-fluid mx-auto" />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="w-100 sponsor-right">
                                <h3 className="mb-3 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{topic}</h3>
                                <p className="mb-4 fw-light text-white fs-15" >{content}</p>
                                <Link to="/sponsors" className="btn btn-primary btn-partner mt-2">{btnText}</Link>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Sponsor;