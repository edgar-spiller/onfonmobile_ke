import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import NewsletterTwo from "../components/NewsletterTwo";
import Register from "../components/Register";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const RegisterPage = () => {
    const { state } = useLocation();

    return (
        <>
            <Preloader />
            <ColorInit />
            <HeaderTwo />
            <Breadcrumb />
            <Register />
            <ShippingOne />
            <NewsletterTwo />
            <ScrollToTop />
            <FooterTwo />
            <BottomFooter />
        </>
    );
};

export default RegisterPage;