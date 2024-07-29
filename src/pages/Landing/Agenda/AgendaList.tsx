import React, { useState } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Nav, 
    NavItem, 
    NavLink,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Collapse } from 'reactstrap';

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
    const [currentData, setCurrentData] = useState<IProfile>();

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const passData = (item: any) => {
        console.log("ITEM: ", item)
        
        setCurrentData(item);
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row className='justify-content-end mb-5'>
                        <Col lg={7}>
                            <Nav pills className="nav-pills filter-btns gap-3" role="tablist">
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setDateNav("All")} className={dateNav === "All" ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 nav-tab-custom"}>All</NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setDateNav("Tue")} className={dateNav === "Tue" ? " fw-medium fs-13 text-primary border border-white rounded-2 bg-white active" : "fw-medium  text-primary fs-13 nav-tab-custom"}>Tuesday <span className={dateNav === "Tue" ? 'text-dark fs-11' : 'text-white fs-11'}>8 October</span></NavLink>
                                </NavItem>
                                <NavItem role="presentation">
                                    <NavLink type="button" onClick={() => setDateNav("Wed")} className={dateNav === "Wed" ? " fw-medium fs-12 text-primary border border-white rounded-2 bg-white active" : "fw-medium fs-13 text-primary fs-13 nav-tab-custom"}>Wednesday <span className={dateNav === "Wed" ? 'text-dark fs-11' : 'text-white fs-11'}>9 October</span></NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className='justify-content-between'>
                        <Col lg={5} sm={12}>
                            <div className='border p-4 border-white rounded-3'>
                                <div className='w-100 hstack py-2 gap-2 search-box'>
                                    <img src={ic_search} height={15} />
                                    <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                </div>
                                <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Themes</h2>
                                <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
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
                                        <NavLink type="button" onClick={() => setNav("fintech")} className={nav === "fintech" ? " fw-medium fs-12 active" : "fw-medium fs-12 border border-white rounded-2"}>Financial Technology</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            
                        </Col>
                        <Col lg={7} sm={12}>
                            <Row> 
                                {agendaData.filter(data => data.dateCode === dateNav || dateNav === 'All').map((item) => (
                                    <Col key={item.id} lg={12} sm={12}>
                                        <Card className="shadow-none border-top border-bottom border-white rounded-3 mb-4 p-4 text-white">
                                            <CardBody className='p-0'>
                                                <div className='d-flex gap-2 align-items-center mb-2'><span className='text-white fs-20'>{item.date}</span> | <span className='text-white fs-20'>{item.time}</span></div>
                                                <h6 className='text-white fw-semibold fs-20'>{item.topic}</h6>
                                                <p className='text-secondary fs-13'>{item.type}</p>
                                                <div className='d-flex gap-2 mt-4'>
                                                    <img src={item.speaker[0].pic} alt="" height="90" />
                                                    <div className='px-2'>
                                                        <h5 className="text-primary fs-14">{item.speaker[0].name}</h5>
                                                        <p className="text-white fs-11 fw-light">{item.speaker[0].credentials}</p>
                                                    </div>
                                                </div>
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