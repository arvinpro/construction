import { raleway, open } from "@/lib/font";
import { servicesData } from "@/data/servicespage-data";
import ServiceGrid from "./ServiceGrid";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SwiperSlide from "./SwiperSlide";
import ContactSection from "../home/ContactSection";


function OurServices() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-15">
        {/*heading*/}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-6 lg:gap-0">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-600"></div>
              <span
                className={`text-gray-600 font-medium tracking-wide text-sm sm:text-base ${open.className}`}
              >
                Our Services
              </span>
            </div>
            <h1
              className={`${raleway.className} text-2xl sm:text-3xl text-black lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
            >
              Building With Purpose, <br />
              Serving With Excellence
            </h1>
          </div>
          <span
            className={`w-full lg:max-w-lg text-base lg:text-base text-black ${open.className} lg:text-left `}
          >
            At Quick S and A Construction Pvt. Ltd., our services go beyond
            laying bricks and pouring concrete. We create lasting infrastructure
            that empowers communities, drives economic growth, and supports
            sustainable development across Nepal. From modern homes and
            commercial hubs to vital road networks, bridges, and hydropower
            projects, we deliver solutions that combine engineering expertise,
            innovation, and trust. Every service is guided by our commitment to
            quality, safety, and client satisfaction.
          </span>
        </div>

        {/*images slide*/}
        <div className="mt-10 md:mt-15">
          <SwiperSlide />
        </div>
        {/*middle text content*/}
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 md:gap-6 mt-10 md:mt-15">
          <h1
            className={`text-2xl sm:text-4xl lg:text-5xl font-semibold uppercase ${raleway.className}`}
          >
            What We Build, Defines Us
          </h1>
          <p className="font-semibold">
            From residential homes to national infrastructure, we deliver
            projects that combine innovation, safety, and lasting value.
          </p>
        </div>
        {/*grid content*/}
        <div className="mt-10 md:mt-20">
          <ServiceGrid service={servicesData} />
        </div>

        {/*contact*/}
       <div className="mt-10 lg:mt-20">
        <ContactSection />
       </div>
      </div>
    </div>
  );
}

export default OurServices;
