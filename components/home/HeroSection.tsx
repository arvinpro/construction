import { ArrowUpRight } from "lucide-react";
import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";

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

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className={`${raleway.className} mb-12 space-y-3`}>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight">
            Your Trusted Construction
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight">
            Partner in Nepal
          </h1>
        </div>

        {/* IMAGES */}
        <div className="relative">
          <div className="grid grid-cols-12 gap-6 items-end">
            {/*image1*/}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative h-[260px] sm:h-[340px] md:h-[380px] lg:h-[430px] rounded-xl overflow-hidden group">
                <img
                  src="/homepage/home2.jpeg"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-start gap-2 text-white">
                  <div className="w-px h-14 lg:h-16 bg-white"></div>
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-bold">20+</h2>
                    <p className="text-xs sm:text-sm">
                      Years of Combined Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Residential & Commercial",
                  "Roads & Bridges",
                  "Resorts & Villas",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:scale-95 transition duration-300 hover:bg-sky-500 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* image2 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden group">
                <img
                  src="homepage/home3.jpeg"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* image3 */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative z-20 lg:-mt-28">
              <div className="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-[560px] rounded-xl overflow-hidden group">
                <img
                  src="homepage/home1.jpeg"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-blue-900/40" />
                <div
                  className="absolute top-0 left-0 right-0 h-32 sm:h-40 
  bg-gradient-to-b from-black/70 via-black/30 to-transparent 
  z-10 pointer-events-none"
                />

                <p
                  className={`absolute top-4 z-50 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-sm sm:text-lg font-semibold ${open.className}`}
                >
                  From concept to creation — we deliver excellence in every
                  project.
                </p>

                <button className="absolute cursor-pointer bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition">
                  <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
