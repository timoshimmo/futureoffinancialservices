import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

const Banner = () => {

    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/4TIX96uTH9z9pEQfVYPPWu?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
                //console.log(`Response: ${JSON.stringify(response.data.fields.listData)}`);
                setTopic(response.data.fields.title);
                setSubTopic(response.data.fields.subtitle);
            
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
            <section className="section agenda-banner">
                {/*<div className="bg-overlay"></div> */}
                <Row className='w-100 justify-content-center'>
                    <Col lg={12}>
                        <h2 className="w-100 text-center fw-bold lh-base text-primary display-4 px-5" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{topic}</h2>
                    </Col>
                    <Col lg={7}>
                        <p className="w-70 mb-3 fs-15 text-white text-center">{subTopic}</p>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}

export default Banner;