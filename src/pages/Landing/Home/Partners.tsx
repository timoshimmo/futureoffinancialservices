import React, { useState, useEffect  } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import partnerBazara from "../../../assets/images/brands/bazara_logo.png";
import partnerPeerless from "../../../assets/images/brands/peerless_logo_light.svg";
import img_skaleet_logo from "../../../assets/images/brands/skaleet_logo@2x.png";
import sterling_logo_new from "../../../assets/images/brands/sterling_logo_new.png";
import SeaBaas_logo_white from "../../../assets/images/brands/SeaBaas_logo_white.png";
import axios from 'axios';

interface IData {
    data: {
        fields: {
            title: string,
            description: string,
            file: any
        }
    };
}

const Partners = () => {

    const [topic, setTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [entryData, setEntryData] = useState<IData[] | []>([]);

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/52iof7hOdXLSDXNcki7CoG?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
                setTopic(response.data.fields.title);
                setSubTopic(response.data.fields.subtitle);

                let arr_obj: any[] = [];

                await response.data.fields.partnerIcons.forEach((item: any) => {
                    const idVal = item.sys.id;
                    const assetLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                    arr_obj.push(assetLinks);
                });

                console.log(JSON.stringify(arr_obj));

                Promise.all(arr_obj.map((endpoint) => axios.get(endpoint))).then(results => {
                    //console.log(`PARTNERS: ${JSON.stringify(results)}`);
                    setEntryData(results);
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
            <section className="partners-section px-4" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center align-items-center partners-row-web">
                        <Col lg={4} sm={12}>
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{topic}</h2>
                                <p className="fs-13 text-white">{subTopic}</p>
                            </div>
                            <div className="mt-5">
                                <Link to="/partners" className="btn btn-primary btn-partner">Become a Partner</Link>
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Row className="justify-content-between">
                            
                                {/* item.data.fields.title === 'SeaBaasByPeerlessLogo'  || item.data.fields.title === "BazaraLogo" ? */}
                                <Col lg={5}>
                                    <p className='fs-12 text-white fw-semibold'>Anchor Sponsors</p> 
                                    <div className='d-flex align-items-center gap-4 partners-img-area'>
                                        {entryData.map((item: any, key) => {
                                            if(item.data.fields.title === 'SeaBaasByPeerlessLogo') {

                                               return <div>
                                                    <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                                </div>;
                                            }
                                            if(item.data.fields.title === 'BazaraLogo') {

                                                return <div>
                                                     <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                                 </div>;
                                             }
                                            
                                            })
                                         }
                                    </div>
                                </Col>
                                
                                <Col lg={5}>
                                    <p className='fs-12 text-white fw-semibold'>Other Sponsors</p>
                                    <div className='d-flex align-items-center gap-4 partners-img-area'>
                                    {entryData.map((item: any, key) => {
                                        if(item.data.fields.title === 'sterlingLogo') {

                                            return <div>
                                                <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                            </div>;
                                        }
                                        if(item.data.fields.title === 'SkaleetLogo') {

                                            return <div>
                                                    <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                                </div>;
                                            }
                                        
                                        })
                                    }
                                    </div>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>

                    <Row className="align-items-center partners-row-mobile">
                        <Col lg={6} sm={12} className="mb-4">
                            <div className="mb-5">
                                <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{topic}</h2>
                                <p className="fs-13 text-white">{subTopic}</p>
                            </div>
                            <p className='fs-12 text-white fw-semibold'>Anchor Sponsors</p> 
                            <div className='d-flex justify-content-between align-items-center gap-3 mb-5 partners-img-area'>
                                {entryData.map((item: any, key) => {
                                    if(item.data.fields.title === 'SeaBaasByPeerlessLogo') {

                                        return <div>
                                            <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                        </div>;
                                    }
                                    if(item.data.fields.title === 'BazaraLogo') {

                                        return <div>
                                                <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                            </div>;
                                        }
                                    
                                    })
                                }
                            </div>
                            <p className='fs-12 text-white fw-semibold'>Other Sponsors</p> 
                            <div className='d-flex justify-content-between align-items-center gap-3 partners-img-area'>
                                {entryData.map((item: any, key) => {
                                    if(item.data.fields.title === 'sterlingLogo') {

                                        return <div>
                                            <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                        </div>;
                                    }
                                    if(item.data.fields.title === 'SkaleetLogo') {

                                        return <div>
                                                <img src={item.data.fields.file.url} alt={item.data.fields.description} className="partners-img-style" />
                                            </div>;
                                        }
                                    
                                    })
                                }
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="d-flex">
                                <Link to="/partners" className="btn btn-primary btn-partner mt-5">Become a Partner</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Partners;