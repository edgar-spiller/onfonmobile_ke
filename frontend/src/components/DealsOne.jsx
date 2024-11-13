import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';


const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button" onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-right" />
        </button>
    );
});

const SamplePrevArrow = memo(function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-left" />
        </button>
    );
});

const DealsOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 5,

                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,

                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };
    return (
        <section className="deals-weeek pt-80">
            <div className="container container-lg">
                <div className="border border-gray-100 p-24 rounded-16">
                    <div className="section-heading mb-24">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">Deal of The Month</h5>
                            <div className="flex-align mr-point gap-16">
                                <Link
                                    to="/shop"
                                    className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                                >
                                    View All Deals
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="deal-week-box rounded-16 overflow-hidden flex-between position-relative z-1 mb-24">
                        <img
                            src="assets/images/bg/week-deal-bg.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-block-start-0 w-100 h-100 z-n1 object-fit-cover"
                        />
                        <div className="d-lg-block d-none ps-32 flex-shrink-0">
                            <img src="assets/images/samsung/samsung.webp" alt="" />
                        </div>
                        <div className="deal-week-box__content px-sm-4 d-block w-100 text-center">
                            <h6 className="mb-20">At an Affordable Price Get to Deposit Today </h6>
                            <div className="countdown mt-20" id="countdown4">
                                <ul className="countdown-list style-four flex-center flex-wrap">
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="days" />
                                        {timeLeft.days} <br /> Days
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="hours" />
                                        {timeLeft.hours} <br /> Hour
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="minutes" />
                                        {timeLeft.minutes} <br /> Min
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="seconds" />
                                        {timeLeft.seconds} <br /> Sec
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-lg-block d-none flex-shrink-0 pe-xl-5">
                            <div className="me-xxl-5">
                                <img src="assets/images/tecno/pop 7.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="deals-week-slider arrow-style-two">
                        <Slider {...settings}>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Sale 50%
                                        </span>
                                        <img
                                            src="assets/images/samsung/samsung A23.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Samsung A23
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-100 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Best sale
                                        </span>
                                        <img
                                            src="assets/images/samsung/samsung A15.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Samsung A15
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-tertiary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Best Seller
                                        </span>
                                        <img
                                            src="assets/images/oppo/Oppo A16.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Oppo A16
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Sold
                                        </span>
                                        <img
                                            src="assets/images/realme/Realme C10.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Realme C10
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-tertiary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            New
                                        </span>
                                        <img
                                            src="assets/images/vivo/vivo Y22.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Vivo Y22
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Best sale
                                        </span>
                                        <img
                                            src="assets/images/oppo/Oppo A58.webp"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Oppo A58
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <Link
                                        to="/product-details-two"
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                            Sold
                                        </span>
                                        <img
                                            src="assets/images/infinix/infinix hot12i.png"
                                            alt=""
                                            className="w-auto max-w-unset"
                                        />
                                    </Link>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.7</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                            </span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to="/product-details-two"
                                                className="link text-line-2"
                                                tabIndex={0}
                                            >
                                                Infinix Hot12 i
                                            </Link>
                                        </h6>
                                        
                                        <div className="mt-8">
                                            <div
                                                className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={35}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{ width: "83%" }}
                                                />
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">
                                                Rate: 83%
                                            </span>
                                        </div>
                                        <div className="product-card__price my-20">
                                        <span className="text-heading text-md fw-semibold ">Deposit: Ksh 5,000</span>
                                        </div>
                                        <Link
                                            to="/cart"
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            tabIndex={0}
                                        >
                                            Lipa Mos Mos 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DealsOne