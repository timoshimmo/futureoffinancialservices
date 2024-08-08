import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/footer';
import Banner from './Banner';

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

    return (
        <React.Fragment>
            <div className="layout-wrapper landing body-bg-dark">
                <Navbar />
                <Banner />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;