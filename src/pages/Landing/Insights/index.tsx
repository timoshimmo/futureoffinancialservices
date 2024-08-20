import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/footer';
import Banner from './Banner';
import Main from './Main';
import CTA from '../Common/CTA';

const index = () => {
    document.title = "Future of Financial Services Summit | Insight";

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

    return (
        <React.Fragment>
            <div className="layout-wrapper landing body-bg-dark">
                <Navbar />
                <Banner />
                <Main />
                <CTA />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;