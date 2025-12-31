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
  "/gallery/img20.jpg",
  "/gallery/img21.jpg",
  "/gallery/img22.jpg",
  "/gallery/img23.jpg",
  "/gallery/img24.jpg",
  "/gallery/img25.jpg",
  "/gallery/img26.jpg",
  "/gallery/img27.jpg",
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
