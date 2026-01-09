'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const images = [
  "/assets/fb (1).jpg",
  "/assets/fb (2).jpg",
  "/assets/fb (3).jpg",
  "/assets/fb (4).jpg",
  "/assets/fb (5).jpg",
  "/assets/fb (6).jpg",
  "/assets/fb (7).jpg",
  "/assets/fb (8).jpg",
  "/assets/img (85).jpeg",
  "/assets/img (80).jpeg",
  "/assets/img (64).jpeg",
  "/assets/img (74).jpeg",
  "/assets/img (61).jpeg",
  "/assets/img (62).jpeg",
  "/assets/img (30).jpeg",
  "/assets/img (55).jpeg",
];

export default function GallerySwiper() {
  return (
    <div className="w-full">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={{ clickable: true ,
          el: '.custom-pagination'
        }}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="max-w-5xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!w-70! sm:w-130!"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

         {/* 🔹 Pagination BELOW images */}
      <div className="custom-pagination flex justify-center mt-6" />
      
        {/* Controls */}
        <div className="flex justify-center gap-4">
        <button className="swiper-button-prev bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="swiper-button-next bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      </Swiper>
    </div>
  );
}
