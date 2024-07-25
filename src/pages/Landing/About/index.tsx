import React from 'react';
//import Navbar from './Navbar';
import Navbar from '../Common/Navbar';
import About from "./About";
import Partners from './Partners';
import Sponsor from './Sponsor';
import Faq from './Faq';
import CTA from './CTA';
import Footer from '../Common/footer';

const index = () => {
    document.title = " FFS | Future of Financial Services Summit";

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
                <Navbar />
                <About />
                <Sponsor />
                <Partners />
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