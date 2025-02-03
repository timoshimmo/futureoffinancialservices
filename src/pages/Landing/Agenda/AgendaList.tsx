import React, { useState, useEffect } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Nav, 
    NavItem, 
    NavLink,
    } from 'reactstrap';

import axios from 'axios';
//import { agendaData } from '../../../common/data';
import ic_search from '../../../assets/images/icons/ic_search.png';

interface IProfile {
    id: Number,
    img: string,
    name: string,
    tags: any,
    credentials: string,
    courses: any,
    bio: string
  }

  interface IData {
    topic: string,
    date: string,
    startTime: string,
    dateCode: string,
    title: string,
    theme: any,
    type: any,
    description: string,
    speakers: any 
}

const AgendaList = () => {

    const [nav, setNav] = useState("All");
    const [open, setOpen] = useState(false);

    const [dateNav, setDateNav] = useState("All");
    const [sessionNav, setSessionNav] = useState("");

    const [currentView, setView] = useState(0);

    const [daysData, setDaysData] = useState([]);
    const [themes, setThemes] = useState([]);
    const [sessions, setSessionTypes] = useState([]);

    const [agendasData, setAgendasData] = useState<IData[] | []>([]);

    useEffect(() => {

        let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/4TIX96uTH9z9pEQfVYPPWu?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&include=3&content_type=agendaModel'
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(async([{data: fields}, {data: items}] )=> {
            //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
            //console.log(`Items: ${JSON.stringify(items.items)}`);
            //console.log(`Includes: ${JSON.stringify(items.includes)}`);

            setDaysData(fields.fields.days);
            setThemes(fields.fields.themes);
            setSessionTypes(fields.fields.sessionTypes);

            let arr_obj: any[] = [];

            await items.items.forEach((item: any) => {

                let entryData: any[] = [];
                let speakersArr: any[] = [];

                if(item.fields.speakers) {
                    entryData = items.includes.Entry.filter((row: any) => item.fields.speakers.some((spk: any) => spk.sys.id === row.sys.id));
                   
                    entryData.forEach((entry: any) => {
                        const assetData = items.includes.Asset.filter((row: any) => row.sys.id === entry.fields.image.sys.id);

                        //delete entry.fields?.image;
                        const speakersData = {
                            ...entry.fields,
                            img: assetData[0].fields.file,
                            pic: assetData[0].fields.file,
                        };

                        speakersArr.push(speakersData);
                    });


                    const spkdata = {
                        ...item.fields,
                        speakers: speakersArr,
                    }; 
                    arr_obj.push(spkdata);
                   // console.log("OBJ SPEAKERS:", spkdata);
                }
                else if(item.fields.products){
                    entryData = items.includes.Entry.filter((row: any) => item.fields.products.sys.id  === row.sys.id);


                    delete item.fields?.products;
                    const pdtdata = {
                        ...item.fields,
                        speakers: null,
                        product: [entryData[0].fields]
                    }; 

                    arr_obj.push(pdtdata);
                  //  console.log("OBJ PRODUCTS:", pdtdata);
                }
                else {

                    const brkdata = {
                        ...item.fields,
                    }; 

                    arr_obj.push(brkdata);
                   // console.log("OBJ BREAKS:", brkdata);

                } 
                
                //console.log("ENTRY DATA:", entryData);
                
                //const assetData = result.data.includes.Asset.filter((row: any) => row.sys.id === item.fields.mainImage.sys.id);

            });

            const sortedAgendas = arr_obj.sort(function(a: any, b: any) {
                return a.position - b.position
            }); 
            
            setAgendasData(sortedAgendas);
           // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
            
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

       /* axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/4TIX96uTH9z9pEQfVYPPWu?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {

            setDaysData(response.data.fields.days);
            setThemes(response.data.fields.themes);
            setSessionTypes(response.data.fields.sessionTypes);

            let arr_agendas: any= [];
                
            //await response.data.fields.agendas.forEach((item: any) => {
            for (let item of response.data.fields.agendas) {        
                const idVal = item.sys.id;
                const objLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                let arr_speakers: any= [];

                let compose = await axios.get(objLinks).then(async results => {
                    //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
                    //console.log(`AGENDAS ${JSON.stringify(results)}`);

                    let arr_results: any = results.data;

                        const agendaItem = arr_results.fields;

                        if(agendaItem.hasOwnProperty('speakers')) {
                            
                            let dataSpeakers = agendaItem.speakers;

                            for(let speakerVal of dataSpeakers) {

                                const speaker_id = speakerVal.sys.id;
                                const speakerData = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${speaker_id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                               
                                await axios.get(speakerData).then(async res => {
                                    const dataSpeaker: any = res.data.fields;

                                    const speakerAsset = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${res.data.fields.image.sys.id}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;

                                    let response1 = await axios.get(speakerAsset);
                                    const res_result = {
                                        ...dataSpeaker,
                                        imgs: response1.data.fields
                                    };
                                    

                                    arr_speakers.push(res_result);
                                    
                                }); 
                            }
                        } 

                        const data1 = {
                            ...agendaItem,
                            speakers: arr_speakers
                        }

                        return data1
                        
                });
                arr_agendas.push(compose);
            
            }//End agenda loop

            const sortedAgendas = arr_agendas.sort(function(a: any, b: any) {
                return a.position - b.position
            }); 

            //console.log(`SORTED AGENDAS ${JSON.stringify(sortedAgendas)}`);
            
            setAgendasData(sortedAgendas);

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
        }); */


       /* axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&include=3&content_type=agendaModel")
        .then(async result => {

            console.log("AGENDA INCLUDES:", result.data);

            let arr_obj: any[] = [];

            await result.data.items.forEach((item: any) => {

                let entryData: any[] = [];
                let speakersArr: any[] = [];

                if(item.fields.speakers) {
                    entryData = result.data.includes.Entry.filter((row: any) => item.fields.speakers.some((spk: any) => spk.sys.id === row.sys.id));
                   
                    entryData.forEach((entry: any) => {
                        const assetData = result.data.includes.Asset.filter((row: any) => row.sys.id === entry.fields.image.sys.id);

                        //delete entry.fields?.image;
                        const speakersData = {
                            ...entry.fields,
                            img: assetData[0].fields.file,
                            pic: assetData[0].fields.file,
                        };

                        speakersArr.push(speakersData);
                    });


                    const spkdata = {
                        ...item.fields,
                        speakers: speakersArr,
                    }; 
                    arr_obj.push(spkdata);
                   // console.log("OBJ SPEAKERS:", spkdata);
                }
                else if(item.fields.products){
                    entryData = result.data.includes.Entry.filter((row: any) => item.fields.products.sys.id  === row.sys.id);


                    delete item.fields?.products;
                    const pdtdata = {
                        ...item.fields,
                        speakers: null,
                        product: [entryData[0].fields]
                    }; 

                    arr_obj.push(pdtdata);
                  //  console.log("OBJ PRODUCTS:", pdtdata);
                }
                else {

                    const brkdata = {
                        ...item.fields,
                    }; 

                    arr_obj.push(brkdata);
                   // console.log("OBJ BREAKS:", brkdata);

                } 
                
                //console.log("ENTRY DATA:", entryData);
                
                //const assetData = result.data.includes.Asset.filter((row: any) => row.sys.id === item.fields.mainImage.sys.id);

            });

            const sortedAgendas = arr_obj.sort(function(a: any, b: any) {
                return a.position - b.position
            }); 
            setAgendasData(sortedAgendas);

        }); */

    }, []);

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const splitDateWeekDay = (dateString: string) => {
        const date_array = dateString.split(',');
        return date_array[0];
    };

    const splitDateDay = (dateString: string) => {
        const date_array = dateString.split(',');
        return date_array[1];
    };

    



    /*const passData = (item: any) => {
       // console.log("ITEM: ", item)
        
        setCurrentData(item);
        setOpen(!open);
    }
*/
    return (
        <React.Fragment>
            <section className="section agenda-list-body">
                <Container>
                    
                    <Row className='justify-content-between'>
                        <Col lg={4} sm={12}>
                            <div className='sticky-top agenda-sticky-side'>
                                <div className='border p-4 border-white rounded-3 mb-4'>
                                    <div className='w-100 hstack py-2 gap-2 search-box'>
                                        <img src={ic_search} height={15} />
                                        <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                    </div>
                                    <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Themes</h2>
                                    <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                        {
                                            themes.map((item: any) => (
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => { setNav(item.replace(/ +/g, '-').toLowerCase()); setView(1); }} className={nav === item.replace(/ +/g, '-').toLowerCase() ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>{item}</NavLink>
                                                </NavItem>
                                            ))
                                        }

                                        {/*
                                        
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("strategy-&-markets"); setView(1); }} className={nav === "strategy-&-markets" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Strategy & Markets</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("cybersecurity"); setView(1); }} className={nav === "cybersecurity" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Cybersecurity</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("customer-experience"); setView(1); }} className={nav === "customer-experience" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Customer Experience</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("artificial-intelligence"); setView(1); }} className={nav === "artificial-intelligence" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Artificial Intelligence</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("financial-technology"); setView(1); }} className={nav === "financial-technology" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Financial Technology</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => {setNav("investment"); setView(1); }} className={nav === "investment" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Investment</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("wealth-management"); setView(1); }} className={nav === "wealth-management" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Wealth Management</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("insurance"); setView(1); }} className={nav === "insurance" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Insurance</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setNav("risk"); setView(1); }} className={nav === "risk" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Risk</NavLink>
                                        </NavItem> 
                                    
                                    */}
                                        
                                    </Nav>
                                </div>
                                <div className='border py-3 px-4 border-white rounded-3'>
                                    {/*<div className='w-100 hstack py-2 gap-2 search-box'>
                                        <img src={ic_search} height={15} />
                                        <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                    </div>*/}
                                    <h2 className='mb-3 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Session Types</h2>
                                    <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                        {
                                            sessions.map((item: any) => (
                                                <NavItem role="presentation">
                                                    <NavLink type="button" onClick={() => { setSessionNav(item.replace(/ +/g, '-').toLowerCase()); setView(2); }} className={nav === item.replace(/ +/g, '-').toLowerCase() ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>{item}</NavLink>
                                                </NavItem>
                                            ))
                                        }

                                        {/*

                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("keynote"); setView(2); }} className={sessionNav === "keynote" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Keynote Presentation</NavLink>
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("panel"); setView(2); }} className={sessionNav === "panel" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Panel Session</NavLink>
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("fireside-chat"); setView(2); }} className={sessionNav === "fireside-chat" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Fireside Chat</NavLink>
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("demo"); setView(2); }} className={sessionNav === "demo" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Product Demo</NavLink>
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("workshop"); setView(2); }} className={sessionNav === "workshop" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Workshops</NavLink>
                                            </NavItem>
                                            <NavItem role="presentation">
                                                <NavLink type="button" onClick={() => { setSessionNav("roundtables"); setView(2); }} className={sessionNav === "roundtables" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>Roundtables</NavLink>
                                            </NavItem>
                                        */}
                                        
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <div className='sticky-top mb-4 pt-5 pb-3 agenda-sticky-top' style={{ backgroundColor: '#141413' }}>
                                <Nav pills className="nav-pills filter-btns gap-3" role="tablist">
                                    {
                                        daysData.map((item: any) => (
                                            <NavItem role="presentation">
                                                {item === "All" ?
                                                    <NavLink type="button" onClick={() => { setDateNav(item.substring(0,3)); setView(0); }} className={dateNav === item.substring(0,3) ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 nav-tab-custom"}>{item}</NavLink>
                                                    :
                                                    <NavLink type="button" onClick={() => { setDateNav(item.substring(0,3)); setView(0); }} className={dateNav === item.substring(0,3) ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium text-primary fs-13 nav-tab-custom"}>{splitDateWeekDay(item)} <span className={dateNav === item.substring(0,3) ? 'text-dark fs-11' : 'text-white fs-11'}>{splitDateDay(item)}</span></NavLink>
                                                    
                                                }
                                                
                                            </NavItem>
                                        ))
                                    }

                                    {/*
                                    
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setDateNav("All"); setView(0); }} className={dateNav === "All" ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 nav-tab-custom"}>All</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setDateNav("Tue"); setView(0); }} className={dateNav === "Tue" ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium  text-primary fs-13 nav-tab-custom"}>Tuesday <span className={dateNav === "Tue" ? 'text-dark fs-11' : 'text-white fs-11'}>8 October</span></NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setDateNav("Wed"); setView(0); }} className={dateNav === "Wed" ? " fw-medium fs-12 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 text-primary fs-13 nav-tab-custom"}>Wednesday <span className={dateNav === "Wed" ? 'text-dark fs-11' : 'text-white fs-11'}>9 October</span></NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => { setDateNav("Thur"); setView(0); }} className={dateNav === "Thur" ? " fw-medium fs-12 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 text-primary fs-13 nav-tab-custom"}>Thursday <span className={dateNav === "Thur" ? 'text-dark fs-11' : 'text-white fs-11'}>10 October</span></NavLink>
                                        </NavItem>
                                    */}
                                    
                                </Nav>

                            </div>
                            <Row className='mb-5'> 
                                    {currentView === 0 && agendasData.filter(datesdata => datesdata.dateCode === dateNav || dateNav === "All").map((item, idx) => (
                                        <Col key={idx} lg={12} sm={12}>
                                            <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                                <CardBody className='p-0'>
                                                    <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                                    { item.title && item.title !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.title}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                                    <div className='d-flex mt-3 gap-2 align-items-center'>
                                                        { item.description && item.description !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                        {
                                                            item.theme && item.theme !== null ?
                                                                (item?.theme.map((row: string) => (
                                                                    <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                                ))
                                                                )
                                                            :
                                                            null
                                                        } 
                                                    </div>
                                                    <Row>
                                                    {
                                                    item.speakers && item.speakers !== null ?
                                                        item.speakers.map((row: any) => (
                                                            item.speakers.length > 1 ?
                                                                <Col lg={4}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.img.url} alt="" height="60" />
                                                                        <div className='px-2'>
                                                                            <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                            <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                            <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                :
                                                                <Col lg={6}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.img.url} alt="" height="60" />
                                                                        <div className='px-2'>
                                                                            <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                            <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                            <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                        ))
                                                        :
                                                        null
                                                    
                                                    }
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                    ))}
                                 

                                {currentView === 1 && agendasData.filter(data => data.theme?.includes(nav)).map((item, idx) => (
                                    <Col key={idx} lg={12} sm={12}>
                                            <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                                <CardBody className='p-0'>
                                                    <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                                    { item.title && item.title !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.title}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                                    <div className='d-flex mt-3 gap-2 align-items-center'>
                                                        { item.description && item.description !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                        {
                                                            item.theme && item.theme !== null ?
                                                                (item?.theme.map((row: string) => (
                                                                    <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                                ))
                                                                )
                                                            :
                                                            null
                                                        } 
                                                    </div>
                                                    <Row>
                                                    {
                                                    item.speakers && item.speakers !== null ?
                                                        item.speakers.map((row: any) => (
                                                            item.speakers.length > 1 ?
                                                                <Col lg={4}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.img.url} alt="" height="60" />
                                                                        <div className='px-2'>
                                                                            <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                            <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                            <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                :
                                                                <Col lg={6}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.img.url} alt="" height="60" />
                                                                        <div className='px-2'>
                                                                            <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                            <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                            <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                        ))
                                                        :
                                                        null
                                                    
                                                    }
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                ))}

                                {currentView === 2 && agendasData.filter(data => data.type.includes(sessionNav)).map((item, idx) => (
                                    
                                     <Col key={idx} lg={12} sm={12}>
                                     <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                         <CardBody className='p-0'>
                                            
                                             <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                             { item.title && item.title !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.title}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                             <div className='d-flex mt-3 gap-2 align-items-center'>
                                                 { item.description && item.description !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                 {
                                                     item.theme && item.theme !== null ?
                                                         (item?.theme.map((row: string) => (
                                                             <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                         ))
                                                         )
                                                     :
                                                     null
                                                 } 
                                             </div>
                                             <Row>
                                             {
                                             item.speakers && item.speakers !== null ?
                                                 item.speakers.map((row: any) => (
                                                     item.speakers.length > 1 ?
                                                         <Col lg={4}>
                                                             <div className='d-flex gap-2 mt-4'>
                                                                 <img src={row.img.url} alt="" height="60" />
                                                                 <div className='px-2'>
                                                                     <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                     <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                     <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                 </div>
                                                             </div>
                                                         </Col>
                                                         :
                                                         <Col lg={6}>
                                                             <div className='d-flex gap-2 mt-4'>
                                                                 <img src={row.img.url} alt="" height="60" />
                                                                 <div className='px-2'>
                                                                     <h5 className="text-primary fs-14 mb-2">{row.name}</h5>
                                                                     <p className="text-white fs-11 fw-light mb-0">{row.credentials}</p>
                                                                     <p className="text-white fs-11 fw-light">{row.company}</p>
                                                                 </div>
                                                             </div>
                                                         </Col>
                                                 ))
                                                 :
                                                 null
                                             
                                             }
                                             </Row>
                                         </CardBody>
                                     </Card>

                                 </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default AgendaList;