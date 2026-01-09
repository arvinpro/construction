'use client'

import Image from "next/image";
import { raleway, open } from "@/lib/font";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";

function ContactSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start mt-10 lg:items-center gap-8 lg:gap-12">
        <div className="hidden md:flex items-end gap-3 sm:gap-4 md:gap-6 w-full lg:w-auto">
          {/* First Image */}
          <div className="relative w-full sm:w-[280px] md:w-[350px] lg:w-[420px] xl:w-[500px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[420px] xl:h-[500px] overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <Image
              src={"/design/design (9).jpeg"}
              alt="building1"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform ease-out duration-500"
            />
            <Link to="hero" smooth={true} duration={600} offset={-130}>
              <button className="absolute cursor-pointer bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-sky-800" />
              </button>
            </Link>
          </div>

          {/* Second Image */}
          <div className="relative w-[45%] sm:w-[180px] md:w-[220px] lg:w-[250px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <Image
              src={"/design/design (15).jpeg"}
              alt="building2"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform ease-out duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative grid grid-cols-1 min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] w-full lg:w-auto lg:max-w-md xl:max-w-lg">
          <div className="md:self-start">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-px bg-gray-600"></div>
              <span
                className={`text-gray-600 font-medium tracking-wide text-xs sm:text-sm md:text-base ${open.className}`}
              >
                Contact Us
              </span>
            </div>

            <h1
              className={`${raleway.className} text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-semibold leading-tight sm:leading-normal`}
            >
              LET'S KEEP IN TOUCH
            </h1>
          </div>

          {/* Contact Details*/}
          <div className="relative flex flex-col gap-4 sm:gap-6 lg:gap-8 md:self-end w-full">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex justify-between items-end gap-4">
                <span className="text-xs sm:text-sm md:text-base text-gray-800 whitespace-nowrap">
                  PHONE
                </span>
                <span className="font-semibold text-black text-xs sm:text-sm md:text-base text-right">
                  +977-9851149961
                </span>
              </div>
              <div className="w-full h-px bg-gray-300"></div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex justify-between items-end gap-4">
                <span className="text-xs sm:text-sm md:text-base text-gray-800 whitespace-nowrap">
                  EMAIL
                </span>
                <span className="font-semibold text-black text-xs sm:text-sm md:text-base text-right break-all">
                  quicksnaconstruction@gmail.com
                </span>
              </div>
              <div className="w-full h-px bg-gray-300"></div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex justify-between items-end gap-4">
                <span className="text-xs sm:text-sm md:text-base text-gray-800 whitespace-nowrap">
                  LOCATION
                </span>
                <span className="font-semibold text-black text-xs sm:text-sm md:text-base text-right">
                  Nagarjun-07, Kathmandu, Nepal
                </span>
              </div>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
