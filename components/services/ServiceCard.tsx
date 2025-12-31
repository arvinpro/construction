"use client";

import React from "react";
import { ServiceData } from "@/data/servicespage-data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  data: ServiceData;
}

function ServiceCard({ data }: Props) {
  return (
    <section id={`service-${data.id}`} className="scroll-mt-66">
      <div
        className={`flex flex-col ${
          data.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8`}
      >
        <div className="relative w-full aspect-16/8 overflow-hidden rounded-4xl group">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.swiper-button-next-${data.id}`,
              prevEl: `.swiper-button-prev-${data.id}`,
            }}
            loop
            className="my-service-swiper w-full h-full relative group"
          >
            {data.image.map((img, index) => (
              <SwiperSlide key={`${data.id}-${index}`}>
                <Image
                  src={img}
                  alt={data.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform ease-out duration-300"
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button
              className={`swiper-button-prev-${data.id}
    absolute top-1/2 left-2 z-20
    p-3 rounded-full
    bg-white/60 hover:bg-white
    shadow-md cursor-pointer
    -translate-y-1/2

    opacity-0 pointer-events-none
    group-hover:opacity-100 group-hover:pointer-events-auto
    transition-all duration-300
    group-hover:translate-x-0 -translate-x-2
  `}
            >
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

            <button
              className={`swiper-button-next-${data.id}
    absolute top-1/2 right-2 z-20
    p-3 rounded-full
    bg-white/60 hover:bg-white
    shadow-md cursor-pointer
    -translate-y-1/2

    opacity-0 pointer-events-none
    group-hover:opacity-100 group-hover:pointer-events-auto
    transition-all duration-300
    group-hover:translate-x-0 translate-x-2
  `}
            >
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
          </Swiper>
        </div>

        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            {data.description}
          </p>
          <div className="space-y-3">
            {data.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <div className="shrink-0 w-4 h-4 rounded-full bg-sky-800 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5] text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
