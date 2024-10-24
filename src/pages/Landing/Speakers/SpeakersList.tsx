import React, { useState } from 'react';
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

const SpeakersList = () => {

    const [nav, setNav] = useState("All");
    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState<IProfile>();

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
                                {speakersFullData.filter(data => data.tags.includes(nav) || nav === 'All').map((item) => (
                                    <Col key={item.id} lg={6} sm={12}>
                                        <Card onClick={()=>passData(item)} className="shadow-none rounded-0 speakers-card mb-2 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img} alt="" className="avatar-speaker-list"/>
                                                <div className='w-100 mt-2'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-11 fw-light">{item.credentials}{item.company !== "" ? `, ${item.company}` : ""}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='speakers-mobile-row'>
                                {speakersFullData.filter(data => data.tags.includes(nav) || nav === 'All').map((item) => (
                                    <Col key={item.id} lg={6} sm={12}>
                                        <Card onClick={()=>passData(item)} className="shadow-none rounded-0 speakers-card mb-5 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img} alt="" className="avatar-speaker-list"/>
                                                <div className='w-100 mt-3'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-12 fw-light">{item.credentials}, {item.company}</p>
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
                                    <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("strategy-&-markets")} className={nav === "strategy-&-markets" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Strategy & Markets</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("cybersecurity")} className={nav === "cybersecurity" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Cybersecurity</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("customer-experience")} className={nav === "customer-experience" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Customer Experience</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("artificial-intelligence")} className={nav === "artificial-intelligence" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Artificial Intelligence</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("financial-technology")} className={nav === "financial-technology" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Financial Technology</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("investment")} className={nav === "investment" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Investment</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("wealth-management")} className={nav === "wealth-management" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Wealth Management</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("insurance")} className={nav === "insurance" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Insurance</NavLink>
                                        </NavItem> 
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav("risk")} className={nav === "risk" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Risk</NavLink>
                                        </NavItem> 
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
                                    <img src={currentData?.pic} className='w-100 border-0 rounded-3'/>
                                </Col>
                                <Col lg={7} className='vstack justify-content-center align-items-center'>
                                    <div className='w-100 mt-3'>
                                        <p className='text-primary h3 fw-bold mb-2 lh-sm'>{currentData?.name}</p>
                                        <p className="text-white fs-15 fw-light mb-0">{currentData?.credentials}</p>
                                        <p className="text-white fs-13 fw-light">{currentData?.company}</p>
                                        {/*<span className='text-white fs-14 fw-light'>will be speaking on</span>*/}
                                    </div>
                                </Col>
                            </Row>
                            <div className='w-100 mt-4 p-4 border border-primary rounded-3'>
                               {/*  <p className='text-primary fs-18 fw-semibold lhbase'>{currentData?.courses[0].title}</p>
                                <p className='text-secondary fs-13'>{currentData?.courses[0].date}, {currentData?.courses[0].time}</p> */}
                                <p className='text-white fs-13 bio-style'><span className='text-primary fw-semibold'>{currentData?.name}</span> {currentData?.bio}</p>
                            </div>
                            {/*<p className='my-4 text-white fs-17 fw-bold'>Will be Speaking On</p>
                            {currentData?.courses.map((item: any) => (
                                <Card className="shadow-none border border-white rounded-3 mb-4 p-4 text-white">
                                    <CardBody className='p-0'>
                                        <div className='gap-2 align-items-center mb-3 speakers-agenda-bottom-web'><span className='text-white fs-14'>{item.date}</span> | <span className='text-white fs-14'>{item.time}</span></div>
                                        <div className='mb-3 speakers-agenda-bottom-mobile'>
                                            <p className='text-white fs-14 mb-1'>{item.date}</p>
                                            <p className='text-white fs-14'>{item.time}</p>
                                        </div>
                                        <h6 className='text-primary fw-semibold fs-20 mb-2'>{item.title}</h6>
                                        <div className='d-flex gap-2'>
                                            {
                                                item.tags !== null ?
                                                (item?.tags.map((row: string) => (
                                                    <p className="fw-light fs-12 text-capitalize border border-white rounded-2 py-1 px-2">{row.replace(/-/g, ' ')}</p>
                                                ))
                                                )
                                                :
                                                <p className="fw-light fs-12 text-capitalize border border-white rounded-2 py-1 px-2">General Session</p>
                                            } 
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                            <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Topics</h2>
                            <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                {
                                    currentData?.tags.map((row: string) => (
                                        <NavItem role="presentation">
                                            <NavLink type="button" onClick={() => setNav(row)} className={nav === row ? " fw-medium text-capitalize fs-12 active" : "fw-medium fs-12 text-capitalize border border-white rounded-2"}>{row.replace(/-/g, ' ')}</NavLink>
                                        </NavItem>
                                
                                    ))
                                }
                            </Nav> */}
                       </div>
                       
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </React.Fragment>
    );
}

export default SpeakersList;