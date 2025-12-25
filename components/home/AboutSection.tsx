import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { raleway, open } from "@/lib/font";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      <div className="relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {/* Image 1 */}
          <div className="relative h-[220px] sm:h-[260px] rounded-xl overflow-hidden group">
            <Image
              src="/aboutpage/img1.jpeg"
              alt="Building"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-95"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-[220px] sm:h-[260px] rounded-xl overflow-hidden group">
            <Image
              src="/aboutpage/img2.jpeg"
              alt="Building"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-95"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-2/3 right-4 items-end lg:top-1/2 lg:-right-4 -translate-y-1/2 flex flex-col gap-2 z-10">
              <button className="w-9 h-9 bg-yellow-400 cursor-pointer rounded-full flex items-center justify-center hover:scale-95 transition">
                <ChevronUp className="w-5 h-5 text-black" />
              </button>

              <button className="px-3 py-1.5 border cursor-pointer rounded-full text-xs text-white lg:text-black font-medium hover:bg-sky-500 hover:text-white transition">
                buildings
              </button>

              <button className="px-3 py-1.5 border cursor-pointer rounded-full text-xs text-white lg:text-black font-medium hover:bg-sky-500 hover:text-white transition">
                constructions
              </button>
            </div>
          </div>
        </div>

        {/*sm screen images*/}
        <div className="hidden lg:block relative h-[612px]">
          {/* Image 1 */}
          <div className="absolute top-14 left-0 h-57 w-75 group">
            <Image
              src="/aboutpage/img1.jpeg"
              alt="Building"
              fill
              sizes="(min-width: 1024px) 300px"
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* line */}
          <div className="absolute rotate-180 top-35 left-75 w-32 h-48">
            <svg className="w-full h-full" viewBox="0 0 130 190">
              <path
                d="M 90 180 H 20 A 20 20 0 0 1 10 160 V 50"
                fill="none"
                stroke="#9a9a9a"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          {/* Image 2 */}
          <div className="absolute bottom-0 right-0 h-76 w-105 group">
            <Image
              src="/aboutpage/img2.jpeg"
              alt="Building"
              fill
              sizes="(min-width: 1024px) 420px"
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 -left-33 flex flex-col gap-3 items-end">
              <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-95 transition">
                <ChevronUp className="w-7 h-7 text-black" />
              </button>

              <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-sky-500 hover:text-white transition">
                buildings
              </button>

              <button className="px-4 py-2 border rounded-full text-sm font-medium hover:bg-sky-500 hover:text-white transition">
                constructions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-gray-600"></div>
          <span
            className={`text-gray-600 font-medium tracking-wide ${open.className}`}
          >
            About Us
          </span>
        </div>

        <div className={`${raleway.className} space-y-2 text-black`}>
          <h1
            className={`font-semibold text-xl sm:text-2xl lg:text-3xl leading-relaxed tracking-normal text-justify`}
          >
            We are architects of lasting structures and builders of trusted
            relationships.
          </h1>
          <h1
            className={`font-semibold text-xl sm:text-2xl lg:text-3xl leading-relaxed tracking-normal text-justify`}
          >
            Founded in 2076 B.S., Quick S and A Construction Pvt. Ltd. has grown
            from its roots in Kathmandu into a respected name across Nepal. With
            a focus on innovation, quality, and sustainability, every project we
            deliver contributes to Nepal’s progress.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
