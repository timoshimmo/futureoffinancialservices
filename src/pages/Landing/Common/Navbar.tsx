import React, { useState, useEffect, useCallback } from 'react';
import { Collapse, Container, NavbarToggler, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom'; 
import Scrollspy from "react-scrollspy";

//import Images

/*import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import ffsLogoLight from "../../../assets/images/ffs_top_logo_light.png";
*/
import ffsLogoDark from "../../../assets/images/ffs_top_logo_dark.png";
import ffsLogoLight1 from "../../../assets/images/ffs_top_logo_light2.png";


const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");
    const [activeLink, setActiveLink] = useState<any>();
    const [openEvents, setOpenEvents] = useState(false);
    const [openInvolved, setInvolved] = useState(false);


    const toggle = () => setisOpenMenu(!isOpenMenu);
    const toggleEvents = () => setOpenEvents((prevState) => !prevState);
    const toggleInvolved = () => setInvolved((prevState) => !prevState);

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

    /* onMouseEnter={toggleInvolved} onMouseLeave={closeInvolved}  */

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/home">
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
        </React.Fragment>
    );
}

export default Navbar;
