import React, { useState } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Nav, 
    NavItem, 
    NavLink,
    } from 'reactstrap';

import { Link } from 'react-router-dom';
import { agendaData } from '../../../common/data';
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

const AgendaList = () => {

    const [nav, setNav] = useState("All");
    const [open, setOpen] = useState(false);

    const [dateNav, setDateNav] = useState("All");
    const [sessionNav, setSessionNav] = useState("");
    const [currentData, setCurrentData] = useState<IProfile>();

    const [currentView, setView] = useState(0);

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const passData = (item: any) => {
       // console.log("ITEM: ", item)
        
        setCurrentData(item);
        setOpen(!open);
    }

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
                                    </Nav>
                                </div>
                                <div className='border py-3 px-4 border-white rounded-3'>
                                    {/*<div className='w-100 hstack py-2 gap-2 search-box'>
                                        <img src={ic_search} height={15} />
                                        <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                    </div>*/}
                                    <h2 className='mb-3 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Session Types</h2>
                                    <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
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
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <div className='sticky-top mb-4 pt-5 pb-3 agenda-sticky-top' style={{ backgroundColor: '#141413' }}>
                                <Nav pills className="nav-pills filter-btns gap-3" role="tablist">
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
                                </Nav>

                            </div>
                            <Row className='mb-5'> 
                                    {currentView === 0 && agendaData.filter(data => data.dateCode === dateNav || dateNav === "All").map((item) => (
                                    <Col key={item.id} lg={12} sm={12}>
                                        <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                            <CardBody className='p-0'>
                                                <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                                { item.topic !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.topic}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                                <div className='d-flex mt-3 gap-2 align-items-center'>
                                                    { item.topic !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                    {
                                                        item.theme !== null ?
                                                            (item?.theme.map((row: string) => (
                                                                <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                            ))
                                                            )
                                                        :
                                                        null
                                                    } 
                                                </div>
                                                {/* <p className='text-secondary fs-12 fw-light'>{item.type}</p> */}
                                                    <Row>
                                                    {
                                                    item.speaker !== null ?
                                                        item.speaker.map((row) => (
                                                            item.speaker.length > 1 ?
                                                                <Col lg={4}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.pic} alt="" height="60" />
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
                                                                        <img src={row.pic} alt="" height="60" />
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

                                {currentView === 1 && agendaData.filter(data => data.theme?.includes(nav)).map((item) => (
                                    <Col key={item.id} lg={12} sm={12}>
                                        <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                            <CardBody className='p-0'>
                                                <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                                { item.topic !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.topic}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                                <div className='d-flex mt-3 gap-2 align-items-center'>
                                                    { item.topic !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                    {
                                                        item.theme !== null ?
                                                            (item?.theme.map((row: string) => (
                                                                <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                            ))
                                                            )
                                                        :
                                                        null
                                                    } 
                                                </div>
                                                {/* <p className='text-secondary fs-12 fw-light'>{item.type}</p> */}
                                                    <Row>
                                                    {
                                                    item.speaker !== null ?
                                                        item.speaker.map((row) => (
                                                            item.speaker.length > 1 ?
                                                                <Col lg={4}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.pic} alt="" height="60" />
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
                                                                        <img src={row.pic} alt="" height="60" />
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

                                {currentView === 2 && agendaData.filter(data => data.type.includes(sessionNav)).map((item) => (
                                    <Col key={item.id} lg={12} sm={12}>
                                        <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                            <CardBody className='p-0'>
                                                <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.startTime}</span></div>
                                                { item.topic !== "" ? <h6 className='text-white fw-semibold fs-20'>{item.topic}</h6> : <h6 className='text-white fw-semibold fs-20'>{item.description}</h6>}
                                                <div className='d-flex mt-3 gap-2 align-items-center'>
                                                    { item.topic !== "" ? <p className='fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2' style={{ cursor: 'pointer' }}>{item.description}</p> : null }
                                                    {
                                                        item.theme !== null ?
                                                            (item?.theme.map((row: string) => (
                                                                <p className="fw-light fs-11 text-capitalize border border-white rounded-2 py-1 px-2" style={{ cursor: 'pointer' }}>{row.replace(/-/g, ' ')}</p>
                                                            ))
                                                            )
                                                        :
                                                        null
                                                    } 
                                                </div>
                                                {/* <p className='text-secondary fs-12 fw-light'>{item.type}</p> */}
                                                    <Row>
                                                    {
                                                    item.speaker !== null ?
                                                        item.speaker.map((row) => (
                                                            item.speaker.length > 1 ?
                                                                <Col lg={4}>
                                                                    <div className='d-flex gap-2 mt-4'>
                                                                        <img src={row.pic} alt="" height="60" />
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
                                                                        <img src={row.pic} alt="" height="60" />
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