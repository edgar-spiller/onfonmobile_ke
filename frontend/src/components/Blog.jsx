import React from 'react'
import { Link } from 'react-router-dom'
import blogData from '../data/blog.json'

const Blog = () => {
    
    return (
        <section className="blog py-80">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-8 pe-xl-4">
                        <div className="blog-item-wrapper">
                            <div className="blog-item">
                                <div className="blog-item__content mt-24">
                                {blogData.blog.map((blog) => (
                                        <div className="blog-item-wrapper" key={blog.id}>
                                        <div className="blog-item">
                                          <Link
                                            to="/blog-details"
                                            className="w-100 h-100 rounded-16 overflow-hidden"
                                          >
                                            <img
                                              src={blog.main_image} // Use blog.main_image to get image from JSON data
                                              alt={blog.title} // Provide an alt text based on blog title
                                              className="cover-img"
                                            />
                                          </Link>
                                          <div className="blog-item__content mt-24">
                                            <span className="bg-main-50 text-main-600 py-4 px-24 rounded-8 mb-16">
                                              {blog.category}
                                            </span>
                                            <h6 className="text-2xl mb-24">
                                              <Link to="/blog-details" className="">
                                                {blog.title}
                                              </Link>
                                            </h6>
                                            <p className="text-gray-700 text-line-2">{blog.content}</p>
                                            <div className="flex-align flex-wrap gap-24 pt-24 mt-24 border-top border-gray-100">
                                              <div className="flex-align flex-wrap gap-8">
                                                <span className="text-lg text-main-600">
                                                  <i className="ph ph-calendar-dots" />
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                  <Link to="/blog-details" className="text-gray-500 hover-text-main-600">
                                                    {blog.date}
                                                  </Link>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                            </div>
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
                                        {blogData.title}
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
                                                {blogData.date}
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
                                        <span>Recent Post will appear here</span>
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

export default Blog