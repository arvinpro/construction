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

function Achivements() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10 md:mt-20 items-center">
      
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-800" />
          <span
            className={`text-gray-800 font-medium tracking-wide text-sm sm:text-base ${open.className}`}
          >
            Achievements
          </span>
        </div>

        <h1
          className={`${raleway.className} text-black text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed`}
        >
          We have successfully completed residential complexes, commercial hubs,
          highways, bridges, and luxury villas across Nepal. Our growing
          portfolio reflects a proven track record in delivering impactful
          projects that connect communities and support sustainable growth.
        </h1>
      </div>

      {/* RIGHT IMAGES + SVG */}
      <div className="relative w-full max-w-2xl mx-auto py-10 sm:py-16">
        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          
          {/* TOP IMAGE */}
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/building1.jpeg"
              alt="Building"
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden md:block" />

          <div className="hidden md:block" />

          {/* BOTTOM IMAGE */}
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/building2.jpeg"
              alt="Building"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SVG DASHED CURVES (DESKTOP ONLY) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M520 140 H800 Q860 140 860 200 V260"
            fill="none"
            stroke="#c7c7c7"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M140 340 V420 Q140 480 200 480 H520"
            fill="none"
            stroke="#c7c7c7"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>
    </section>
  );
}

export default Achivements;
