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
        pagination={{ clickable: true }}
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

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button className="swiper-button-prev text-sky-700 text-2xl">
            <IoArrowBack />
          </button>
          <div className="swiper-pagination relative! w-auto!"></div>
          <button className="swiper-button-next text-sky-700 text-2xl">
            <IoArrowForward />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
