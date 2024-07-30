import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import img1 from "../../../assets/images/home/img_about_summit.png";
import ic_youtube from "../../../assets/images/home/ic_youtube.png";
import ic_linkedin from "../../../assets/images/home/ic_linkedin.png";
import ic_x from "../../../assets/images/home/ic_x.png";
import ic_instagram from "../../../assets/images/home/ic_instagram.png";
//import Marquee from "react-simple-marquee";
import { whatIsData } from '../../../common/data';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';

const WhatIs = () => {

    const WheelControls: KeenSliderPlugin = (slider) => {
        let touchTimeout: ReturnType<typeof setTimeout>
        let position: {
          x: number
          y: number
        }
        let wheelActive: boolean
      
        function dispatch(e: WheelEvent, name: string) {
          position.x -= e.deltaX
          position.y -= e.deltaY
          slider.container.dispatchEvent(
            new CustomEvent(name, {
              detail: {
                x: position.x,
                y: position.y,
              },
            })
          )
        }
      
        function wheelStart(e: WheelEvent) {
          position = {
            x: e.pageX,
            y: e.pageY,
          }
          dispatch(e, "ksDragStart")
        }
      
        function wheel(e: WheelEvent) {
          dispatch(e, "ksDrag")
        }
      
        function wheelEnd(e: WheelEvent) {
          dispatch(e, "ksDragEnd")
        }
      
        function eventWheel(e: WheelEvent) {
          e.preventDefault()
          if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
          }
          wheel(e)
          clearTimeout(touchTimeout)
          touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
          }, 50)
        }
      
        slider.on("created", () => {
          slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
          })
        })
    }
      
    const animation = { duration: 5000, easing: (t: number) => t }

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true, 
          slides: {
            origin: "center",
            perView: 2,
            spacing: 10,
          },
          vertical: true,
          created(s) {
            s.moveToIdx(2, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
          },
        },
        [WheelControls]
      )

    return (
        <React.Fragment>

            <section className="section body-bg-dark what-is-container">
                <Container>
                    <Row className="align-items-end gy-4">
                        <Col lg={4} sm={12} className="mx-auto p-0 what-left-body">
                            <div className='w-100'>
                                <p className="text-white fw-bold h3 bg-primary py-3 text-center mb-0 what-left-title">What is FFS?</p>
                            </div>
                            <div className='p-3 border border-white border-top-0'>

                                <div ref={sliderRef} className="keen-slider" style={{ height: 130 }}>
                                    {whatIsData.map((item, key) => (
                                        <div className="keen-slider__slide">
                                            <p key={key} className='p-2 border rounded border-white border-2 fw-light text-white text-center'>{item.title}</p>
                                        </div>
                                    ))} 
                                    
                                </div>
                                {/*<div className='relative' style={{ zIndex: 100, height: '150px' }}>
                                    <Marquee
                                        direction='up'
                                        pauseOnClick={true}
                                        style={{ overflowX: 'visible', width: '100%', height: '650px', overflowY: 'hidden', }}>
                                            {whatIsData.map((item, key) => (
                                                <p key={key} className='p-2 border rounded border-white border-2 fw-light text-white'>{item.title}</p>
                                            ))}  
                                    </Marquee>
                                            </div>*/}
                            </div>
                        </Col>
                        <Col lg={8} sm={12} className='what-right-body'>
                            <div className="px-3 py-4">
                                <p className="text-primary fw-bold h2 pt-3 pb-4 text-center mb-0 what-left-title-mb">What is FFS?</p>
                                <p className="mb-5 text-white fs-15">A premier event that will bring together global leaders, innovators, and visionaries from the financial services industry to explore and shape its future. With a variety of insightful sessions, roundtables, workshops, and exhibitions, participants will engage in an in-depth exploration of the future of financial services and the technological advancements that will drive the next decade.</p>
                                <p className="mb-3 text-white fs-15">Follow the conversation on social media:</p>
                                <div className="hstack gap-4 py-2 align-items-center">
                                    <Link to={'/'}><img src={ic_youtube} height={25}/></Link>
                                    <Link to={'/'}><img src={ic_linkedin} height={25}/></Link>
                                    <Link to={'/'}><img src={ic_x} height={25}/></Link>
                                    <Link to={'/'}><img src={ic_instagram} height={25}/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default WhatIs;