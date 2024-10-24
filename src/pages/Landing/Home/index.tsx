import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../Common/Navbar";
import NavbarSummit from '../Common/NavbarSummit';
import Banner from "./Banner";
import Connect from './Connect';
import Numbers from './Numbers';
import Partners from './Partners';
import Sponsor from './Sponsor';
import Latest from './Latest';
import Faq from './Faq';
import CTA from '../Common/CTA';
import Footer from "../Common/footer";

const index = () => {
    document.title = "Future of Financial Services | Home";

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

    /*
 <About />
<Products />
<Features />
<Trending />
<DiscoverItems />
<TopCreator />

    */

    return (
        <React.Fragment>
            <div className="layout-wrapper landing body-bg-dark">
                <Helmet>
                    <meta name="description" content="Future of Financial Services | Home" />
                </Helmet>
                <NavbarSummit />
                {/* <Navbar /> */}
                <Banner />
                <Connect />
                <Numbers />
                <Partners />
                <Sponsor />
                <Latest />
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