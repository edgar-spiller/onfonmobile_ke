import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    return (
        <section className="blog-details py-80">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-8 pe-xl-4">
                        <div className="blog-item-wrapper">
                            <div className="blog-item">
                                <img
                                    src="assets/images/thumbs/blog-img1.png"
                                    alt=""
                                    className="cover-img rounded-16"
                                />
                                <div className="blog-item__content mt-24">
                                    <span className="bg-main-50 text-main-600 py-4 px-24 rounded-8 mb-16">
                                        Gadget
                                    </span>
                                    <h4 className="mb-24">
                                        Nice decoration make be distilled to a single house
                                    </h4>
                                    <p className="text-gray-700 mb-24">
                                        A great commerce experience cannot be distilled to a single
                                        number. It's not a Lighthouse score, or a set of Core Web Vitals
                                        figures, although both are important inputs. A great commerce
                                        experience is a trilemma that carefully balances competing needs
                                        of delivering great customer experience, dynamic storefront
                                        capabilities, and long-term business — conversion, retention,
                                        re-engagement — objectives. As developers, we rightfully obsess
                                        about the customer experience, relentlessly working to squeeze
                                        every millisecond out of the critical rendering path, optimize
                                        input latency, and eliminate jank. At the limit, statically
                                        generated, edge delivered, and HTML-first pages look like the
                                        optimal strategy. That is until you are confronted with the
                                        realization that the next step function in improving conversion
                                        rates and business.
                                    </p>
                                    <p className="text-gray-700 pb-24 mb-24 border-bottom border-gray-100">
                                        Re-engagement — objectives. As developers, we rightfully obsess
                                        about the customer experience, relentlessly working to squeeze
                                        every millisecond out of the critical rendering path, optimize
                                        input latency, and eliminate...
                                    </p>
                                    <div className="flex-align flex-wrap gap-24">
                                        <div className="flex-align flex-wrap gap-8">
                                            <span className="text-lg text-main-600">
                                                <i className="ph ph-calendar-dots" />
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                <Link
                                                    to="/blog-details"
                                                    className="text-gray-500 hover-text-main-600"
                                                >
                                                    July 12, 2025
                                                </Link>
                                            </span>
                                        </div>
                                        <div className="flex-align flex-wrap gap-8">
                                            <span className="text-lg text-main-600">
                                                <i className="ph ph-chats-circle" />
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                <Link
                                                    to="/blog-details"
                                                    className="text-gray-500 hover-text-main-600"
                                                >
                                                    0 Comments
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-48">
                            <div className="row gy-4">
                                <div className="col-sm-6 col-xs-6">
                                    <img
                                        src="assets/images/thumbs/blog-details-img1.png"
                                        alt=""
                                        className="rounded-16"
                                    />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <img
                                        src="assets/images/thumbs/blog-details-img2.png"
                                        alt=""
                                        className="rounded-16"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-48">
                            <p className="text-gray-700 mb-24">
                                A great commerce experience cannot be distilled to a single number.
                                It’s not a Lighthouse score, or a set of Core Web Vitals figures,
                                although both are important inputs. A great commerce experience is a
                                trilemma that carefully balances competing needs of delivering great
                                customer experience, dynamic storefront capabilities, and long-term
                                business.
                            </p>
                        </div>
                        <div className="mt-48">
                            <h6 className="mb-32">
                                The following are the four main market segments in which e-commerce
                                is present. These are the following:
                            </h6>
                            <div className="row gy-4">
                                <div className="col-sm-6">
                                    <ul>
                                        <li className="d-flex align-items-start gap-8 mb-20">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-8 mb-20">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-8 mb-0">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li className="d-flex align-items-start gap-8 mb-20">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-8 mb-20">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-start gap-8 mb-0">
                                            <span className="text-xl d-flex flex-shrink-0">
                                                <i className="ph ph-check" />
                                            </span>
                                            <span className="text-gray-700 flex-grow-1">
                                                A great commerce experience cannot be distilled to a single
                                                number.{" "}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-48">
                            <div className="rounded-16 bg-main-50 p-24">
                                <span className="w-48 h-48 bg-main-600 text-white flex-center rounded-circle mb-24 text-2xl">
                                    <i className="ph ph-quotes" />
                                </span>
                                <p className="text-gray-700 mb-24">
                                    A great commerce experience cannot be distilled to a single
                                    number. It’s not a Lighthouse score, or a set of Core Web Vitals
                                    figures, although both are important inputs. A great commerce
                                    experience is a trilemma that carefully balances competing needs
                                    of delivering great customer experience, dynamic storefront
                                    capabilities, and long-term business.
                                </p>
                                <div className="flex-align gap-8">
                                    <span className="text-15 fw-medium text-neutral-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-15 fw-medium text-neutral-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-15 fw-medium text-neutral-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-15 fw-medium text-neutral-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-15 fw-medium text-neutral-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-48">
                            <div className="flex-align gap-8">
                                <h6 className="mb-0">Tag:</h6>
                                <Link
                                    to="/shop"
                                    className="border border-gray-100 rounded-4 py-6 px-8 hover-bg-gray-100 text-gray-900"
                                >
                                    Mobile
                                </Link>
                                <Link
                                    to="/shop"
                                    className="border border-gray-100 rounded-4 py-6 px-8 hover-bg-gray-100 text-gray-900"
                                >
                                    Laptop
                                </Link>
                                <Link
                                    to="/shop"
                                    className="border border-gray-100 rounded-4 py-6 px-8 hover-bg-gray-100 text-gray-900"
                                >
                                    Gadget
                                </Link>
                            </div>
                        </div>
                        <div className="my-48">
                            <span className="border-bottom border-gray-100 d-block" />
                        </div>
                        <div className="my-48 flex-between flex-sm-nowrap flex-wrap gap-24">
                            <div className="">
                                <button
                                    type="button"
                                    className="mb-20 h6 text-gray-500 text-lg fw-normal hover-text-main-600"
                                >
                                    Previous Post
                                </button>
                                <h6 className="text-lg mb-0">
                                    <Link to="/blog-details" className="">
                                        A great commerce experience cannot be distilled to a single
                                        number.{" "}
                                    </Link>
                                </h6>
                            </div>
                            <div className="text-end">
                                <button
                                    type="button"
                                    className="mb-20 h6 text-gray-500 text-lg fw-normal hover-text-main-600"
                                >
                                    Next
                                </button>
                                <h6 className="text-lg mb-0">
                                    <Link to="/blog-details" className="">
                                        A great commerce experience cannot be distilled to a single
                                        number.{" "}
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        <div className="my-48">
                            <span className="border-bottom border-gray-100 d-block" />
                        </div>
                    </div>
                    <div className="col-lg-4 ps-xl-4">
                        {/* Search Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Search Here
                            </h6>
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control common-input bg-color-three"
                                        placeholder="Searching..."
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-main text-2xl h-56 w-56 flex-center text-2xl input-group-text"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Search End */}
                        {/* Recent Post Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Recent Posts
                            </h6>
                            <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-24 mb-16">
                                <Link
                                    to="/blog-details"
                                    className="w-100 h-100 rounded-4 overflow-hidden w-120 h-120 flex-shrink-0"
                                >
                                    <img
                                        src="assets/images/thumbs/recent-post1.png"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                            Once determined you need to come up with a name
                                        </Link>
                                    </h6>
                                    <div className="flex-align flex-wrap gap-8">
                                        <span className="text-lg text-main-600">
                                            <i className="ph ph-calendar-dots" />
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            <Link
                                                to="/blog-details"
                                                className="text-gray-500 hover-text-main-600"
                                            >
                                                July 12, 2025
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-24 mb-16">
                                <Link
                                    to="/blog-details"
                                    className="w-100 h-100 rounded-4 overflow-hidden w-120 h-120 flex-shrink-0"
                                >
                                    <img
                                        src="assets/images/thumbs/recent-post2.png"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                            Once determined you need to come up with a name
                                        </Link>
                                    </h6>
                                    <div className="flex-align flex-wrap gap-8">
                                        <span className="text-lg text-main-600">
                                            <i className="ph ph-calendar-dots" />
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            <Link
                                                to="/blog-details"
                                                className="text-gray-500 hover-text-main-600"
                                            >
                                                July 12, 2025
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-24 mb-16">
                                <Link
                                    to="/blog-details"
                                    className="w-100 h-100 rounded-4 overflow-hidden w-120 h-120 flex-shrink-0"
                                >
                                    <img
                                        src="assets/images/thumbs/recent-post3.png"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                            Once determined you need to come up with a name
                                        </Link>
                                    </h6>
                                    <div className="flex-align flex-wrap gap-8">
                                        <span className="text-lg text-main-600">
                                            <i className="ph ph-calendar-dots" />
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            <Link
                                                to="/blog-details"
                                                className="text-gray-500 hover-text-main-600"
                                            >
                                                July 12, 2025
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-24 mb-0">
                                <Link
                                    to="/blog-details"
                                    className="w-100 h-100 rounded-4 overflow-hidden w-120 h-120 flex-shrink-0"
                                >
                                    <img
                                        src="assets/images/thumbs/recent-post4.png"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                            Once determined you need to come up with a name
                                        </Link>
                                    </h6>
                                    <div className="flex-align flex-wrap gap-8">
                                        <span className="text-lg text-main-600">
                                            <i className="ph ph-calendar-dots" />
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            <Link
                                                to="/blog-details"
                                                className="text-gray-500 hover-text-main-600"
                                            >
                                                July 12, 2025
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Recent Post End */}
                        {/* Tags Start */}
                        <div className="blog-sidebar border border-gray-100 rounded-8 p-32 mb-40">
                            <h6 className="text-xl mb-32 pb-32 border-bottom border-gray-100">
                                Recent Posts
                            </h6>
                            <ul>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Gaming (12)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Smart Gadget (05)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Software (29)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Electronics (24)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Laptop (08)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-16">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Mobile &amp; Accessories (16)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-0">
                                    <Link
                                        to="/blog-details"
                                        className="flex-between gap-8 text-gray-700 border border-gray-100 rounded-4 p-4 ps-16 hover-border-main-600 hover-text-main-600"
                                    >
                                        <span>Apliance (24)</span>
                                        <span className="w-40 h-40 flex-center rounded-4 bg-main-50 text-main-600">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Tags End */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogDetails