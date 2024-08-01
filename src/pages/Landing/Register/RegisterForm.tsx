import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterForm = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);

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
            email: Yup.string().required("Please Enter Your Email"),
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
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="phone_no"
                                                        name="phone_no"
                                                        type="text" 
                                                        placeholder="Enter Phone Number" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.phone_no || ""}
                                                        invalid={
                                                            validation.touched.phone_no && validation.errors.phone_no ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-5'>
                                                <button className=" w-100 btn btn-primary rounded-5 py-2 fs-16" type="submit" disabled={loading? true : false}>
                                                    {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> }
                                                    {loading ? 'Loading...' : 'Send'}
                                                </button>
                                                {/* <input type="button" className="w-100 btn btn-primary border border-primary rounded-5 py-2 fs-16" value="Send" /> */}
                                            </Col>
                                        </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                :
                                <Card className="border border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                    <Row className='justify-content-center'>
                                        <Col lg={9} sm={12} className='px-2 mt-4'>
                                            <h2 className='text-primary mb-3 text-center fw-bold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Your Entry Was Successful</h2>
                                            <p className='text-dark fs-14 text-center fw-medium px-4 mb-0' style={{ color: '#303030' }}>We have have received your submission, your request would be reviewed and we would revert accordingly where necessary."</p>
                                            <div className="hstack justify-content-center">
                                                <Link to="/home" className="text-muted fs-12">Back to Home</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default RegisterForm;