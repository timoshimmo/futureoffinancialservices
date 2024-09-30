import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Common/Navbar';
import Banner from "./Banner";
import PartnerForm from './PartnerForm';
import Footer from '../Common/footer';

const index = () => {
    document.title = "Future of Financial Services | Partners";

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
                    <meta name="description" content="Future of Financial Services | Partners" />
                </Helmet>
                <Navbar />
                <Banner />
                <PartnerForm />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;