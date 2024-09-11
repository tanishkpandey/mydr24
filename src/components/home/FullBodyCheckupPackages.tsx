import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import checkupImg from '../../assets/images/checkupImg.png';
// Example package data
const packages = [
    {
        image: '/path/to/package-image.jpg', // Replace with actual image path
        title: 'Special Surksha Package',
        testsIncluded: '7 Test Include',
        price: '₹1449',
        originalPrice: '₹3599',
        discount: '60% OFF',
    },
    {
        image: '/path/to/package-image.jpg',
        title: 'Special Surksha Package',
        testsIncluded: '7 Test Include',
        price: '₹1449',
        originalPrice: '₹3599',
        discount: '60% OFF',
    },
    {
        image: '/path/to/package-image.jpg',
        title: 'Special Surksha Package',
        testsIncluded: '7 Test Include',
        price: '₹1449',
        originalPrice: '₹3599',
        discount: '60% OFF',
    },
    {
        image: '/path/to/package-image.jpg',
        title: 'Special Surksha Package',
        testsIncluded: '7 Test Include',
        price: '₹1449',
        originalPrice: '₹3599',
        discount: '60% OFF',
    },
];

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

const FullBodyCheckupPackages: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                <h2 className="text-head font-bold">Full Body Checkup Packages</h2>
                <a href="#" className="text-blue-600 font-bold">View All</a>
            </div>
            <Slider {...settings}>
                {packages.map((pkg, index) => (
                    <div key={index} className="px-2"> {/* Adding padding to each slide */}
                        <div className="bg-[#f6f6f6] rounded-lg p-4 flex flex-col justify-between">
                            <img
                                src={checkupImg}
                                alt={pkg.title}
                                className="h-[150px] w-full object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-md font-bold mb-1">{pkg.title}</h3>
                            <p className="text-gray-500 mb-4">{pkg.testsIncluded}</p>
                            <div className='flex items-start gap-2 justify-between h-full'>
                                <div className="flex items-center gap-2 justify-between mb-4 mt-2">
                                    <span className="text-black font-bold text-[15px]">{pkg.price}</span>
                                    <span className="line-through text-gray-500 text-[15px]">{pkg.originalPrice}</span>
                                    <span className="text-red-600 font-bold text-[15px]">{pkg.discount}</span>
                                </div>
                                <button className="bg-blue-600 text-white font-semibold py-2 rounded-lg w-[117px]">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default FullBodyCheckupPackages;
