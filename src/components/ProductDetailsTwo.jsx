import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';

const ProductDetailsTwo = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const productImages = [
        "assets/images/samsung/samsung A14.webp",
        "assets/images/thumbs/product-details-two-thumb2.png",
        "assets/images/thumbs/product-details-two-thumb3.png",
        "assets/images/thumbs/product-details-two-thumb1.png",
        "assets/images/thumbs/product-details-two-thumb2.png",
    ];


    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    const [mainImage, setMainImage] = useState(productImages[0]);

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
    };
    return (
        <section className="product-details py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xl-9">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className="product-details__left">
                                    <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                        <div className="">
                                            <div className="product-details__thumb flex-center h-100">
                                                <img src={mainImage} alt="Main Product" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24">
                                        <div className="product-details__images-slider">
                                            <Slider {...settingsThumbs}>
                                                {productImages.map((image, index) => (
                                                    <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(image)}>
                                                        <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    <h5 className="mb-12">
                                        Samsung A14
                                    </h5>                                    
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <p className="text-gray-700">
                                        Geared up and ready to roll: Get the responsive performance
                                        you're looking for with an Intel processor and 64 GB eMMC
                                        storage. Stay productive with compatible apps like Microsoft
                                        Office, Google Workspace, and more. The Chrome OS gives you a
                                        fast, simple, and secure online experience with built-in virus
                                        protection.
                                    </p>
                                    <div className="my-32 flex-align gap-16 flex-wrap">                        
                                        <div className="flex-align gap-8">
                                            <span className="text-gray-800">Deposit</span>
                                            <h6 className="mb-0">
                                                Ksh 7,500
                                            </h6>
                                        </div>
                                        <div className="flex-align gap-8">
                                            <div className="flex-align gap-8 text-main-two-600">
                                                Daily Payment
                                            </div>
                                            <h6 className="mb-0">Ksh 115</h6>
                                        </div>
                                    </div>
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <div className="">                                        <h6 className="mb-24">Product Description & Specs</h6>
                                        <p>
                                            Wherever celebrations and good times happen, the LAY'S brand
                                            will be there just as it has been for more than 75 years. With
                                            flavors almost as rich as our history, we have a chip or crisp
                                            flavor guaranteed to bring a smile on your face.{" "}
                                        </p>
                                        <ul className="list-inside mt-32 ms-16">
                                            <li className="text-gray-400 mb-4">
                                                6.6' Screen
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                5000mah battery
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                8mp + 8mp dual camera
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                128gb ram | 4gb rom
                                            </li>
                                        </ul> 
                                    </div>                                   
                                    <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                    <Link
                                        to="/https://www.whatsapp.com"
                                        className="btn btn-black flex-center gap-8 rounded-8 py-16"
                                    >
                                        <i className="ph ph-whatsapp-logo text-lg" />
                                        Request More Information
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
                            <div className="mb-32">
                                <label
                                    htmlFor="delivery"
                                    className="h6 activePage mb-8 text-heading fw-semibold d-block"
                                >
                                    Local Store
                                </label>
                                <div className="flex-align border border-gray-100 rounded-4 px-16">
                                    <span className="text-xl d-flex text-main-600">
                                        <i className="ph ph-map-pin" />
                                    </span>
                                    <select defaultValue={1}
                                        className="common-input border-0 px-8 rounded-4"
                                        id="delivery"
                                    >
                                        <option value={1}>Onfon Store</option>
                                        <option value={1}>Onfon Retailer Store</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-32">
                                <label
                                    htmlFor="stock"
                                    className="text-lg mb-8 text-heading fw-semibold d-block"
                                >
                                    Total Stock: 21
                                </label>
                                <span className="text-xl d-flex">
                                    <i className="ph ph-location" />
                                </span>
                                <div className="d-flex rounded-4 overflow-hidden">
                                    <button onClick={decrementQuantity}
                                        type="button"
                                        className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                                    >
                                        <i className="ph ph-minus" />
                                    </button>
                                    <input
                                        type="number"
                                        className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                                        id="stock"
                                        value={
                                            quantity
                                        } readOnly

                                    />
                                    <button onClick={incrementQuantity}
                                        type="button"
                                        className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                                    >
                                        <i className="ph ph-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="mb-32">
                                <div className="flex-between flex-wrap gap-8 border-bottom border-gray-100 pb-16 mb-16">
                                    <span className="text-gray-500">Deposit</span>
                                    <h6 className="text-lg mb-0">Ksh 7,500</h6>
                                </div>
                                <div className="flex-between flex-wrap gap-8">
                                    <span className="text-gray-500">Daily Payment</span>
                                    <h6 className="text-lg mb-0">Ksh 115</h6>
                                </div>
                            </div>
                            <Link
                                to="#"
                                className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-48"
                            >
                                Lipa Mos Mos
                            </Link>
                            <Link
                                to="#"
                                className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
                            >
                                Buy Now
                            </Link>
                            <div className="mt-32">
                                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-14">
                                    <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                                        <i className="ph-fill ph-truck" />
                                    </span>
                                    <span className="text-sm text-neutral-600">
                                        Ship from <span className="fw-semibold">Onfon Mobile Store Ke</span>{" "}
                                    </span>
                                </div>
                                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-0">
                                    <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                                        <i className="ph-fill ph-storefront" />
                                    </span>
                                    <span className="text-sm text-neutral-600">
                                        Sold by:{" "}
                                        <span className="fw-semibold">MR Distribution LLC</span>{" "}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-32">
                                <div className="px-32 py-16 rounded-8 border border-gray-100 flex-between gap-8">
                                    <Link to="#" className="d-flex text-main-600 text-28">
                                        <i className="ph-fill ph-chats-teardrop" />
                                    </Link>
                                    <span className="h-26 border border-gray-100" />
                                    <div className="dropdown on-hover-item">
                                        <button className="d-flex text-main-600 text-28" type="button">
                                            <i className="ph-fill ph-share-network" />
                                        </button>
                                        <div className="on-hover-dropdown common-dropdown border-0 inset-inline-start-auto inset-inline-end-0">
                                            <ul className="flex-align gap-16">
                                                <li>
                                                    <Link
                                                        to="/https://www.facebook.com"
                                                        className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                    >
                                                        <i className="ph-fill ph-facebook-logo" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/https://www.twitter.com"
                                                        className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                    >
                                                        <i className="ph-fill ph-twitter-logo" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/https://www.linkedin.com"
                                                        className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                    >
                                                        <i className="ph-fill ph-instagram-logo" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/https://www.pinterest.com"
                                                        className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                    >
                                                        <i className="ph-fill ph-linkedin-logo" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetailsTwo