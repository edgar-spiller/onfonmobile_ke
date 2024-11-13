import React from "react";
import ColorInit from "../helper/ColorInit";
import Preloader from "../helper/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import ShippingOne from "../components/ShippingOne";
import Faq from "../components/Faq";
import NewsletterTwo from "../components/NewsletterTwo";
import ScrollToTop from "react-scroll-to-top";

const FaqPage = () => {
    return (
        <div>
            <ColorInit color={true} />
            <ScrollToTop smooth color="#FA6400" />
            <Preloader />
            <HeaderTwo category={true} />
            <Breadcrumb title={"FAQ"} />
            <Faq />
            <ShippingOne />
            <NewsletterTwo />
            <FooterTwo />
        </div>
    );
};

export default FaqPage;