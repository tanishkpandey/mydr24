import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogs } from '../../../data';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import BlogImage from '../../assets/images/BlogImage.png';

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronRight />
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    );
};

const BlogsAndArticles = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section
            className="py-10"
            style={{
                background: "linear-gradient(180deg, rgba(6, 185, 12, 0.05) 0%, rgba(243, 255, 243, 0.1) 47.1%, #FFFFFF 100%)"
            }}
        >
            <h2 className="text-head font-bold mb-6">Blogs and Articles for You</h2>
            <Slider {...settings}>
                {blogs.map((blog, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white shadow-custom rounded-lg overflow-hidden">
                            <img src={BlogImage} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-black-100 font-semibold mb-4">{blog.title}</h3>
                                <a href={blog.link} className="text-black font-bold underline">
                                    Read More &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default BlogsAndArticles;