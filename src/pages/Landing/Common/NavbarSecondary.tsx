import React, { useState, useEffect, useCallback } from 'react';
import { Collapse, Container, NavbarToggler, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, ButtonDropdown } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom'; 
import Scrollspy from "react-scrollspy";

//import Images

/*import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import ffsLogoLight from "../../../assets/images/ffs_top_logo_light.png";
*/
import ffsLogoDark from "../../../assets/images/ffs_top_logo_dark.png";
import ffsLogoLight1 from "../../../assets/images/ffs_top_logo_light2.png";


const NavbarSecondary = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");
    const [activeLink, setActiveLink] = useState<any>();
    const [openEvents, setOpenEvents] = useState(false);
    const [openInvolved, setInvolved] = useState(false);

    const [openFFS2024, setOpenFFS2024] = useState(false);


    const toggle = () => setisOpenMenu(!isOpenMenu);
    const toggleEvents = () => setOpenEvents((prevState) => !prevState);
    const toggleInvolved = () => setInvolved((prevState) => !prevState);

    const toggleFFS2024 = () => setOpenFFS2024((prevState) => !prevState);

    const closeInvolved = () => setInvolved(false);
    const closeEvents = () => setOpenEvents(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = useCallback(() => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }, [])

    useEffect(() => {
        const activation = (event: any) => {
            const target = event.target;
            if (target) {
                target.classList.add('active');
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove('active');
                }
            }
        };
        const defaultLink = document.querySelector('.navbar li.a.active');
        if (defaultLink) {
            defaultLink?.classList.add("active")
            setActiveLink(defaultLink)
        }
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', activation);
            });
        };
    }, [activeLink]);

    var windowSize = document.documentElement.clientWidth;
    useEffect(() => {
        var navbar: any = document.getElementById("navbar");
        if (windowSize >= 992) {
            navbar.classList.add("navbar-light");
        }
        else {
            navbar.classList.remove("navbar-light");
        }
    }, [windowSize]);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img src={ffsLogoDark} className="card-logo card-logo-dark" alt="logo dark" height="40" />
                        <img src={ffsLogoLight1} className="card-logo card-logo-light" alt="logo light" height="40" />
                    </Link>
                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>
                   
                    <Collapse
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                        isOpen={isOpenMenu}
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "home",
                                "agenda",
                                "speakers",
                                "get-involved",
                            ]}
                            currentClassName="active"
                            className="navbar-nav ms-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </li>
                            <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                            </li>
                            <li className="nav-item px-4 web-navbar">
                                <Dropdown isOpen={openEvents} toggle={toggleEvents}>
                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                        Events
                                    </DropdownToggle>
                                    <DropdownMenu className='px-2'>
                                        <DropdownItem href='/summit' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>FFS Summit 2024</DropdownItem>
                                        {/* <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href='/speakers' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>2024 Speakers</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                        <DropdownItem href='/agenda' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>2024 Agenda</DropdownItem> */}
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            {/*<li className="nav-item px-4 web-navbar">
                                <Dropdown isOpen={openEvents} toggle={toggleEvents}>
                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                        Events
                                    </DropdownToggle>
                                    <DropdownMenu className='px-2'>
                                        <ButtonDropdown className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>
                                            <Dropdown isOpen={openFFS2024} toggle={toggleFFS2024}>
                                                <DropdownToggle caret tag="button" className="nav-link fs-14">
                                                    FFS Summit 2024
                                                </DropdownToggle>
                                                <DropdownMenu className='px-2'>
                                                    <DropdownItem href='/speakers' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>2024 Speakers</DropdownItem>
                                                    <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                    <DropdownItem href='/agenda' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>2024 Agenda</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </ButtonDropdown>
                                       
                                    </DropdownMenu>
                                </Dropdown>
                        </li> */}
                            <li className="nav-item px-4 web-navbar">
                                <Dropdown isOpen={openInvolved} toggle={toggleInvolved}>
                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                        Get Involved 
                                    </DropdownToggle>
                                    <DropdownMenu className='px-2'>
                                        <DropdownItem href='/sponsors' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        {/* <DropdownItem href="/exhibitors" className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Be an Exhibitor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/> */}
                                        <DropdownItem href='/partners' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                          
                            {/* Mobile Navbar  */}
                            <li className="nav-item mobile-navbar">
                                <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to="/home" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </li>
                            <li className="nav-item mobile-navbar">
                                    <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                            </li>
                            <li className="mobile-navbar">
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                        Events
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href='/summit' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>FFS Summit 2024</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href='/speakers' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>2024 Speakers</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        {/* <DropdownItem href="/exhibitors" className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Be an Exhibitor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/> */}
                                        <DropdownItem href='/agenda' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>2024 Agenda</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </li>

                            {/* <li className="mobile-navbar">
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                        Events
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <ButtonDropdown className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>
                                        <UncontrolledDropdown inNavbar nav>
                                            <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                                FFS Summit 2024
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem href='/summit' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}> FFS Summit 2024</DropdownItem>
                                                <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                <DropdownItem href='/speakers' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>2024 Speakers</DropdownItem>
                                                <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>

                                                <DropdownItem href='/agenda' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>2024 Agenda</DropdownItem>
                                                <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        </ButtonDropdown>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                    </li> */}

                            {/* Mobile Navbar  */}
                            <li className="mobile-navbar">
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                        Get Involved
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href='/sponsors' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        {/* <DropdownItem href="/exhibitors" className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Be an Exhibitor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/> */}
                                        <DropdownItem href='/partners' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </li>
                           
                        </Scrollspy>
                        <div className='ms-4 mobile-nav-button'>
                            <Link to="/register" className="btn btn-success btn-banner">Contact Us </Link>
                        </div>       
                    </Collapse>

{/*

            <Collapse
                        className="navbar-collapse mobile-navbar"
                        id="navbarSupportedContent"
                        isOpen={isOpenMenu}
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "home",
                                "agenda",
                                "speakers",
                                "get-involved",
                            ]}
                            currentClassName="active"
                            className="navbar-nav ms-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item px-4">
                                <NavLink className="nav-link fs-14 text-white" to="/home" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </li>
                            <li className="nav-item px-4">
                                <NavLink className="nav-link fs-14 text-white" to="/agenda" activeClassName="active" tag={RRNavLink}>Agenda</NavLink>
                            </li>
                            <li className="nav-item px-4">
                                <NavLink className="nav-link fs-14 text-white" to="/speakers" activeClassName="active" tag={RRNavLink}>Speakers</NavLink>
                            </li>
                            <li className="nav-item px-4">
                                <Dropdown isOpen={openInvolved} toggle={toggleInvolved}>
                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                        Get Involved
                                    </DropdownToggle>
                                    <DropdownMenu className='px-2'>
                                        <DropdownItem href='/sponsors' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href="/exhibitors" className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Be an Exhibitor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href='/partners' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                        </Scrollspy>
                        <div className='ms-4'>
                            <Link to="/register" className="btn btn-success btn-banner">Register </Link>
                        </div>       
                    </Collapse>


                        */}
                   
                </Container>
               
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
            <nav className="navbar pb-0 web-navbar">

                <div className="w-100" style={{ height: '50px', marginTop: '4rem', backgroundColor: '#1b1b1b' }}>
               
                        <Scrollspy
                            offset={-18}
                            items={[
                                "agenda",
                                "speakers",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-secondary"
                        >
                            <div className='d-flex justify-content-center align-items-center'>
                                <li className="nav-item px-4">
                                    <NavLink className="nav-link fs-14 text-white" to="/summit" activeClassName="active" tag={RRNavLink}>Overview</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink className="nav-link fs-14 text-white" to="/speakers" activeClassName="active" tag={RRNavLink}>Speakers</NavLink>
                                </li>
                                <li className="nav-item px-4">
                                    <NavLink className="nav-link fs-14 text-white" to="/agenda" activeClassName="active" tag={RRNavLink}>Agenda</NavLink>
                                </li>
                            </div>
                        </Scrollspy>    
                </div>
            </nav>
            
        </React.Fragment>
    );
}

export default NavbarSecondary;
