import React, { useState, useEffect } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Button,
    Nav, 
    NavItem, 
    NavLink,
    Offcanvas,
    OffcanvasBody } from 'reactstrap';
import { speakersFullData } from '../../../common/data';
import axios from 'axios';
import ic_search from '../../../assets/images/icons/ic_search.png';

interface IProfile {
    id: Number,
    img: string,
    pic: string,
    name: string,
    tags: any,
    credentials: string,
    company: string,
    courses: any,
    bio: string
  }

  interface IData {
    name: string,
    company: string,
    credentials: string,
    theme: any,
    speakers: any,
    img: any,
    tags: any,
    biography: string

}

const SpeakersList = () => {

    const [nav, setNav] = useState("All");
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState<IData>();

    const [themes, setThemes] = useState([]);
    const [speakersData, setSpeakersData] = useState<IData[] | []>([]);

    useEffect(() => {

        let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/6DOmE5oJJmNC5Z5VP16PPB?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&include=2&content_type=speakerModel'
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(async([{data: fields}, {data: items}] )=> {
            //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
            //console.log(`Items: ${JSON.stringify(items.items[0])}`);
            //console.log(`Includes: ${JSON.stringify(items.includes)}`);

            setThemes(fields.fields.themes);

            let arr_obj: any[] = [];

            await items.items.forEach((item: any) => {

                console.log(`ITEM: ${JSON.stringify(item)}`);

                const assetData = items.includes.Asset.filter((row: any) => row.sys.id === item.fields.image.sys.id);

                delete item.fields?.image;

                const spkdata = {
                    ...item.fields,
                    updatedAt: item.sys.updatedAt,
                    img: assetData[0].fields.file,
                    pic: assetData[0].fields.file,
                }; 

                //console.log("OBJ SPEAKERS:", spkdata);
                arr_obj.push(spkdata);

            });

            
            const sortedSpeakers = arr_obj.sort(function(a: any, b: any) {
                console.log("SPEAKERS DATA", a);
                let c = new Date(a.updatedAt) as any;
                var d = new Date(b.updatedAt) as any;
                return c-d;
            });
            setSpeakersData(sortedSpeakers);


        })
        .catch((error) => {
            console.log("Error: ", error);
            /*if (error.response) {
                console.log(error.response);
                console.log("server error");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            } */
        });


       /* axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/6DOmE5oJJmNC5Z5VP16PPB?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
            //setThemes(response.data.fields.themes);

           // console.log("SPEAKERS DATA:", response.data.fields.speakers);
            const dataSpeakers =  response.data.fields.speakers;
            let arr_speakers: any[] = [];

            for(let speakerVal of dataSpeakers) {

                const speaker_id = speakerVal.sys.id;
                const speakerData = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${speaker_id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
               
                await axios.get(speakerData).then(async res => {

                    const dataSpeaker: any = res.data.fields;

                    const speakerAsset = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${res.data.fields.image.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;

                    let response1 = await axios.get(speakerAsset);
                    
                    //const res_result = response1.data.fields;

                    const res_result = {
                        ...dataSpeaker,
                        imgs: response1.data.fields
                    };

                    delete res_result?.image;

                    console.log("SPEAKERS 1", res_result);
                    
                    arr_speakers.push(res_result);
                    
                }); 
            
            }

            //console.log("SPEAKERS DATA", arr_speakers);
            setSpeakersData(arr_speakers);

        }); */

    }, []);

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const passData = (item: any) => {
        //console.log("ITEM: ", item)
        
        setCurrentData(item);
        setOpen(!open);
    }


    return (
        <React.Fragment>
            <section className="section speakers-list-body">
                <Container>
                    <Row>
                        <Col lg={7} sm={12}>
                            <div className='w-100 sticky-top py-3 speakers-web-row' style={{ backgroundColor: '#141413', top: '60px' }}></div>
                            <Row className='speakers-web-row'>
                                {speakersData.filter(data => data.tags.includes(nav) || nav === 'All').map((item, idx) => (
                                    <Col key={idx} lg={6} sm={12}>
                                        <Card onClick={()=>passData(item)} className="shadow-none rounded-0 speakers-card mb-2 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img.url} alt="" className="avatar-speaker-list"/>
                                                <div className='w-100 mt-2'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-11 fw-light">{item.credentials}, {item.company}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='speakers-mobile-row'>
                                {speakersData.filter(data => data.tags.includes(nav) || nav === 'All').map((item, idx) => (
                                    <Col key={idx} lg={6} sm={12}>
                                        <Card onClick={()=>passData(item)} className="shadow-none rounded-0 speakers-card mb-5 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img.url} alt="" className="avatar-speaker-list"/>
                                                <div className='w-100 mt-3'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-11 fw-light">{item.credentials}, {item.company}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={5} sm={12}>
                            <div className='sticky-top speakers-sticky-side'>
                                <div className='border p-4 border-white rounded-3 mb-4'>
                                    <div className="w-100 hstack py-2 gap-2 search-box">
                                        <img src={ic_search} height={15} />
                                        <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                    </div>
                                    <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Themes</h2>
                                    <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                        {
                                            themes.map((item: any) => (
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => { setNav(item.replace(/ +/g, '-').toLowerCase())}} className={nav === item.replace(/ +/g, '-').toLowerCase() ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>{item}</NavLink>
                                                </NavItem>
                                            ))
                                        }

                                        {/*

                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("All")} className={nav === "All" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>All</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("digital-business-models")} className={nav === "digital-business-models" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Digital Business Models</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("distribution-models")} className={nav === "distribution-models" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Distribution Models</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("customer-experience")} className={nav === "customer-experience" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Customer Experience</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("artificial-intelligence")} className={nav === "artificial-intelligence" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Artificial Intelligence</NavLink>
                                                </NavItem>
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => setNav("fintech")} className={nav === "fintech" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>FinTech</NavLink>
                                                </NavItem>
                                        */}
                                        
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div>
                {/* profile-modal profile-modal */}
                 <Offcanvas isOpen={open} toggle={toggleLeftCanvas} direction="end" className="offcanvas-end border-0 canvas-style">
                    <OffcanvasBody className="p-0 canvas-body">
                        <div className='w-100 speakers-pop-up-body'>
                            <div className='pt-2 pb-4 top-profile-close-mobile'>
                                <Button onClick={()=>setOpen(false)} className='bg-transparent border-0 p-0'><i className="mdi mdi-close display-6"></i></Button>
                            </div>
                            <Row>
                                <Col lg={5}>
                                    <img src={currentData?.img.url} className='w-100 border-0 rounded-3'/>
                                </Col>
                                <Col lg={7} className='vstack justify-content-center align-items-center'>
                                    <div className='w-100'>
                                        <p className='text-primary h3 fw-bold mb-2 lh-sm'>{currentData?.name}</p>
                                        <p className="text-white fs-15 fw-light mb-0">{currentData?.credentials}</p>
                                        <p className="text-white fs-13 fw-light">{currentData?.company}</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className='w-100 mt-4 p-4 border border-primary rounded-3'>
                                <p className='text-white fs-13 bio-style'><span className='text-primary fw-semibold'>{currentData?.name}</span> {currentData?.biography}</p>
                            </div>
                       </div>
                       
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </React.Fragment>
    );
}

export default SpeakersList;