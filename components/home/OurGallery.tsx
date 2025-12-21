import Image from "next/image";
import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Sora } from "next/font/google";
import gallery from "@/data/gallery-data";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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

function OurGallery() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 mb-8">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-600"></div>
              <span
                className={`text-gray-600 font-medium tracking-wide text-sm sm:text-base ${open.className}`}
              >
                Our Services
              </span>
            </div>
            <h1
              className={`${raleway.className} text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold leading-tight sm:leading-normal`}
            >
              Our Gallery
            </h1>
          </div>
          <span
            className={`w-full lg:max-w-lg text-base lg:text-base text-gray-400 ${open.className} lg:text-left `}
          >
            A showcase of our work across Nepal — from residential homes to
            major infrastructure projects.
          </span>
        </div>

        {/* Masonry Grid Container */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery.map((image) => (
            <div
              key={image.id}
              className="relative break-inside-avoid mb-4 w-full overflow-hidden rounded-lg group"
            >
              <div className="relative w-full">
                <Image
                  src={image.link}
                  alt={"gallery image"}
                  width={400} 
                  height={500}
                  className="w-full h-auto object-cover  rounded-lg transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg"></div>
              </div>                     
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurGallery;