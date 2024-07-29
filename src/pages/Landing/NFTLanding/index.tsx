import React from 'react';
import Navbar from "../Common/Navbar";
import Home from "./Home";
import About from "./About";
import WhatIs from './WhatIs';
import Connect from './Connect';
import Products from "./Products";
import Features from './Features';
import Speakers from './Speakers';
import Numbers from './Numbers';
import Partners from './Partners';
import Sponsor from './Sponsor';
import Latest from './Latest';
import Faq from './Faq';
import Trending from "./Trending ";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from './CTA';
import Footer from "../Common/footer";

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
                <Navbar />
                <Home />
                <Connect />
                <Speakers />
                <WhatIs />
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