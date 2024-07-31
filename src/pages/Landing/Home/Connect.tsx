import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
import { connectData } from '../../../common/data';
//import arrow_link from "../../../assets/images/home/img_link_arrow.png";
//import home_submit_right from "../../../assets/images/home/img_home_summit_right.png";
import summit1 from "../../../assets/images/home/img_one_summit1.png";

const Connect = () => {

    const [imgName, setImageName] = useState(summit1);
    const [indexVal, setIndexVal] = useState(0);
    
    return (
        <React.Fragment>
            <section className="submit-section body-bg-dark px-4" style={{ backgroundColor: "#141413" }}>
                <Container>
                    <Row className="gy-4">
                        <Col lg={12} className='px-5'>
                            <div className="w-100">
                                <h2 className="mb-4 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>One Summit, <br /><span className='text-primary'>Unlimited Possibilities</span></h2>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className='px-5'>
                            <Row className="justify-content-center mx-auto">
                                {connectData.map((item, key) => (
                                    //onClick={() => setNav("All")} className={nav === "All" ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}
                                    <Col key={key} lg={12} sm={12} onMouseOver={() => {setImageName(item.img); setIndexVal(key); }} className={indexVal === key ? 'border-start border-2 border-primary fs-18 py-4' : 'border-start border-2 border-white fs-18 py-4'}>
                                        <div className="shadow-none px-3 py-2">
                                            <div className='w-100 justify-content-between align-items-start'>
                                                <h5 className={indexVal === key ? 'text-primary fs-18 mb-0' : 'text-white fs-18 mb-0'} style={{ fontFamily: 'Georgia' }}>{item.title}</h5>
                                            </div>                       
                                            <p className="fs-12 text-white fw-light mb-0">{item.textContent}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col lg={5} sm={12} className="mx-auto">
                            <div className='sponsor-left'>
                                <img src={imgName} alt="" className="img-fluid mx-auto border border-0 rounded-4" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;