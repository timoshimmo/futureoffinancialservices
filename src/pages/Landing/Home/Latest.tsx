import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { latestData } from '../../../common/data';
import arrow_link from "../../../assets/images/home/img_link_arrow.png";
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

const Latest = () => {

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [entryData, setEntryData] = useState<IData[] | []>([]);

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/1mwnEtJgnI07DtFTivkWYB?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
                setTitle(response.data.fields.title1);
                setSubTitle(response.data.fields.title2);

                let arr_obj: any[] = [];

                await response.data.fields.listData.forEach((item: any) => {
                    const idVal = item.sys.id;
                    const assetLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                    arr_obj.push(assetLinks);
                });

                console.log(JSON.stringify(arr_obj));

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
            <section className="section px-4" id="wallet" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-secondary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{title} <span className='text-primary'>{subTitle}</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4 mt-1">
                        {entryData.map((item, key) => (
                            <Col key={key} lg={3} sm={12}>
                                <Card className="border-2 rounded-4 shadow-none card-latest">
                                    <CardBody className="px-2 py-2 pb-3">
                                        <img src={item.data.fields.file.url} alt="" className="mb-4 w-100 rounded-3 summit-img" />
                                        <div className='hstack w-100 justify-content-between item-center pb-3'>
                                            <h5 className='text-primary fs-18 mb-0' style={{ fontFamily: 'Georgia' }}>{item.data.fields.title}</h5>
                                            <img height={23} src={arrow_link} />
                                        </div>                       
                                        <p className="pb-2 mb-0 fs-12">{item.data.fields.description}</p>
                                        {/* <a className='fs-12 text-secondary fw-semi-bold' href="#">Learn more</a> */}
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

export default Latest;