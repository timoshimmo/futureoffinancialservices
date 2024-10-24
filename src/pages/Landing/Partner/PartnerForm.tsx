import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form, Alert, Button } from 'reactstrap';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import successful_form_submission from "../../../assets/images/gif/successful_form_submission.gif";

const PartnerForm = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [closeAlert, setCloseAlert] = useState(false);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            company_name: '',
            title: '',
            phonenumber: '',
            website_url: '',
            partnership_benefits: '',
            additional_information: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your First Name"),
            last_name: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string().required("Please Enter Your Email"),
            company_name: Yup.string().required("Please Company Name is Required"),
            title: Yup.string().required("Please Enter Your Position in the Company"),
            phonenumber: Yup.string().required("Please Your Phone Number is Required"),
            website_url: Yup.string().required("Please Company Website is Required"),
            partnership_benefits: Yup.string().required("Please enter your Proposed Benefits"),
            additional_information: Yup.string(),
        }),
        onSubmit: (values) => {
            /*dispatch(registerUser(values));
            setLoader(true)
            */
            
            handleClick(values);
          //  resetForm();
        }
    });

    const handleClick = (obj: any) => {

        setLoading(true);
        
        axios.post('https://dev-api.futureoffinancialservices.org/api/v1/partner', obj)
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
                setCloseAlert(true);
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
            <section className="section form-container">
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
                                                    <PhoneInput
                                                        country={'gb'}
                                                        placeholder="Enter Phone Number" 
                                                        onChange={value => validation.setFieldValue("phonenumber", value)}
                                                        value={validation.values.phonenumber || ""}
                                                        containerClass="w-100 vstack p-2 rounded-2 form-box"
                                                        inputClass='fs-14'
                                                        inputStyle={{ width: '100%', color: '#303030', borderColor: 'transparent', boxShadow: 'none', fontFamily: 'Montserrat, IBM Plex Sans, sans-serif' }} 
                                                        dropdownStyle={{ borderColor: 'transparent', boxShadow: 'none' }}
                                                        buttonStyle={{ borderColor: 'transparent', backgroundColor: 'transparent', boxShadow: 'none' }}
                                                    />
                                                        {/*

                                                        <div className="w-100 vstack p-2 rounded-2 form-box">
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
                                                            </div>
                                                        */}
                                                    
                                                </Col>
                                                <Col lg={12} sm={12} className='px-2 mt-4'>
                                                    <Label className="fs-13 form-label mb-0">Company Website</Label>
                                                    <div className="w-100 vstack p-2 rounded-2 form-box">
                                                        <Input 
                                                            id="website_url"
                                                            name="website_url"
                                                            type="text" 
                                                            placeholder="Enter Company's Website URL" 
                                                            className="border-0 fs-14 px-2"  
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.website_url || ""}
                                                            invalid={
                                                                validation.touched.website_url && validation.errors.website_url ? true : false
                                                            }
                                                            style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={12} sm={12} className='px-2 mt-4'>
                                                    <Label className="fs-13 form-label mb-0">Proposed Partnership Benefits</Label>
                                                    <div className="w-100 vstack p-2 rounded-2 form-box">
                                                        <Input 
                                                            id="partnership_benefits"
                                                            name="partnership_benefits"
                                                            type="textarea"
                                                            rows="10" 
                                                            placeholder="Enter Proposed Partnership Benefits" 
                                                            className="border-0 fs-14 px-2"  
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.partnership_benefits || ""}
                                                            invalid={
                                                                validation.touched.partnership_benefits && validation.errors.partnership_benefits ? true : false
                                                            }
                                                            style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={12} sm={12} className='px-2 mt-4'>
                                                    <p className="fs-13 mb-0" style={{ color: '#b8bdc0' }}>Additional Information</p>
                                                    <div className="w-100 vstack p-2 rounded-2 form-box">
                                                        <Input 
                                                            id="additional_information"
                                                            name="additional_information"
                                                            type="textarea"
                                                            rows="4" 
                                                            placeholder="Enter Your Message here" 
                                                            className="border-0 fs-14 px-2"  
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.additional_information || ""}
                                                            invalid={
                                                                validation.touched.additional_information && validation.errors.additional_information ? true : false
                                                            }
                                                            style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={12} sm={12} className='px-2 mt-5'>
                                                    <button className=" w-100 btn btn-primary rounded-5 py-2 fs-16" type="submit">
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
                                            <Col lg={12}>
                                                <div className='d-flex justify-content-end pb-4'>
                                                    <Button onClick={()=>setSuccessful(false)} className='bg-transparent border-0 p-0 text-muted'><i className="mdi mdi-close display-6"></i></Button>
                                                </div>
                                            </Col>
                                            <Col lg={9} sm={12} className='px-2 mt-4'>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={successful_form_submission} height={100}/>
                                                </div>
                                                <h2 className='text-primary my-3 text-center fw-bold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Your Entry Was Successful</h2>
                                                <p className='text-dark fs-14 text-center fw-medium px-4 mb-4' style={{ color: '#303030' }}>We have received your request to form a partnership, your request would be reviewed and we would revert accordingly where necessary."</p>
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

export default PartnerForm;