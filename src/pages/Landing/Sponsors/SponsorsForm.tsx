import React, { useState }  from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const SponsorsForm = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [closeAlert, setCloseAlert] = useState(false);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            company_name: '',
            title: '',
            phone: '',
            company_website: '',
            additional_info: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please Enter Your First Name"),
            lastname: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string().required("Please Enter Your Email"),
            company_name: Yup.string().required("Please Company Name is Required"),
            title: Yup.string().required("Please Enter Your Position in the Company"),
            phone: Yup.string().required("Please Your Phone Number is Required"),
            company_website: Yup.string(),
            additional_info: Yup.string(),
        }),
        onSubmit: (values, { resetForm }) => {
            /*dispatch(registerUser(values));
            setLoader(true)
            */

            handleClick(values);
        }
    });

    const handleClick = (obj: any) => {
       /* setLoading(true);
        setTimeout(() => {
            setSuccessful(true);
            setLoading(false);
        }, 6000);

        */

        axios.post('https://api.futureoffinancialservices.org/api/sponsor-register', obj)
        .then(response => {
            console.log(response);
            setSuccessful(true);
            setLoading(false);
            validation.resetForm();
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data.message);
                setErrorMsg(error.response.data.message);
                console.log("server error");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
            setLoading(false);
      })
    };

    const onDismiss = () => {
        setCloseAlert(false);

    }


    return (
        <React.Fragment>
            <section className="section form-container-sponsor">
                <Container>
                    <Row className="justify-content-center">
                    <Col lg={7} sm={12} className='px-3'>
                            {!successful ?
                                <Card className="border mb-5 border-white bg-white rounded-4 shadow-none">
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
                                                            id="firstname"
                                                            name="firstname"
                                                            type="text" 
                                                            placeholder="Enter First Name" 
                                                            className="border-0 fs-14 px-2 form-inputs-custom"  
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.firstname || ""}
                                                            invalid={
                                                                validation.touched.firstname && validation.errors.firstname ? true : false
                                                            }
                                                            style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                        />  
                                                    </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Last Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="lastname"
                                                        name="lastname"
                                                        type="text" 
                                                        placeholder="Enter Last Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.lastname || ""}
                                                        invalid={
                                                            validation.touched.lastname && validation.errors.lastname ? true : false
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
                                                        id="title"
                                                        name="title"
                                                        type="text" 
                                                        placeholder="Enter Position/Title Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.title || ""}
                                                        invalid={
                                                            validation.touched.title && validation.errors.title ? true : false
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
                                                <PhoneInput
                                                    country={'gb'}
                                                    placeholder="Enter Phone Number" 
                                                    onChange={value => validation.setFieldValue("phone", value)}
                                                    value={validation.values.phone || ""}
                                                    containerClass="w-100 vstack p-2 rounded-2 form-box"
                                                    inputClass='fs-14'
                                                    inputStyle={{ width: '100%', color: '#303030', borderColor: 'transparent', boxShadow: 'none', fontFamily: 'Montserrat, IBM Plex Sans, sans-serif' }} 
                                                    dropdownStyle={{ borderColor: 'transparent', boxShadow: 'none' }}
                                                    buttonStyle={{ borderColor: 'transparent', backgroundColor: 'transparent', boxShadow: 'none' }}
                                                />
                                                   {/*

                                                   <Input 
                                                        id="phone"
                                                        name="phone"
                                                        type="text" 
                                                        placeholder="Enter Phone Number" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.phone || ""}
                                                        invalid={
                                                            validation.touched.phone && validation.errors.phone ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                
                                                    */} 
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Company Website</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="company_website"
                                                        name="company_website"
                                                        type="text" 
                                                        placeholder="Enter Company's Website URL" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.company_website || ""}
                                                        invalid={
                                                            validation.touched.company_website && validation.errors.company_website ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={12} className='px-2 mt-4'>
                                                <Label className="fs-13 form-label mb-0">Additional Information</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="additional_info"
                                                        name="additional_info"
                                                        type="textarea"
                                                        rows="4" 
                                                        placeholder="Enter Your Message here" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.additional_info || ""}
                                                        invalid={
                                                            validation.touched.additional_info && validation.errors.additional_info ? true : false
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
                                            <Col lg={12} sm={12} className='px-2 mt-3'>
                                                {errorMsg && errorMsg !== '' ? (<Alert color="danger" isOpen={closeAlert} toggle={onDismiss}> {errorMsg} </Alert>) : null}
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
                                                <p className='text-dark fs-14 text-center fw-medium px-4 mb-4' style={{ color: '#303030' }}>We have received your request to be a sponsor, we would get back to you via your registered email."</p>
                                                <div className="hstack justify-content-center">
                                                    <Link to="/" className="text-muted fs-12">Back to Home</Link>
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

export default SponsorsForm;