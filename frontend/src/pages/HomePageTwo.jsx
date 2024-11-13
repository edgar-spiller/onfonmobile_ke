import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import FeaturedOne from "../components/FeaturedOne";
import DealsOne from "../components/DealsOne";
import ShippingTwo from "../components/ShippingTwo";
import NewsletterTwo from "../components/NewsletterTwo";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";

const HomePageTwo = () => {


  return (

    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={false} />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PromotionalTwo */}
      <PromotionalTwo />

      {/* DealsOne */}
      <DealsOne />

      {/* FeaturedOne*/}
      <FeaturedOne /><br></br>

      {/* TopSellingOne
      <TopSellingOne />*/}

      {/* TrendingOne 
      <TrendingOne />*/}

      {/* DiscountOne 
      <DiscountOne />*/}

      {/* BigDealOne
      <BigDealOne />*/}

      {/* TopSellingTwo 
      <TopSellingTwo />*/}

      {/* PopularProductsOne 
      <PopularProductsOne />*/}

      {/* TopVendorsTwo
      <TopVendorsTwo />*/}

      {/* DaySaleOne 
      <DaySaleOne />*}

      {/* BrandTwo 
      <BrandTwo />*/}

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />

    </>
  );
};

export default HomePageTwo;
