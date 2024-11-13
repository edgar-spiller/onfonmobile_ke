import React from 'react';
import { Link , useParams } from 'react-router-dom';
import blogData from '../data/blog.json';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.blog.find((blog) => blog.id === parseInt(id));

    return (
        <section className="blog-details py-80">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-8 pe-xl-4">
                        <div className="blog-item-wrapper">
                            <div className="blog-item">
                                <img
                                    src="assets/images/blog/blog 01-01.webp"
                                    alt=""
                                    className="cover-img rounded-16"
                                />
                                <div className="blog-item__content mt-24">
                                    {blogData.blog.map((blog) => (
                                    <div className="blog-item-wrapper" key={blog.id}>
                                    <span className="bg-main-50 text-main-600 py-4 px-24 rounded-8 mb-16">
                                       {blog.category}
                                    </span>
                                    <h4 className="mb-24">
                                    {blog.title}
                                    </h4>
                                    <p className="text-gray-700 mb-24">
                                    {blog.content}
                                    </p>
                                    <p className="text-gray-700 pb-24 mb-24 border-bottom border-gray-100">
                                    {blog.additional_content}
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
                                                    {blog.date}
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    </div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Additional Images Section */}
                        <div className="mt-48">
                                    <div className="row gy-4">
                                        {blog.images.map((image, index) => (
                                            <div key={index} className="col-sm-6 col-xs-6">
                                                <img
                                                    src={image}
                                                    alt={`Additional blog image ${index + 1}`}
                                                    className="rounded-16"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        {/* End of Additional Images Section */}
                        <div className="mt-48">
                            <p className="text-gray-700 mb-24">
                                A great commerce experience cannot be distilled to a single number.
                                It’s not a Lighthouse score, 
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
                                    A great commerce experience 
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
                                        src="assets/images/blog/creator 01-01.webp"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                        How Onfon Mobile is Empowering Content Creation and Job Creation for Young People
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
                                                September 24, 2024
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
                                        src="assets/images/blog/blog 01-01.webp"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                        How Onfon Mobile is Making Smartphones Accessible to Millions
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
                                                September 20, 2024
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
                                        src="assets/images/blog/creator 01-03.webp"
                                        alt=""
                                        className="cover-img"
                                    />
                                </Link>
                                <div className="flex-grow-1">
                                    <h6 className="text-lg">
                                        <Link to="/blog-details" className="text-line-3">
                                        How Onfon Mobile is Enhancing Access to E-Books and Online Education
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
                                                September 12, 2024
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
                                        <span>Recent Post will appear here...</span>
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