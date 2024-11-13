import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink } from 'react-router-dom';
const HeaderTwo = ({ category }) => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };
    }, []);

    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("KSH");
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    // category control support
    const [activeCategory, setActiveCategory] = useState(false)
    const handleCategoryToggle = () => {
        setActiveCategory(!activeCategory);
    };
    const [activeIndexCat, setActiveIndexCat] = useState(null);
    const handleCatClick = (index) => {
        setActiveIndexCat(activeIndexCat === index ? null : index);
    };

    return (
        <>
            <div className="overlay" />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
            {/* ==================== Search Box Start Here ==================== */}

            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product or brand"
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">
                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/Onfon Mobile Tertiary Logo.png" alt="Logo" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                            <li className="nav-menu__item">
                                <Link to="/" className="nav-menu__link">
                                    Home
                                </Link>
                                </li>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/about" className="nav-menu__link">
                                    About
                                </Link>
                            </li>
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            ><span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                            New
                            </span>
                            <Link to="#" className="nav-menu__link">
                                Products
                            </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 1 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/vivo"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Vivo                                           
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/samsung"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Samsung                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/oppo"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Oppo                                           
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/realme"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Realme                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/nokia"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Nokia                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/infinix"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Infinix                                           
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/tecno"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Tecno                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/itel"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Itel                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/neon"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Neon                                          
                                        </Link>
                                    </li>                                    
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/truphone"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Truphone                                          
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => handleMenuClick(3)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                    }`}
                            >
                                <Link to="/blog" className="nav-menu__link">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/contact" className="nav-menu__link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}
            {/* ======================= Middle Top Start ========================= */}
            <div className="header-top bg-main-two-600 flex-between">
                <div className="container container-lg">
                    <div className="flex-between flex-wrap gap-8">
                        <ul className="flex-align flex-wrap d-none d-md-flex">
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Become A Seller
                                </Link>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link to="#" className="text-white text-sm py-8">
                                    Branch Companies
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            Lesotho
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            South Africa
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            Ethiopia
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            Tanzania
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            Mozambique
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            Nigeria
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="faq's"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    FAQs'
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="#"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                        <ul className="header-top__right flex-align flex-wrap">
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link to="#" className="text-white text-sm py-8">
                                    Help Center
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-headset" />
                                            </span>
                                            Call Center
                                        </Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="#"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-chat-circle-dots" />
                                            </span>
                                            Live Chat
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                {/* Display the selected language here */}
                                <Link to="#" className="selected-text text-white text-sm py-8">
                                    {selectedLanguage}
                                </Link>
                                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("English")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag1.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            English
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                            onClick={() => handleLanguageChange("Swahili")}
                                        >
                                            <img
                                                src="assets/images/thumbs/flag5.png"
                                                alt=""
                                                className="w-16 h-12 rounded-4 border border-gray-100"
                                            />
                                            Swahili
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="border-right-item">
                                {/* Display the selected currency */}
                                <Link to="#" className="selected-text text-white text-sm py-8">
                                    {selectedCurrency}
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="/account"
                                    className="text-white text-sm py-8 flex-align gap-6"
                                >
                                    <span className="icon text-md d-flex">
                                        {" "}
                                        <i className="ph ph-user-circle" />{" "}
                                    </span>
                                    <span className="hover-text-decoration-underline">
                                        My Account
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ======================= Middle Top End ========================= */}
            {/* ======================= Middle Header Two Start ========================= */}
            <header className="header-middle style-two bg-color-neutral">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="assets/images/logo/Onfon Mobile Tertiary Logo.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* form Category Start */}
                        <div className="flex-align gap-16">
                            <div className="select-dropdown-for-home-two d-lg-none d-block">
                                {/* Dropdown Select Start */}
                                <ul className="header-top__right style-two flex-align flex-wrap">
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        {/* Display the selected language */}
                                        <Link to="#" className="selected-text text-heading text-sm py-8">
                                            {selectedLanguage}
                                        </Link>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleLanguageChange("English")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt="English"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    English
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleLanguageChange("Swahili")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt="Swahili"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Swahili
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                        {/* Display the selected currency */}
                                        <Link to="#" className="selected-text text-heading text-sm py-8">
                                            {selectedCurrency}
                                        </Link>
                                        <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("USD")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag1.png"
                                                        alt="USD"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    USD
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("Yen")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag2.png"
                                                        alt="Yen"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Yen
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("Franc")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag3.png"
                                                        alt="Franc"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    Franc
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("EURO")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag4.png"
                                                        alt="EURO"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    EURO
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("BDT")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag6.png"
                                                        alt="BDT"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    BDT
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    onClick={() => handleCurrencyChange("WON")}
                                                >
                                                    <img
                                                        src="assets/images/thumbs/flag5.png"
                                                        alt="WON"
                                                        className="w-16 h-12 rounded-4 border border-gray-100"
                                                    />
                                                    WON
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* Dropdown Select End */}
                            </div>
                            <form
                                action="#"
                                className="border-bottom border-gray-200 flex-align flex-wrap form-location-wrapper"
                            >
                                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                                    <select defaultValue={1}
                                        className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                                        name="state"
                                    >
                                        <option value={1} >
                                            All Devices
                                        </option>
                                        <option value={1}>Samsung</option>
                                        <option value={1}>Infinix</option>
                                        <option value={1}>Vivo</option>
                                        <option value={1}>Tecno</option>
                                        <option value={1}>Realme</option>
                                        <option value={1}>Neon</option>
                                        <option value={1}>Itel</option>
                                        <option value={1}>Nokia</option>
                                        <option value={1}>Truphone</option>
                                        <option value={1}>Oppo</option>
                                    </select>
                                    <div className="search-form__wrapper position-relative">
                                        <input
                                            type="text"
                                            className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                                            placeholder="Search for a product or brand"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* form Category start */}
                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="header-two-activities flex-align flex-wrap gap-32">
                                <button
                                    type="button"
                                    className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                                >
                                    <span className="text-2xl text-gray-800 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>                                
                                <Link
                                    to="/Dealer-shops"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-gray-800 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph-fill ph-storefront" />
                                    </span>
                                    <span className="text-md text-gray-700 item-hover__text d-none d-lg-flex">
                                        Dealers
                                    </span>
                                </Link>
                                <Link
                                    to="/cart"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-gray-800 d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            1
                                        </span>
                                    </span>
                                    <span className="text-md text-gray-700 item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
                </div>
            </header>
            {/* ======================= Middle Header Two End ========================= */}
            {/* ==================== Header Two Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}
                            <div className={`category-two ${category === false ? "d-block" : "d-none"} `}>
                                <button onClick={handleCategoryToggle}
                                    type="button"
                                    className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                                >
                                    <span className="icon text-2xl d-xs-flex d-none">
                                        <i className="ph ph-dots-nine" />
                                    </span>
                                    <span className="d-sm-flex d-none">All</span> Devices
                                    <span className="arrow-icon text-xl d-flex">
                                        <i className="ph ph-caret-down" />
                                    </span>
                                </button>
                                <div className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${activeCategory && "active"}`}>
                                    <button onClick={() => { handleCategoryToggle(); setActiveIndexCat(null) }}
                                        type="button"
                                        className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                    >
                                        <i className="ph ph-x" />{" "}
                                    </button>
                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src="assets/images/logo/Onfon Mobile Tertiary Logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                                        <li onClick={() => handleCatClick(0)} className={`has-submenus-submenu ${activeIndexCat === 0 ? "active" : ""}`}>
                                            <Link onClick={() => setActiveIndexCat(null)}
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Vivo</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 0 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Vivo
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
                                        <li onClick={() => handleCatClick(1)} className={`has-submenus-submenu ${activeIndexCat === 1 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Samsung</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 1 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Samsung
                                                </h6>
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
                                        <li onClick={() => handleCatClick(2)} className={`has-submenus-submenu ${activeIndexCat === 2 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Oppo</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 2 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Oppo
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
                                        <li onClick={() => handleCatClick(3)} className={`has-submenus-submenu ${activeIndexCat === 3 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Realme</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 3 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Realme
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
                                        <li onClick={() => handleCatClick(4)} className={`has-submenus-submenu ${activeIndexCat === 4 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Nokia</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 4 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Nokia
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
                                        <li onClick={() => handleCatClick(5)} className={`has-submenus-submenu ${activeIndexCat === 5 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Infinix</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 5 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Infinix
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
                                        <li onClick={() => handleCatClick(6)} className={`has-submenus-submenu ${activeIndexCat === 6 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Tecno</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 6 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Tecno
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
                                        <li onClick={() => handleCatClick(7)} className={`has-submenus-submenu ${activeIndexCat === 7 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Itel</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 7 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    {" "}
                                                    Itel
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
                                        <li onClick={() => handleCatClick(8)} className={`has-submenus-submenu ${activeIndexCat === 8 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Neon</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 8 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Neon
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
                                        <li onClick={() => handleCatClick(9)} className={`has-submenus-submenu ${activeIndexCat === 9 ? "active" : ""}`}>
                                            <Link
                                                to="#"
                                                className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                            >
                                                <span>Truphone</span>
                                                <span className="icon text-md d-flex ms-auto">
                                                    <i className="ph ph-caret-right" />
                                                </span>
                                            </Link>
                                            <div className={`submenus-submenu py-16 ${activeIndexCat === 9 ? "open" : ""}`}>
                                                <h6 className="text-lg px-16 submenus-submenu__title">
                                                    Truphone
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
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <li className="nav-menu__item">
                                            <NavLink to="/" className={(navData) =>
                                                navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                            }>
                                                Home
                                            </NavLink>
                                        </li>                                        
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <li className="nav-menu__item">
                                            <NavLink to="/about" className={(navData) =>
                                                navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                            }>
                                                About
                                            </NavLink>
                                        </li>                                        
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                    <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                            New
                                        </span>
                                        <Link to="#" className="nav-menu__link">
                                            Products
                                        </Link>
                                        <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/vivo"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Vivo
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/samsung"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Samsung
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/realme"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Realme
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/nokia"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Nokia
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/infinix"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Infinix
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/tecno"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Tecno
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/itel"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Itel
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/neon"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Neon
                                                </NavLink>
                                            </li>
                                            <li className="common-dropdown__item nav-submenu__item">
                                                <NavLink
                                                    to="/truphone"
                                                    className={(navData) =>
                                                        navData.isActive ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage" : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                                    }
                                                >
                                                    Truphone
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>                                    
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <li className="nav-menu__item">
                                            <NavLink to="/blog" className={(navData) =>
                                                navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                            }>
                                                Blog
                                            </NavLink>
                                        </li>                                        
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">
                        <Link
                                to="tel:254709491700"
                                className="bg-main-600 text-white p-12 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                            >
                                <div className="d-flex text-32">
                                    <i className="ph ph-phone-call" />
                                </div>
                                +254- 709 491 700
                            </Link>
                            <div className="me-8 d-lg-none d-block">
                                <div className="header-two-activities flex-align flex-wrap gap-32">
                                    <button onClick={handleSearchToggle}
                                        type="button"
                                        className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                                    >
                                        <span className="text-2xl text-gray-800 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link
                                        to="/Dealer-shops"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph-fill ph-storefront" />
                                        </span>
                                        <span className="text-md text-gray-900 item-hover__text d-none d-lg-flex">
                                            Dealers
                                        </span>
                                    </Link>
                                    <Link
                                        to="/cart"
                                        className="flex-align flex-column gap-8 item-hover-two"
                                    >
                                        <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            {/*<span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>*/}
                                        </span>
                                        <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <button onClick={handleMenuToggle}
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>
                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderTwo