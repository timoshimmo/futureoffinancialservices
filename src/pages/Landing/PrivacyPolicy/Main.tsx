import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Main = () => {

    return (
        <React.Fragment>
            <section className="mt-4 px-5">
                <Container>
                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>Introduction</h2>
                        <p>This is the Privacy Policy for Future of Financial Services. In this policy document, when we use each of these terms: ("we," "us," "our") we refer to our website (within the FUTURE OF FINANCIAL SERVICES Group) which is collecting your personal data, or which is operating the website which you are accessing or using.</p>
                        <p>Future of Financial Services respects your privacy and is committed to protecting your personal data. This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or otherwise interact with us.</p>
                        <p>This Policy applies to all visitors, customers, and users of the Future of Financial Services website (https://futureoffinancialservices.org), and any associated services. By using our services or submitting your personal data to us, you agree to the collection, use, and disclosure of your information in accordance with this Policy. If you do not agree with the terms of this Policy, please do not access or use our website or services.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>1. Data Collection</h2>
                        <p>We collect personal data in a variety of ways. This may include information you provide directly to us and information we collect automatically when you use our services.</p>
                        
                        <h4 className='my-4'>1.1 Data You Provide Directly:</h4>
                        <p>We may collect the following personal data when you:</p>
                        <ul className='list-disc px-3'>
                            <li><span>Create an Account or Register: Name, email address, phone number, company, designation, mailing address, and any other relevant contact information.</span></li>
                            <li><span>Communicate with Us: Information you provide when contacting our support team, including details of your inquiries and your interaction history.</span></li>
                        </ul>

                        <h4 className='my-4'>1.2 Data Collected Automatically:</h4>
                        <p>We may also collect certain data automatically when you visit our website or use our services:</p>
                        <ul className='list-disc px-3'>
                            <li><span>Cookies and Similar Technologies: These help us understand your browsing patterns, preferences, and interactions with our site. We use cookies to improve the user experience, personalize content, and analyze site traffic.</span></li>
                            <li><span>Log Files: Your IP address, browser type, device information, referral pages, and visit times are automatically logged.</span></li>
                            <li><span>Web Beacons and Tracking Pixels: These technologies enable us to measure the effectiveness of our online content and marketing efforts.</span></li>
                        </ul>
                        <p>For more information on the use of cookies, please refer to the "Cookies" section of this Policy.</p>
                    </div>


                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>2. How We Use Your Personal Data</h2>
                        <p>Your data may be used for the following purposes:</p>
                        
                        <h4 className='my-4'>2.1 Service Delivery:</h4>
                        <p>We may collect the following personal data when you:</p>
                        <ul className='list-disc px-3'>
                            <li><span>To personalize your experience on our website and tailor our offerings to your preferences.</span></li>
                            <li><span>To communicate with you regarding updates, order status, or any issues related to your account or services.</span></li>
                        </ul>

                        <h4 className='my-4'>2.2 Business Operations:</h4>
                        <ul className='list-disc px-3'>
                            <li><span>To improve our website, services, and customer experience through analytics and performance tracking.</span></li>
                            <li><span>To develop and launch new products, services, or promotions.</span></li>
                            <li><span>To provide customer support and resolve disputes.</span></li>
                        </ul>
                       
                        <h4 className='my-4'>2.3 Marketing and Communications:</h4>
                        <p>With your consent, we may send you newsletters, promotional offers, and information about our services or those of our partners. We may analyze your behaviour to better understand your preferences and offer personalized marketing content. You may opt out of receiving marketing communications at any time by following the unsubscribe link provided in our emails or by contacting us directly.</p>

                        <h4 className='my-4'>2.4 Educational Purpose:</h4>
                        <p>Activities on the website may be recorded for educational purposes only. Therefore, it may be available to the organization, and participants after the webinar and disclosed to third parties. However, we do not assume any responsibility or liabilities with third parties related to usage.</p>

                        <h4 className='my-4'>2.5 Legal and Compliance:</h4>
                        <ul className='list-disc px-3'>
                            <li><span>To comply with legal obligations, including responding to requests from regulatory authorities, law enforcement, or court orders.</span></li>
                            <li><span>To enforce our terms and conditions, protect our rights, and defend against potential legal claims.</span></li>
                        </ul>
                    </div>


                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>3. Sharing and Disclosure of Personal Data</h2>
                        <p>We do not sell, trade, or rent your personal data to third parties. However, we may share your information in the following scenarios:</p>
                        
                        <h4 className='my-4'>3.1 With Service Providers:</h4>
                        <p>We may engage trusted third-party companies to perform services on our behalf, such as payment processing, web hosting, data analytics, and customer support. These service providers have access to your personal data only to perform specific tasks and are contractually obligated to protect your information.</p>

                        <h4 className='my-4'>3.2 Within Our Corporate Group:</h4>
                        <p>Your personal data may be shared with Future of Financial Services affiliates and subsidiaries to provide you with consistent service and for internal reporting and administration.</p>

                        <h4 className='my-4'>3.3 For Legal Purposes:</h4>
                        <p>We may disclose your personal data if required by law, in response to a legal process, or to protect our rights, privacy, safety, or property.</p>

                        <h4 className='my-4'>3.4 Business Transfers:</h4>
                        <p>In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred to the acquiring entity as part of the transaction.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>4. International Data Transfers</h2>
                        <p>We may transfer your personal data to recipients located in countries outside of the United Kingdom. These countries may have different data protection laws, but we ensure that appropriate safeguards are in place to protect your personal data during such transfers. We will ensure that the transfer of personal data is compliant with the relevant laws and that adequate safeguards are implemented to protect your data, such as using contractual clauses or transferring data to jurisdictions with equivalent data protection standards.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>5. Data Security</h2>
                        <p>We take data security seriously and implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure server hosting, firewalls, and regular security assessments.</p>
                        <p>While we strive to protect your personal data, please be aware that no system is completely secure. We cannot guarantee the security of your information transmitted to our website or services. Any transmission is at your own risk.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>6. Your Rights</h2>
                        <p>As a data subject, you have the following rights under applicable data protection laws:</p>

                        <h4 className='my-4'>6.1 Service Delivery:</h4>
                        <p>You can request access to the personal data we hold about you and obtain information about how it is processed.</p>

                        <h4 className='my-4'>6.2 Right to Rectification:</h4>
                        <p>You can request corrections or updates to your personal data if it is inaccurate or incomplete.</p>

                        <h4 className='my-4'>6.3 Right to Erasure:</h4>
                        <p>You may request that we delete your personal data in certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected or processed.</p>

                        <h4 className='my-4'>6.4 Right to Restrict Processing:</h4>
                        <p>You can request that we restrict the processing of your personal data under certain conditions.</p>

                        <h4 className='my-4'>6.5 Right to Data Portability:</h4>
                        <p>You can request a copy of your personal data in a structured, machine-readable format, and request that we transfer your data to another data controller where technically feasible.</p>

                        <h4 className='my-4'>6.6 Right to Object:</h4>
                        <p>You have the right to object to the processing of your personal data for direct marketing purposes or where we rely on legitimate interests as the legal basis for processing.</p>
                        <p>If you wish to exercise any of your rights, please contact us at <a href="mailto:contact@futureoffinancialservices.org" target="_blank" className="text-white fw-normal fs-14"><u>contact@futureoffinancialservices.org</u></a>. We will respond to your request within the legally required timeframe.</p>

                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>7. Cookies</h2>
                        <p>We use cookies and similar tracking technologies on our website for various purposes:</p>

                        <h4 className='my-4'>7.1 Types of Cookies:</h4>
                        <ul className='list-disc px-3'>
                            <li><span>Strictly Necessary Cookies: Essential for the operation of the website and services.</span></li>
                            <li><span>Performance Cookies: Collect information about how visitors use our website, allowing us to improve functionality.</span></li>
                            <li><span>Functionality Cookies: Remember choices you make to personalize your experience.</span></li>
                            <li><span>Targeting Cookies: Track your online activity to provide personalized advertisements.</span></li>
                        </ul>

                        <h4 className='my-4'>7.2 Managing Cookies:</h4>
                        <p>You can control the use of cookies by adjusting your browser settings. However, please note that disabling cookies may affect your ability to access certain features of our website.</p>

                        <p className='mt-4'>For more information about our use of cookies and how to manage them, please refer to our Cookie Policy.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>8. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the nature of the data and the applicable legal requirements. Once the retention period has expired, we will securely delete or anonymize your personal data.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>9. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal obligations, or for other operational reasons. We will notify you of any significant changes by posting the updated Policy on our website and indicating the date of the last revision. Your continued use of our website and services after the updated Privacy Policy becomes effective constitutes your acceptance of the revised terms.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>10. Contact Information</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us via any of our communication channels.</p>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Main;