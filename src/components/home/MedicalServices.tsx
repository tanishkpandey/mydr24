import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

// Example services data
const services = [
    {
        image: '/path/to/image1.jpg', // Replace with actual image path
        title: 'Instance Services',
        description: 'We consider patient safety, quality, and the patient & family',
        buttonText: 'BOOK NOW',
        backgroundColor: '#FFCDD2',
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Doctor Consultation',
        description: 'Get Doctor Consultation With Top Specialists',
        buttonText: 'BOOK NOW',
        backgroundColor: '#BBDEFB',
    },
    {
        image: '/path/to/image3.jpg',
        title: 'Medical Surgery',
        description: 'Get Doctor Consultation With Top Specialists',
        buttonText: 'BOOK NOW',
        backgroundColor: '#CE93D8',
    },
    {
        image: '/path/to/image4.jpg',
        title: 'Diagnostic Test',
        description: 'Lab Tests & Blood Tests At Home',
        buttonText: 'BOOK NOW',
        backgroundColor: '#A5D6A7',
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

const MedicalServices: React.FC = () => {
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
                <h2 className="text-2xl font-bold">Medical Services Offered At Home</h2>
            </div>
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="px-4">
                        <div
                            className="rounded-lg p-6 flex flex-col justify-between h-[250px] w-full text-white"
                            style={{ backgroundColor: service.backgroundColor }}
                        >
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-sm mb-4">{service.description}</p>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="h-[100px] w-auto object-contain mb-4"
                            />
                            <div className="flex justify-between items-center">
                                <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg">
                                    {service.buttonText}
                                </button>
                                <span className="text-xs text-white">*T&C Apply</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default MedicalServices;
