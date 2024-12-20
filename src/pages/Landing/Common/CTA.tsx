import React, { useState, useEffect }  from 'react';
import { Container, Row, Col, Input, Form, Alert } from 'reactstrap';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";
import img_successful_subscription from "../../../assets/images/gif/successful_subscription.gif";

const CTA = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [closeAlert, setCloseAlert] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById("email_address_1");
            element?.setAttribute('placeholder', 'Enter email address');
        }, 5000);
        
    }, []);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required("Please Enter Your Email")
            .matches(/@[^.]*\./, "Invalid email format"),
        }),
        onSubmit: (values, { resetForm }) => {
            /*dispatch(registerUser(values));
            setLoader(true)
            */
            handleClick(values);
            //resetForm();
        }
    });

    const handleClick = (obj: any) => {

        if(!validation.errors.email) {
            setLoading(true);

            axios.post('https://dev-api.futureoffinancialservices.org/api/v1/subscribe', obj)
            .then(response => {
                console.log(response);
                setSuccessful(true);
                setLoading(false);
                validation.resetForm();
            })
            .catch((error) => {
                if (error.response) {
                    console.log("server error");
                    console.log(error.response.data.error);
                    setErrorMsg(error.response.data.error);
                    setCloseAlert(true);
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
                setLoading(false);
          })
        }
    };

    const onDismiss = () => {
        setCloseAlert(false);
    }

    return (
        <React.Fragment>
            <section className="py-5 mx-auto position-absolute bg-white border rounded-5 web-cta-home">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    {!successful ?
                    <Row className="justify-content-center align-items-center gy-4">
                        <Col lg={12}>
                            <div className='text-center'>
                                <p className="text-primary mb-4 fs-13">Never miss an update</p>
                                <h2 className="text-dark mb-0 fw-bold" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Join Our Ever Growing Community</h2>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                                className="needs-validation" action="#"> 
                                <div className="mt-3 hstack p-2 justify-content-between border border-1 rounded-5 cta-form">
                                    {/* <input type="email" placeholder="example@email.com" className="border-0 fs-15 px-3 w-100"  style={{ color: '#141413', backgroundColor: 'transparent' }} /> */}
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        className="border-0 fs-15 px-3 w-100 text-center cta-email"  
                                        type="email"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.email || ""}
                                        style={{ color: '#141413', backgroundColor: 'transparent', boxShadow: 'none' }}
                                        invalid={
                                            validation.touched.email && validation.errors.email ? true : false
                                        }
                                    />        
                                    {/* <input type="button" className="btn btn-primary border border-primary rounded-5 py-2 fs-16" value="Subscribe" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}/> */}
                                    <button className="btn btn-primary border border-primary rounded-5 py-2 fs-15" type="submit" disabled={loading? true : false} style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                        {/* loading && <span className="fs-10" role="status" aria-hidden="true"></span> */}
                                        {loading ? 'Loading...' : 'Subscribe'}
                                    </button>
                                </div>
                                    {/* Begin Constant Contact Inline Form Code */}
                                    {/* <div id="success_message_1" className="ctct-form-success" style={{display: "none"}} data-qe-id="success-message">
                                    <h2 className="ctct-form-header">Thanks for signing up!</h2>
                                    <p className="ctct-form-text">You can unsubscribe at any time using the Unsubscribe link at the bottom of every email.</p>
                                    </div> */}
                                    {/*  <div id="subscribe_form" className="ctct-inline-form" data-form-id="83ba2d4a-9722-455c-9450-f7b20595b33c"></div>  */} 
                                    {/* End Constant Contact Inline Form Code */}
                                
                            </Form>
                            <div className='w-100 px-2 mt-3'>
                                {errorMsg && errorMsg !== '' ? (<Alert color="danger" isOpen={closeAlert} toggle={onDismiss}> {errorMsg} </Alert>) : null}
                            </div>
                        </Col>
                       
                    </Row>
                    :
                    <Row className="justify-content-center align-items-center gy-4">
                        <Col lg={8}>
                            <div className='mx-auto d-flex flex-column align-items-center'>
                                <img src={img_successful_subscription} />
                                <h4 className="text-dark mb-0 fw-bold" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Thank you for subscribing with us</h4>
                                <p className="text-dark mt-3 fs-13">We'll continue to keep in touch with the latest future financial services news, updates and our upcoming events ad summits.</p>
                            </div>
                        </Col>
                    </Row>
                    }
                </Container>
            </section>
            <section className="p-3 position-relative mobile-cta-home">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <Container>
                    <Row className="justify-content-center align-items-center border rounded-4 mobile-inner-cta">
                        <Col lg={12}>
                            <div className='text-center'>
                                <p className="text-primary mb-2 fs-13">Never miss an update</p>
                                <h2 className="text-dark mb-0 fw-bold" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Join Our Ever Growing Community</h2>
                            </div>
                            <div className="mt-4 hstack p-2 justify-content-between border border-1 rounded-5">
                                <input type="email" placeholder="example@email.com" className="border-0 fs-12 px-3 w-100 cta-email-mobile"  style={{ color: '#141413', backgroundColor: 'transparent' }} />
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <input type="button" className="btn btn-primary border border-primary rounded-5 py-2 fs-12" value="Subscribe" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}/>
                            </div>

                            {/* <div className="ctct-inline-form" data-form-id="83ba2d4a-9722-455c-9450-f7b20595b33c"></div> */}
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default CTA;