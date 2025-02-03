import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
//import logolight from "../../../assets/images/ffs_top_logo_light.png";
//import ffsLogoDark from "../../../assets/images/ffs_top_logo_dark.png";
import ffsLogoLight1 from "../../../assets/images/ffs_top_logo_light2.png";
import axios from 'axios';

interface IFooter {
    bottomLinks: any;
    copyright: string;
    links: any;
    logo: any;
}

interface IData {
    data: {
        sys: {
            contentType: any
        },
        fields: {
            title: string,
            link: string,
            column: string,
            position: number
        }
    };
}

const Footer = () => {


    const [dataEntry, setDataEntry] = useState<IData[] | []>([]);
    const [logoUrl, setLogoUrl] = useState("");
    const [copyrightText, setCopyrightText] = useState("");

    useEffect(() => {
      /*  let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/6Y8B4V0hBV1mXShdplblcr?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/7lccZCK89XAu6IdE3afQnF?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4'
        ]; */

      /*  Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: fields}, {data: asset}] )=> {
            console.log(`FOOTER DATA: ${JSON.stringify(fields.fields)}`);
            console.log(`FOOTER LOGO: ${JSON.stringify(asset.fields)}`);
           // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
          
           // console.log(`Sorted: ${JSON.stringify(sortedSpeakers)}`);
           setLogoUrl(asset.fields.file.url);
          
            
        }); */
        
        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/6Y8B4V0hBV1mXShdplblcr?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {

            let arr_obj: any[] = [];

            const logoAssetId = response.data.fields.logo.sys.id;

            let logoData = await axios.get(`https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${logoAssetId}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`);

            await response.data.fields.links.forEach((item: any) => {

                const idVal = item.sys.id;
                const entryLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                arr_obj.push(entryLinks);

            });

            //console.log(`Copyright: ${JSON.stringify(response.data.fields.copyright)}`);

            setLogoUrl(logoData.data.fields.file.url);
            //setCopyrightText(response.data.fields.copyright);

            Promise.all(arr_obj.map((endpoint) => axios.get(endpoint))).then(results => {
                //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
               // console.log(`RESULTS: ${JSON.stringify(results)}`);
                setDataEntry(results);
               // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
             
            });

           // console.log("FOOTER DATA", response.data);


        }); 

    }, []);

    return (
        <React.Fragment>
            <footer className="bg-dark pb-5 position-relative footer-style">
                <Container>
                    <hr className='mb-4'/>
                    <Row>
                        <Col lg={5} className="mt-5">
                            <div>
                                <div className='mb-5'>
                                <Link to="/" className="d-block">
                                    <img src={logoUrl} alt="logo light" className="footer-logo" />
                                 </Link>   
                                    
                                </div>
                                <div className="mt-4 fs-13">
                                    <ul className="list-inline mb-0 footer-social-link">
                                        <li className="list-inline-item">
                                            <Link to="https://www.linkedin.com/company/finance-ffs/" target="_blank" rel="noopener noreferrer" className="avatar-xs d-block">
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-linkedin-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://x.com/finance_ffs" className="avatar-xs d-block" target='_blank'>
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-twitter-x-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://www.youtube.com/@finance_ffs" className="avatar-xs d-block" target='_blank'>
                                                <div className="avatar-title rounded-circle">
                                                    <i className="ri-youtube-fill"></i>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="ms-lg-auto">
                            <Row className='row-footer'>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>About Us</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            {dataEntry.filter(row => row.data.sys.contentType.sys.id === "footerLinks" && row.data.fields.column === "About Us").map((item, idx) => (
                                            //dataEntry. .data.sys.contentType
                                                <li><Link to={item.data.fields.link} className="text-white fs-14">{item.data.fields.title}</Link></li>
                                            ))}
                                            
                                            {/* home#banner 
                                                <li><Link to="/about" className="text-white fs-14">About FFS</Link></li>
                                                <li><Link to="/contact-us" className="text-white fs-14">Contact Us</Link></li>
                                                <li><Link to="/faq" className="text-white fs-14">FAQs</Link></li>
                                            */}
                                            
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Get Involved</h5>
                                    <div className="text-white mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            {dataEntry.filter(row => row.data.fields.column === "Get Involved").map((item, idx) => (
                                                <li><Link to={item.data.fields.link} className="text-white fs-14">{item.data.fields.title}</Link></li>
                                            ))}
                                            {/* 
                                                <li><Link to="/register" className="text-white fs-14">Register</Link></li>
                                                <li><Link to="/sponsors" className="text-white fs-14">Be a Sponsor</Link></li>
                                                <li><Link to="/partners" className="text-white fs-14">Partner With Us</Link></li>
                                            */}
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} xs={6} className="mt-4">
                                    <h5 className="text-primary mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Events</h5>
                                    <div className="text-white  mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            {dataEntry.filter(row => row.data.fields.column === "Events").map((item, idx) => (
                                                <li><Link to={item.data.fields.link} className="text-white fs-14">{item.data.fields.title}</Link></li>
                                            ))}
                                            
                                            {/* <li><Link to="/speakers" className="text-white fs-14">2024 Speakers</Link></li>
                                           
                                                <li><Link to="/agenda" className="text-white fs-14">2024 Agenda</Link></li> 
                                                <li><Link to="/summit" className="text-white fs-14">FFS Summit 2024</Link></li>
                                                
                                                */}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="text-center text-sm-start align-items-center mt-3">
                        <Col sm={6}>
                            <div>
                                <p className="copy-rights mb-0 fs-14">
                                 © {new Date().getFullYear()} FFS - All Rights Reserved
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end mobile-copyright-area">
                                <ul className="list-inline mb-0 footer-social-link">
                                    <li className="list-inline-item px-2">
                                         <Link to="/terms" className="d-block">
                                            <span className="text-muted fs-14">Terms</span>
                                         </Link>
                                    </li>
                                    <li className="list-inline-item px-2">
                                         <Link to="/privacy" className="d-block"> 
                                            <span className="text-muted fs-14">Privacy</span>
                                         </Link>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <Link to="/cookie-policy" className="d-block">
                                            <span className="text-muted fs-14">Cookies</span>
                                        </Link>
                                    </li> 
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;