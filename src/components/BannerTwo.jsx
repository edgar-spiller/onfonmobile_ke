import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const BannerTwo = () => {
    const settings = {
        dots: true,

        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


    };
    return (
        <div className="banner-two">
            <div className="container container-lg">
                <div className="banner-two-wrapper d-flex align-items-start">
                    <div className="w-265 d-lg-block d-none flex-shrink-0">
                        <div className="responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0">
                            <button
                                type="button"
                                className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                            >
                                <i className="ph ph-x" />{" "}
                            </button>
                            <div className="logo px-16 d-lg-none d-block">
                                <Link to="/" className="link">
                                    <img src="assets/images/logo/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            <ul className="responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto ">
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Vivo</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            VIVO
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Vivo 35E</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo 25E</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo Y22</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo Y17s</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo Y16</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo Y15s</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Vivo Y02</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Samsung</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">SAMSUNG</h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Samsung A23</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Samsung A15</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Samsung A14</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Samsung A13</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Samsung A04e</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Samsung A03</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Oppo</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            OPPO
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Oppo A77</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Oppo A58</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Oppo A57</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Oppo A17k</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Oppo A17</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Oppo A16</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Realme</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            REALME
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Realme C55</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Realme C33</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Realme C10</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Realme C61</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Realme C51s</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Realme 11x</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Nokia</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            NOKIA
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Nokia G60 5g</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia G21</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia G11 plus</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia C31</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia C22</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia C21 plus</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia C21</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Nokia C12</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Infinix</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            INFINIX
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/infinix">Infinix Hot 40 PRO</Link>
                                            </li>
                                            <li>
                                                <Link to="/infinix">Infinix Hot 40 I</Link>
                                            </li>                                            
                                            <li>
                                                <Link to="/infinix">Infinix Hot 30 Pro</Link>
                                            </li>
                                            <li>
                                                <Link to="/infinix">Infinix Hot 30 I</Link>
                                            </li>
                                            <li>
                                                <Link to="/infinix">Infinix Note 40 Pro</Link>
                                            </li>
                                            <li>
                                                <Link to="/infinix">Infinix Smart 8</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Tecno</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            TECNO
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Tecno Camon 19</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Tecno Spark 9T</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Tecno Spark 9</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Tecno Spark 8C</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Tecno Spark 7</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Tecno Pop 7</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Itel</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            {" "}
                                            ITEL
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Itel A60</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Itel S23</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Itel P17 Pro 4G</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Itel P17 Pro 3G</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Itel P17</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Neon</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            NEON
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Faiba Neon Ultra</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Neon Ultra Safaricom</Link>
                                            </li>
                                            <li>
                                                <Link to="/shop">Neon Ultra Dealer</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-submenus-submenu">
                                    <Link
                                        to="#"
                                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                    >
                                        <span>Truphone</span>
                                        <span className="icon text-md d-flex ms-auto">
                                            <i className="ph ph-caret-right" />
                                        </span>
                                    </Link>
                                    <div className="submenus-submenu py-16">
                                        <h6 className="text-lg px-16 submenus-submenu__title">
                                            TRUPHONE
                                        </h6>
                                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                            <li>
                                                <Link to="/shop">Truphone</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner-item-two-wrapper rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mb-0">
                        <img
                            src="assets/images/slider-hero/Hero page-06.webp"
                            alt=""
                            className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
                        />
                        <div className="banner-item-two__slider">
                            <Slider {...settings}>
                                <div className="banner-item-two">
                                    <div className="banner-item-two__content">
                                        <span className="text-white mb-8 h6">Dial *797#</span>
                                        <h2 className="banner-item-two__title bounce text-white">
                                            To Get Registered Lipa Mos Mos
                                        </h2>
                                        <Link
                                            to="/shop"
                                            className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                                        >
                                            Lipa Mos Mos
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-device-mobile" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item-two__thumb position-absolute bottom-0">
                                        <img src="assets/images/slider-hero/Phone-03.webp" alt="" />
                                    </div>
                                </div>
                                <div className="banner-item-two">
                                    <div className="banner-item-two__content">
                                        <span className="text-white mb-8 h6">Get Your Next Phone</span>
                                        <h2 className="banner-item-two__title bounce text-white">
                                            Financed By Onfon Mobile
                                        </h2>
                                        <Link
                                            to="/shop"
                                            className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                                        >
                                            Lipa Mos Mos
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-device-mobile" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item-two__thumb position-absolute bottom-0">
                                        <img src="assets/images/oppo/Oppo A17k.png" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerTwo