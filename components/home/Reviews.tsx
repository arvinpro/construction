"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { raleway, open } from "@/lib/font";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    services: "Home Renovation",
    review:
      "Excellent service! The team was professional, on time, and exceeded our expectations.",
    date: "2025-05-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    services: "Kitchen Remodeling",
    review: "Amazing work and great attention to detail. Highly recommend!",
    date: "2025-08-22",
  },
  {
    id: 3,
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    services: "Office Construction",
    review:
      "Fantastic experience from start to finish. Will definitely use again!",
    date: "2025-11-10",
  },
  {
    id: 4,
    name: "Sarah Williams",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    services: "Bathroom Renovation",
    review: "Professional, clean, and delivered on time. Couldn’t be happier!",
    date: "2025-12-01",
  },
  {
    id: 5,
    name: "David Miller",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    services: "Interior Design",
    review: "Great design sense and excellent execution. Totally satisfied!",
    date: "2025-12-10",
  },
];

export default function Reviews() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
        <div className="w-full lg:w-auto">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="w-8 sm:w-10 lg:w-12 h-px bg-primary"></div>
            <span
              className={`text-primary font-medium tracking-wide text-sm sm:text-base ${open.className}`}
            >
              Client Reviews
            </span>
          </div>
          <h1
            className={`${raleway.className} text-primary text-2xl sm:text-3xl lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
          >
            What Our Clients Say
          </h1>
        </div>
        <span
          className={`w-full lg:max-w-lg text-base lg:text-base text-primary ${open.className} lg:text-left `}
        >
          Our clients’ feedback reflects the quality, commitment, and
          craftsmanship we bring to every project. From residential construction
          to large-scale commercial developments, their words speak for our
          dedication and trust built over the years.
        </span>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        loop
        centeredSlides
        watchSlidesProgress
        spaceBetween={24}
        slidesPerView={1.1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="reviews-swiper pb-10 mt-4 md:mt-6"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card bg-white rounded-xl p-6 sm:p-8 h-full flex flex-col transition-all duration-500">
              {/* Header */}
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-4 border-gray-200"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-700">{review.services}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-700 grow text-sm sm:text-base">
                “{review.review}”
              </p>

              {/* Date */}
              <p className="text-xs sm:text-sm text-gray-500 mt-6 text-right">
                Completed:{" "}
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-4 -mt-10">
        <button className="swiper-button-prev-custom bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition">
          <svg
            className="w-6 h-6 text-gray-700"
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

        <button className="swiper-button-next-custom bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition">
          <svg
            className="w-6 h-6 text-gray-700"
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
    </>
  );
}
