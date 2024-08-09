import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import success_check from "../../../assets/images/gif/success_check.gif";

const RegisterForm = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        //const keyscript = document.createElement('script');
      
        script.id="signupScript";
        script.src = "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
        script.innerHTML = "var _ctct_m =9a8473feb12e9b78ee72998b18eba1ee";
        script.async = true;

       // const inlineScript = document.createTextNode("var _ctct_m =9a8473feb12e9b78ee72998b18eba1ee");
        //script.append(inlineScript);

        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []); 

      /*

<script> var _ctct_m = "9a8473feb12e9b78ee72998b18eba1ee"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
      */

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            company_name: '',
            title_name: '',
            phone_no: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your First Name"),
            last_name: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string().email('Invalid email').required("Please Enter Your Email"),
            company_name: Yup.string().required("Please Company Name is Required"),
            title_name: Yup.string().required("Please Enter Your Position in the Company"),
            phone_no: Yup.string().required("Please Your Phone Number is Required"),
        }),
        onSubmit: (values) => {
            /*dispatch(registerUser(values));
            setLoader(true)
            */

            handleClick();
        }
    });

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setSuccessful(true);
            setLoading(false);
        }, 5000);
    };

    return (
        <React.Fragment>
            <section className="section form-container">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="ctct-inline-form" data-form-id="83b2b6c1-a7fd-4782-8c73-050f87716b39"></div>
                        </Col>
                    </Row>

                    {/*  
                             <Row className="justify-content-center">
                        <Col lg={7} sm={12} className='px-3'>
                            {!successful ?
                                <Card className="border border-white bg-white rounded-4 shadow-none">
                                    <CardBody className="p-4">
                                    <Form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                        className="needs-validation" action="#">
                                        <Row>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">First Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="first_name"
                                                        name="first_name"
                                                        type="text" 
                                                        placeholder="Enter First Name" 
                                                        className="border-0 fs-14 px-2 form-inputs-custom"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.first_name || ""}
                                                        invalid={
                                                            validation.touched.first_name && validation.errors.first_name ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Last Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="last_name"
                                                        name="last_name"
                                                        type="text" 
                                                        placeholder="Enter Last Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.last_name || ""}
                                                        invalid={
                                                            validation.touched.last_name && validation.errors.last_name ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Company Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="company_name"
                                                        name="company_name"
                                                        type="text" 
                                                        placeholder="Enter Company Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.company_name || ""}
                                                        invalid={
                                                            validation.touched.company_name && validation.errors.company_name ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                    
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Position/Title Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="title_name"
                                                        name="title_name"
                                                        type="text" 
                                                        placeholder="Enter Position/Title Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.title_name || ""}
                                                        invalid={
                                                            validation.touched.title_name && validation.errors.title_name ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                    
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Email Address</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter email address"
                                                        className="border-0 fs-14 px-2 py-2"  
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Phone Number</Label>
                                                <PhoneInput
                                                    country={'gb'}
                                                    value={value}
                                                    placeholder="Enter Phone Number" 
                                                    onChange={phone => setValue(phone)}
                                                    containerClass="w-100 vstack p-2 rounded-2 form-box"
                                                    inputClass='fs-14'
                                                    inputStyle={{ color: '#303030', borderColor: 'transparent', boxShadow: 'none', fontFamily: 'Montserrat, IBM Plex Sans, sans-serif' }} 
                                                    dropdownStyle={{ borderColor: 'transparent', boxShadow: 'none' }}
                                                    buttonStyle={{ borderColor: 'transparent', backgroundColor: 'transparent', boxShadow: 'none' }}
                                                />
                        
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-5'>
                                                <button className=" w-100 btn btn-primary rounded-5 py-2 fs-16" type="submit" disabled={loading? true : false}>
                                                    {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> }
                                                    {loading ? 'Loading...' : 'Send'}
                                                </button>

                                            </Col>
                                        </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                :
                                <Card className="border border-white bg-white rounded-4 shadow-none">
                                    <CardBody className="px-2 pb-5 pt-0">
                                        <Row className='justify-content-center'>
                                            <Col lg={12}>
                                                <div className='d-flex justify-content-end pb-4'>
                                                    <Button onClick={()=>setSuccessful(false)} className='bg-transparent border-0 p-0 text-muted'><i className="mdi mdi-close display-6"></i></Button>
                                                </div>
                                            </Col>
                                            <Col lg={9} sm={12} className='px-2 mt-3'>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={success_check}/>
                                                </div>
                                                <h2 className='text-primary my-3 text-center fw-bold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Your Registration Was Successful</h2>
                                                <p className='text-dark fs-14 text-center fw-medium px-4 mb-4' style={{ color: '#303030' }}>Your request will be processed and we will revert shortly"</p>
                                                <div className="hstack justify-content-center">
                                                <Link to="/" className="fs-14 fw-medium link-style"><i className="mdi mdi-arrow-left"></i><u>Back to Home</u></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            }
                        </Col>
                    </Row>

                        */}
                </Container>
            </section>
        </React.Fragment>
    );
}

export default RegisterForm;