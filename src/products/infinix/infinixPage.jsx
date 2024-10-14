import React from "react";
import Preloader from "../../helper/Preloader";
import HeaderTwo from "../../components/HeaderTwo";
import Breadcrumb from "../../components/Breadcrumb";
import InfinixSection from "../infinix/infinixSection";
import ShippingTwo from "../../components/ShippingTwo";
import FooterTwo from "../../components/FooterTwo";
import ColorInit from "../../helper/ColorInit";
import NewsletterTwo from "../../components/NewsletterTwo";
import ScrollToTop from "react-scroll-to-top";

const Infinix = () => {

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
      <Breadcrumb title={"Infinix"} />

      {/* InfinixSection */}
      <InfinixSection />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/*Newsletter*/}
      <NewsletterTwo />

      {/* FooterTwo */}
      <FooterTwo />

    </>
  );
};

export default Infinix;
