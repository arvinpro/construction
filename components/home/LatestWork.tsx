import Image from "next/image";
import { raleway, open } from "@/lib/font";

const images = [
  { id: 1, name: "construction1", link: "/latest/latest1.jpeg" },
  { id: 2, name: "construction2", link: "/latest/latest2.jpeg" },
];

function LatestWork() {
  return (
    <>
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
            className={`${raleway.className} text-black text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold leading-tight sm:leading-normal`}
          >
            Our Latest Work
          </h1>
        </div>
        <span
          className={`w-full lg:max-w-lg text-base lg:text-base text-gray-400 ${open.className} font-normal lg:text-left `}
        >
          Explore some of our recent success stories showcasing quality,
          innovation, and timely delivery across Nepal.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {images.slice(0, 1).map((image) => (
          <div key={image.id} className="aspect-17/12 overflow-hidden group">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <Image
                src={image.link}
                alt={image.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform ease-out duration-500"
              />
              <div className="absolute right-4 top-4">
                <button
                  className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base text-white bg-sky-600 rounded-xl ${open.className}`}
                >
                  Construction Management
                </button>
              </div>
              <div
                className="absolute bottom-0 w-full h-20 bg-slate-100/90 flex justify-center items-center translate-y-full
                   group-hover:translate-y-0
                   transition-transform duration-300 ease-out"
              >
                <div
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 px-4 uppercase ${raleway.className}`}
                >
                  <div className="absolute left-0 ml-7">
                    <p className="text-gray-500 text-xs sm:text-sm">Client</p>
                    <h1 className="font-semibold text-sm sm:text-base">
                      HALSTEAD CORPORATION
                    </h1>
                    <div className="max-w-full h-px bg-gray-400 mt-1"></div>
                  </div>
                  <div className="absolute right-0 mr-7">
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Finished Date
                    </p>
                    <h1 className="font-semibold text-sm sm:text-base">
                      15 June 2023
                    </h1>
                    <div className="max-w-full h-px bg-gray-400 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {images.slice(1, 2).map((image) => (
          <div key={image.id} className="aspect-17/12 overflow-hidden group">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <Image
                src={image.link}
                alt={image.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform ease-out duration-500"
              />
              <div className="absolute right-4 top-4">
                <button
                  className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base text-white bg-sky-600 rounded-xl ${open.className}`}
                >
                  Construction Management
                </button>
              </div>

              <div
                className="absolute bottom-0 w-full h-20 bg-slate-100/90 flex justify-center items-center translate-y-full
                   group-hover:translate-y-0
                   transition-transform duration-300 ease-out"
              >
                <div
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 px-4 uppercase ${raleway.className}`}
                >
                  <div className="absolute left-0 ml-7">
                    <p className="text-gray-500 text-xs sm:text-sm">Client</p>
                    <h1 className="font-semibold text-sm sm:text-base">
                      HALSTEAD CORPORATION
                    </h1>
                    <div className="max-w-full h-px bg-gray-400 mt-1"></div>
                  </div>
                  <div className="absolute right-0 mr-7">
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Finished Date
                    </p>
                    <h1 className="font-semibold text-sm sm:text-base">
                      15 June 2023
                    </h1>
                    <div className="max-w-full h-px bg-gray-400 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestWork;
