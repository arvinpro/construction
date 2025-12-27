"use client";

import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const open = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function WearePage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 items-center">
      {/* Image */}
      <div className="relative aspect-square rounded-lg lg:rounded-tr-[260px] overflow-hidden group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <Image
          src="/building1.jpeg"
          alt="building"
          fill
          className="object-cover transition-transform ease-out duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start items-start lg:items-end py-8 md:py-0">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-600"></div>
            <span
              className={`text-gray-600 font-medium tracking-wide text-sm sm:text-base ${open.className}`}
            >
              About Us
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 ${raleway.className}`}
          >
            WHO WE ARE
          </h2>

          <div className="space-y-8 md:space-y-10">
            {/* Point 01 */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-teal-400 rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  01
                </span>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Decades of combined experience in delivering residential,
                commercial, infrastructure, and hydropower projects across
                Nepal.
              </p>
            </div>

            {/* Point 02 */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  02
                </span>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Commitment to using modern technology, advanced engineering
                practices, and high-grade materials for lasting results.
              </p>
            </div>

            {/* Point 03 */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  03
                </span>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Efficient planning and execution ensure projects are completed
                within schedule and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
