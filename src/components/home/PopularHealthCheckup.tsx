import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { healthCheckups } from '../../../data';



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

const PopularHealthCheckup = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <section className="py-16">
            <h2 className="text-head font-bold mb-6">Popular Health Checkup</h2>
            <Slider {...settings}>
                {healthCheckups.map((checkup, index) => (
                    <div key={index} className="p-4 ">
                        <div className="bg-white w-[256px] h-[270px] shadow-healthCheckupShadow rounded-lg p-4 flex flex-col justify-between">
                            <div>
                                <div
                                    className="text-white w-[200px] text-center mx-auto rounded-full px-4 py-2 font-semibold mb-[35px]"
                                    style={{
                                        background: "linear-gradient(180deg, #08920D 0%, #06B90C 100%"
                                    }}
                                >
                                    {checkup.tests}
                                </div>
                                <h3 className="font-bold text-subhead mb-[35px]">{checkup.title}</h3>
                                <p className="text-black-200 mb-4">{checkup.description}</p>
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <span className="line-through text-gray-400 mr-2">{checkup.originalPrice}</span>
                                <span className="font-bold text-black mr-2">{checkup.discountedPrice}</span>
                                <span className="text-red-500 font-semibold">{checkup.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section >
    );
};

export default PopularHealthCheckup;
