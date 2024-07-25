import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";

//AuthenticationInner pages
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";



//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register1 from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";


// FFS Pages
import OnePage from "../pages/Landing/OnePage";
import NFTLanding from "../pages/Landing/NFTLanding";
import JobLanding from '../pages/Landing/Job';

import About from '../pages/Landing/About';
import Register from '../pages/Landing/Register';
import Exhibitor from '../pages/Landing/Exhibitor';
import Partner from '../pages/Landing/Partner';
import Sponsors from '../pages/Landing/Sponsors';
import ContactUs from '../pages/Landing/ContactUs';


const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },



  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
];

const publicRoutes : any= [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register1", component: <Register1 /> },

  //AuthenticationInner pages

  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },

  { path: "/auth-offline", component: <Offlinepage /> },

  { path: "/landing", component: <OnePage /> },
  { path: "/home", component: <NFTLanding /> },
  { path: "/job-landing", component: <JobLanding /> },

  {path: "/about", component: <About />},
  {path: "/register", component: <Register />},
  {path: "/exhibitors", component: <Exhibitor />},
  {path: "/partners", component: <Partner />},
  {path: "/sponsors", component: <Sponsors />},
  {path: "/contact-us", component: <ContactUs />},
  
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "*", component: <Navigate to="/home" /> },

];

export { authProtectedRoutes, publicRoutes };