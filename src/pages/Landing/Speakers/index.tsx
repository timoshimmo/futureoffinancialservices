import React from 'react';
import { Helmet } from 'react-helmet';
//import Navbar from '../Common/Navbar';
import NavbarSecondary from '../Common/NavbarSecondary';
import Banner from "./Banner";
import SpeakersList from './SpeakersList';
//import Footer from '../Common/footer';
import FooterSummit from '../Common/footerSummit';

const index = () => {
    document.title = "Future of Financial Services | Speakers";

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
                <Helmet>
                    <meta name="description" content="Future of Financial Services | About" />
                </Helmet>
                <NavbarSecondary />
                <Banner />
                <SpeakersList />
                <FooterSummit />
            </div>
        </React.Fragment>
    );
};

export default index;