import React from 'react';
import Navbar from '../Common/Navbar';
import Banner from "./Banner";
import RegisterForm from './RegisterForm';
import Footer from '../Common/footer';

const index = () => {
    document.title = "Future of Financial Services | Register";

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
                <Banner />
                <RegisterForm />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default index;