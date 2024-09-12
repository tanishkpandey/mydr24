import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import DrConsultationBanner from "../../assets/images/DrConsultationBanner.png"; // Replace with actual image path

const slides = [
  {
    title: "FREE DOCTOR CONSULTATION",
    description: "For Acne, Pigmentation, Wrinkles & 7 more!",
    buttonText: "EXPLORE NOW",
    buttonLink: "#",
    image: DrConsultationBanner, // This will be the background image
  },
  {
    title: "ANOTHER CONSULTATION",
    description: "Special offer on skin treatment & 3 more!",
    buttonText: "CHECK NOW",
    buttonLink: "#",
    image: DrConsultationBanner, // This will be the background image
  },
];

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <HiOutlineChevronRight size={24} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <HiOutlineChevronLeft size={24} />
    </div>
  );
};

const DoctorConsultationCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative rounded-lg">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full z-0 h-full object-cover rounded-lg"
            />
            <div className="flex absolute z-100 text-left">
              <h2 className="text-4xl font-bold text-blue-900">
                {slide.title}
              </h2>
              <p className="text-lg text-blue-600 mt-2">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="mt-4 inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg"
              >
                {slide.buttonText}
                <HiOutlineChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DoctorConsultationCarousel;
