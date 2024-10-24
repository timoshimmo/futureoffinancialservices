import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';
import insights1 from "../../../assets/images/insights/insight1.png";
import insights2 from "../../../assets/images/insights/insight2.png";
import insights3 from "../../../assets/images/insights/insight3.png";

import ic_up_right_arrow from "../../../assets/images/icons/ic_up_righ_arrow.png";

import { insightsData } from '../../../common/data';

const Banner = () => {

const videoEl = useRef<HTMLVideoElement>(null);

useEffect(() => {
    attemptPlay();
  }, []);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current?.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

    return (
        <React.Fragment>
            <section className="section insight-banner">
                <Container>
                    <Row className='px-4 mb-5 justify-content-center'>
                        <Col lg={12} sm={12} className='d-flex justify-conntent-center'>
                            <h2 className='w-100 display-4 mb-5 text-center fw-bold lh-base text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', display: 'inline-block', width: 'auto' }}>Future of <br />Financial Services</h2>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={5} sm={12} className=' d-flex flex-column'>
                            <div className="text-left pe-4">
                                <h6 className="fw-bold text-white title" style={{ fontFamily: 'Georgia, Montserrat', fontSize: '35px' }}>Dedicated to driving the evolution and transformation of the financial services industry.</h6>
                                {/*<p className="h4 text-white mb-4 py-2 caption">Innovating the Next Generation of Finance</p> */}
                                <div className="w-100 btn-home-web mt-5">
                                    <div className="d-flex gap-3">
                                        <NavLink href="/about" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} sm={12}>
                            <video
                                style={{ maxWidth: "100%", width: "800px", margin: "0 auto", borderRadius: '20px' }}
                                playsInline
                                loop
                                muted
                                src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                                ref={videoEl}
                            />
                        </Col>
                    </Row>
                    {/* <div className="placeholder-insight-space"></div> */}
                </Container>
            </section>
        </React.Fragment>
    );

}

export default Banner;