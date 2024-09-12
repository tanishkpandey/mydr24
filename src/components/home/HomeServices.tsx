import React from "react";
import { servicesData } from "../../../data";
import servicebg from "../../assets/images/servicebg.png";
import serviceImg from "../../assets/images/serviceImg.png";

const HomeServices: React.FC = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">24/7 Hours Home Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {servicesData.map((service, index) => (
          <div key={index} className=" w-[227px] ">
            <div
              className="rounded-lg flex flex-col items-center justify-between text-center  w-[223px] h-[174px] mx-auto shadow-md"
              style={{
                background: `url(${servicebg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-center w-[223px] h-[174px] ">
                <img
                  src={serviceImg}
                  alt={service.title}
                  className="h-full object-contain rounded-md "
                />
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-[12px] font-bold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
