import React from "react";
import Preloader from "../../helper/Preloader";
import HeaderTwo from "../../components/HeaderTwo";
import Breadcrumb from "../../components/Breadcrumb";
import OppoSection from "../oppo/oppoSection";
import ShippingTwo from "../../components/ShippingTwo";
import FooterTwo from "../../components/FooterTwo";
import ColorInit from "../../helper/ColorInit";
import NewsletterTwo from "../../components/NewsletterTwo";
import ScrollToTop from "react-scroll-to-top";

const Oppo = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Oppo"} />

      {/* OppoSection */}
      <OppoSection />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/*Newsletter*/}
      <NewsletterTwo />

      {/* FooterTwo */}
      <FooterTwo />

    </>
  );
};

export default Oppo;
