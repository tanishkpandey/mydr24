import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Trendingproducts } from '../../../data';
import Product from '../../assets/images/Product.png'

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
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
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#001e35] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <HiOutlineChevronLeft />
        </div>
    );
};

const NewLaunches: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-head font-bold">New Launches</h2>
                <a href="#" className="text-blue-600 font-bold">View All</a>
            </div>
            <Slider {...settings}>
                {Trendingproducts.map((product, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white w-[200px] h-[350px] rounded-lg p-4 flex flex-col justify-between">
                            <img
                                src={Product}
                                alt={product.name}
                                className="h-[200px] w-full object-contain mb-2"
                            />
                            <div>
                                <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
                                <p className="text-black-300 text-sm line-through"> {product.price}</p>
                                <div className="flex gap-2 items-center text-title">
                                    <span className="font-bold text-black">
                                        {product.discountPrice}
                                    </span>
                                    <span className="text-red-500 font-semibold">
                                        ({product.discount})
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default NewLaunches;
