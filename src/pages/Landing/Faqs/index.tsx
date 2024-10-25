import React from 'react';
import { Helmet } from 'react-helmet';
//import Navbar from './Navbar';
import Navbar from '../Common/Navbar';
import Faq from './Faq';
import CTA from '../Common/CTA';
import Footer from '../Common/footer';
import Banner from './Banner';

const index = () => {
    document.title = "Future of Financial Services | About";

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <React.Fragment>
            <div className="layout-wrapper landing body-bg-dark">
                <Helmet>
                    <meta name="description" content="Future of Financial Services | FAQs" />
                </Helmet>
                <Navbar />
                <Banner />
                <Faq />
                <CTA />
                <Footer />
                <button onClick={() => toTop()} className="btn btn-primary btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default index;