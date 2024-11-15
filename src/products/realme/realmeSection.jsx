import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RealmeSection = () => {

    let [grid, setGrid] = useState(false)

    let [active, setActive] = useState(false)
    let sidebarController = () => {
        setActive(!active)
    }

    return (
        <section className="shop py-80">
            <div className={`side-overlay ${active && "show"}`}></div>
            <div className="container container-lg">
                <div className="row">
                    {/* Sidebar Start */}
                    <div className="col-lg-3">
                        <div className={`shop-sidebar ${active && "active"}`}>
                            <button onClick={sidebarController}
                                type="button"
                                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
                            >
                                <i className="ph ph-x" />
                            </button>
                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Smartphone Category
                                </h6>
                                <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    <li className="mb-24">
                                        <Link
                                            to="/vivo"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                           Vivo (7)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/samsung"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Samsung (8)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/oppo"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Oppo (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/realme"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Realme (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/nokia"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Nokia (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/infinix"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Infinix (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/tecno"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Tecno (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/itel"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Itel (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/neon"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Neon (12)
                                        </Link>
                                    </li>
                                    <li className="mb-24">
                                        <Link
                                            to="/truphone"
                                            className="text-gray-900 hover-text-main-600"
                                        >
                                            Truphone (12)
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Rating
                                </h6>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating5"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating5"
                                        />
                                    </div>
                                    <div
                                        className="progress w-100 bg-gray-100 rounded-pill h-8"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={70}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                    <div className="flex-align gap-4">
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">124</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating4"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating4"
                                        />
                                    </div>
                                    <div
                                        className="progress w-100 bg-gray-100 rounded-pill h-8"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "50%" }}
                                        />
                                    </div>
                                    <div className="flex-align gap-4">
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">52</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating3"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating3"
                                        />
                                    </div>
                                    <div
                                        className="progress w-100 bg-gray-100 rounded-pill h-8"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={35}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                    <div className="flex-align gap-4">
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">12</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating2"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating2"
                                        />
                                    </div>
                                    <div
                                        className="progress w-100 bg-gray-100 rounded-pill h-8"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={20}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "20%" }}
                                        />
                                    </div>
                                    <div className="flex-align gap-4">
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">5</span>
                                </div>
                                <div className="flex-align gap-8 position-relative mb-0">
                                    <label
                                        className="position-absolute w-100 h-100 cursor-pointer"
                                        htmlFor="rating1"
                                    >
                                        {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="rating1"
                                        />
                                    </div>
                                    <div
                                        className="progress w-100 bg-gray-100 rounded-pill h-8"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={5}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "5%" }}
                                        />
                                    </div>
                                    <div className="flex-align gap-4">
                                        <span className="text-xs fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-400 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">2</span>
                                </div>
                            </div>
                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Brand
                                </h6>
                                <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="brand1"
                                            />
                                            <label className="form-check-label" htmlFor="brand1">
                                                Samsung
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="brand2"
                                            />
                                            <label className="form-check-label" htmlFor="brand2">
                                                Tecno
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="brand3"
                                            />
                                            <label className="form-check-label" htmlFor="brand3">
                                                Infinix
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="brand4"
                                            />
                                            <label className="form-check-label" htmlFor="brand4">
                                                Itel
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="brand5"
                                            />
                                            <label className="form-check-label" htmlFor="brand5">
                                                Truphone
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-24">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="DELL"
                                            />
                                            <label className="form-check-label" htmlFor="DELL">
                                                Neon
                                            </label>
                                        </div>
                                    </li>
                                    <li className="mb-0">
                                        <div className="form-check common-check common-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="color"
                                                id="Redmi"
                                            />
                                            <label className="form-check-label" htmlFor="Redmi">
                                                Redmi
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar End */}
                    {/* Content Start */}
                    <div className="col-lg-9">
                        {/* Top Start */}
                        <div className="flex-between gap-16 flex-wrap mb-40 ">
                            <span className="text-gray-900">Showing 1-20 of 85 result</span>
                            <div className="position-relative flex-align gap-16 flex-wrap">
                                <div className="list-grid-btns flex-align gap-16">
                                    <button onClick={() => setGrid(true)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${grid === true && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph-bold ph-list-dashes" />
                                    </button>
                                    <button onClick={() => setGrid(false)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${grid === false && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph ph-squares-four" />
                                    </button>
                                </div>
                                <div className="position-relative text-gray-500 flex-align gap-4 text-14">
                                    <label htmlFor="sorting" className="text-inherit flex-shrink-0">
                                        Sort by:{" "}
                                    </label>
                                    <select defaultValue={1}
                                        className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                                        id="sorting"
                                    >
                                        <option value={1} >
                                            Popular
                                        </option>
                                        <option value={1}>Latest</option>
                                        <option value={1}>Trending</option>
                                        <option value={1}>Matches</option>
                                    </select>
                                </div>
                                <button onClick={sidebarController}
                                    type="button"
                                    className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                                >
                                    <i className="ph-bold ph-funnel" />
                                </button>
                            </div>
                        </div>
                        {/* Top End */}
                        <div className={`list-grid-wrapper ${grid && "list-view"}`}>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme C61.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/realme-details"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme C61
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme C55.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme C55
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme C51s.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme C51s
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme C33.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme C33
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme C10.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme C10
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/realme/Realme 11x.webp"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Realme 11x
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                    <span className="text-gray-900 fw-normal">64GB Rom | 32GB RAM</span>
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "85%" }}
                                            />
                                        </div>                    
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-900 fw-normal">Lipa Daily Ksh 85</span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Deposit Ksh 5,000 
                                    </Link>
                                </div>
                            </div>                                                     
                        </div>
                        {/* Pagination Start */}
                        <ul className="pagination flex-center flex-wrap gap-16">
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-left" />
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    01
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    02
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    03
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                        {/* Pagination End */}
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>

    )
}

export default RealmeSection