import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import VivoDetails from "../vivoDetails";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";


const VivoDetailsPage = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Vivo Details"} />

      {/* VivoDetails */}
      <VivotDetails />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />

    </>
  );
};

export default VivoDetailsPage;
