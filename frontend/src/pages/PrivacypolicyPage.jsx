import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Privacypolicy from "../components/Privacypolicy";
import ScrollToTop from "react-scroll-to-top";
import NewsletterTwo from "../components/NewsletterTwo";

const PrivacypolicyPage = () => {
    return (
        <>
            {/* ColorInit */}
            <ColorInit color={true} />
            
            {/*ScrollToTop */}
            <ScrollToTop smooth color="#FA6400" />
            
            {/* Preloader */}
            <Preloader />

            {/* HeaderTwo */}
            <HeaderTwo category={true} />

            {/*Breadcrumb */}
            <Breadcrumb />

            {/* PrivacyPolicy */}
            <Privacypolicy />

            {/* Shipping */}
            <ShippingOne />

            {/*Newletter */}
            <NewsletterTwo />

            {/* FooterTwo */}
            <FooterTwo />

            {/* BottomFooter */}
            <BottomFooter />

        </>
    );
};

export default PrivacypolicyPage;