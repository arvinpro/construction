"use client";

import Image from "next/image";
import { raleway, open } from "@/lib/font";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const leftImages = [
  { id: 1, name: "road-construction", href: "/gallery/road8.jpeg" },
  { id: 2, name: "road-construction", href: "/gallery/road9.jpeg" },
  { id: 3, name: "road-construction", href: "/gallery/road4.jpeg" },
  { id: 4, name: "road-construction", href: "/gallery/road5.jpeg" },
];

const rightImages = [
  { id: 1, name: "house-construction", href: "/gallery/house1.jpeg" },
  { id: 2, name: "house-construction", href: "/gallery/img24.jpeg" },
  { id: 3, name: "house-construction", href: "/gallery/img14.jpeg" },
  { id: 4, name: "house-construction", href: "/gallery/img15.jpeg" },
];

const clients = [
  {
    id: 1,
    name: "HALSTEAD CORPORATION",
    date: "15 June 2023",
  },
  {
    id: 2,
    name: "EVEREST BUILDERS",
    date: "02 August 2023",
  },
];

function ImageSlide({ image, index, offset = 0 }: any) {
  const client = clients[(index + offset) % clients.length];

  return (
    <div className="relative aspect-[17/12] overflow-hidden group">
      <Image
        src={image.href}
        alt={image.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Tag */}
      <div className="absolute right-4 top-4 z-10">
        <button className="px-3 py-1.5 text-sm text-white bg-sky-600 rounded-xl">
          Construction
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 w-full h-20 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-center h-full px-6 uppercase">
          <div>
            <p className="text-xs text-gray-700">Client</p>
            <h3 className="text-sm font-semibold">{client.name}</h3>
          </div>
          <div>
            <p className="text-xs text-gray-700">Finished</p>
            <h3 className="text-sm font-semibold">{client.date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LatestWork() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        <div>
          <span className={`text-sm ${open.className}`}>Our Services</span>
          <h1
            className={`${raleway.className} text-3xl lg:text-4xl font-semibold uppercase`}
          >
            Our Latest Work
          </h1>
        </div>
        <p className={`max-w-lg ${open.className}`}>
          Explore some of our recent success stories showcasing quality,
          innovation, and timely delivery across Nepal.
        </p>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SWIPER */}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              nextEl: ".left-next",
              prevEl: ".left-prev",
            }}
          >
            {leftImages.map((img, index) => (
              <SwiperSlide key={img.id}>
                <ImageSlide image={img} index={index} offset={0} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Buttons */}
          <button className="left-prev swiper-btn left-3 cursor-pointer">
            <svg
              className="w-6 h-6 text-sky-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="left-next swiper-btn right-3 cursor-pointer">
            <svg
              className="w-6 h-6 text-sky-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* RIGHT SWIPER */}
        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              nextEl: ".right-next",
              prevEl: ".right-prev",
            }}
          >
            {rightImages.map((img, index) => (
              <SwiperSlide key={img.id}>
                <ImageSlide image={img} index={index} offset={1} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Buttons */}
          <button className="right-prev swiper-btn left-3 cursor-pointer">
            <svg
              className="w-6 h-6 text-sky-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="right-next swiper-btn right-3 cursor-pointer">
            <svg
              className="w-6 h-6 text-sky-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Button Styles */}
      <style jsx>{`
        .swiper-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.9);
          color: #0284c7;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .group:hover .swiper-btn {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}
