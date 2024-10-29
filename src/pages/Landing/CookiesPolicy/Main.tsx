import React from 'react';
import { Container } from 'reactstrap';
import 'react-phone-input-2/lib/style.css';

const Main = () => {

    return (
        <React.Fragment>
            <section className="mt-4 px-5">
                <Container>
                    <div className='px-5 mb-5'>
                        <h5>Effective Date: June 2024</h5>
                    </div>
                    <div className='px-5 mb-5'>
                        <p>At the Future of Financial Services (FFS), we are committed to maintaining your privacy and ensuring transparency about how we use cookies and similar technologies on our website. This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.</p>
                    </div>
                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>1. What Are Cookies?</h2>
                        <p>Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit our website. They help us remember your preferences, improve your experience, and understand how our website is performing.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>2. How We Use Cookies</h2>
                        <p>We use cookies for the following purposes:</p>
                        <ul className='list-disc px-3'>
                            <li><span>To ensure the website functions properly.</span></li>
                            <li><span>To provide you with a better, more personalized experience.</span></li>
                            <li><span>To analyze website traffic and understand how visitors interact with the site.</span></li>
                            <li><span>To track the performance of marketing and advertising efforts.</span></li>
                        </ul>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>3. Types of Cookies We Use</h2>
                        <p>We use the following categories of cookies:</p>
                        <ul className='list-disc px-3'>
                            <li><span><strong>Strictly Necessary Cookies: </strong>These cookies are essential for the website to function properly. They cannot be disabled in our systems as they are necessary for services like logging in or filling out forms.</span></li>
                            <li><span><strong>Performance Cookies: </strong>These cookies collect information on how visitors use our website, such as which pages are visited most often. This helps us improve the website’s performance and usability.</span></li>
                            <li><span><strong>Functionality Cookies: </strong>These cookies enable the website to remember choices you make (e.g., your language or region) to provide a more personalized experience.</span></li>
                            <li><span><strong>Targeting or Advertising Cookies: </strong>These cookies are used to track your online activity and provide advertisements that are relevant to you. They also help us measure the effectiveness of our advertising campaigns.</span></li>
                        </ul>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>4. Third-Party Cookies</h2>
                        <p>We may allow third-party service providers (such as analytics tools and advertisers) to set cookies on your device when you visit the FFS website. These cookies are managed by third parties and are subject to their own privacy policies.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>5. Managing Your Cookie Preferences</h2>
                        <p>You can manage your cookie preferences at any time through your browser settings. You have the option to block or delete cookies, though doing so may impact your ability to use certain features on the website.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>6. Changes to This Cookie Policy</h2>
                        <p>We may update this Cookie Policy from time to time to reflect changes in the way we use cookies or legal requirements. Please revisit this page regularly to stay informed of any updates.</p>
                    </div>

                    <div className='px-5 mb-5'>
                        <h2 className='mb-4'>7. Contact Us</h2>
                        <p>If you have any questions or concerns about these Terms, please contact us at <br />bukky@futureoffinancialservices.org</p>
                    </div>

                </Container>
            </section>
        </React.Fragment>
    );
}

export default Main;