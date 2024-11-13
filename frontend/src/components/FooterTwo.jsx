import React from 'react'
import { Link } from 'react-router-dom'

const FooterTwo = () => {
    return (
        <footer className="footer py-80">
            <div className="container container-lg">
                <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item max-w-275">
                        <div className="footer-item__logo">
                            <Link to="/">
                                {" "}
                                <img src="assets/images/logo/Onfon Mobile Tertiary Logo.png" alt="" />
                            </Link>
                        </div>
                        <p className="mb-24">
                        Onfon Mobile was established in 2022 as a subsidiary of Onfon Group. It was created to spearhead the supply of affordable smartphones across Africa.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <Link
                                to="/tel:+00123456789"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                (+254) 709 491 700
                            </Link>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link
                                to="/mailto:customercare@onfonmobile.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                customercare@onfonmobile.com
                            </Link>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900 ">
                                Red Commercial Complex, 1st Floor, Mombasa Road. P.O Box 69825 - 00400. Nairobi, Kenya.
                            </span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">About us</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/about" className="text-gray-600 hover-text-main-600">
                                    Company Profile
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/Dealer-shop" className="text-gray-600 hover-text-main-600">
                                    All Retail Store
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Affiliate
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/contact" className="text-gray-600 hover-text-main-600">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Feedback
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="https://onfongroup.com/" className="text-gray-600 hover-text-main-600">
                                    Onfon Group
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/privacy-policy" className="text-gray-600 hover-text-main-600">
                                    Rules &amp; Policy
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/account" className="text-gray-600 hover-text-main-600">
                                    My Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Gift Card
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Report Abuse
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Submit and Dispute
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Policies &amp; Rules
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Online Shopping
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/terms&condition" className="text-gray-600 hover-text-main-600">
                                    Terms & Condition 
                                </Link>
                            </li>
                        </ul>
                    </div> */}                   
                    <div className="footer-item">
                        <h6 className="footer-item__title">Smartphones</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/samsung" className="text-gray-600 hover-text-main-600">
                                    Samsung
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/vivo" className="text-gray-600 hover-text-main-600">
                                    Vivo
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/realme" className="text-gray-600 hover-text-main-600">
                                    Realme
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/infinix" className="text-gray-600 hover-text-main-600">
                                    Infinix
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/realme" className="text-gray-600 hover-text-main-600">
                                    Realme
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/neon" className="text-gray-600 hover-text-main-600">
                                    Neon
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/truphone" className="text-gray-600 hover-text-main-600">
                                    Truphone
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/itel" className="text-gray-600 hover-text-main-600">
                                    Itel
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Onfon Branches</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/account" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile Lesotho
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile SouthAfrica
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile Mozambique
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile Ethiopia
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile Tanzania
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Onfon Mobile Nigeria
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="">Shop on The Go</h6>
                        <p className="mb-16">Onfon Mobile App is available. Get it now</p>
                        <div className="flex-align gap-8 my-32">
                            <Link to="https://play.google.com/store/apps/details?id=com.asses.onfon&pcampaignid=web_share" className="">
                                <img src="assets/images/thumbs/store-img2.png" alt="" />
                            </Link>
                        </div>
                        <ul className="flex-align gap-16">
                            <li>
                                <Link
                                    to="/https://www.facebook.com"
                                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-facebook-logo" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/https://www.twitter.com"
                                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-twitter-logo" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/https://www.linkedin.com"
                                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-instagram-logo" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/https://www.pinterest.com"
                                    className="w-44 h-44 flex-center bg-main-two-50 text-main-two-600 text-xl rounded-8 hover-bg-main-two-600 hover-text-white"
                                >
                                    <i className="ph-fill ph-linkedin-logo" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterTwo