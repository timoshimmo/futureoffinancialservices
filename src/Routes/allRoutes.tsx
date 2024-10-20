import React from "react";
import { Navigate } from "react-router-dom";


// FFS Pages
import Home from "../pages/Landing/Home";

import About from '../pages/Landing/About';
import Register from '../pages/Landing/Register';
import Exhibitor from '../pages/Landing/Exhibitor';
import Partner from '../pages/Landing/Partner';
import Sponsors from '../pages/Landing/Sponsors';
import ContactUs from '../pages/Landing/ContactUs';
import Speakers from '../pages/Landing/Speakers';
import Agenda from '../pages/Landing/Agenda';
import Insights from '../pages/Landing/Insights';
import PrivacyPolicy from '../pages/Landing/PrivacyPolicy';
import UpdateRegisterForm from "pages/Landing/UpdateRegister";

const publicRoutes : any= [
  //FFS Routes
  { path: "/", component: <Insights /> },
  { path: "/about", component: <About /> },
  { path: "/register", component: <Register /> },
  { path: "/exhibitors", component: <Exhibitor /> },
  { path: "/partners", component: <Partner /> },
  { path: "/sponsors", component: <Sponsors /> },
  { path: "/contact-us", component: <ContactUs /> },
  { path: "/speakers", component: <Speakers /> },
  { path: "/agenda", component: <Agenda /> },
  { path: "/insights", component: <Insights />},
  { path: "/privacy", component: <PrivacyPolicy />},
  {path: "/booking/:token", component: <UpdateRegisterForm />},
  
  
  /*
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  },
  */
  { path: "*", component: <Navigate to="/" /> },

];

export { publicRoutes };