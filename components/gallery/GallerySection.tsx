import { raleway, open } from "@/lib/font";
import { gallery2 } from "@/data/gallery-data";
import GalleryGrid from "./GalleryGrid";
import ContactSection from "../home/ContactSection";


function GallerySection() {
  return (
    <section id="hero" className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-15">
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-primary"></div>
              <span
                className={`text-primary font-medium tracking-wide text-sm sm:text-base ${open.className}`}
              >
                Our Gallery
              </span>
            </div>
            <h1
              className={`${raleway.className} text-2xl text-primary sm:text-3xl lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
            >
              See What We've Built
            </h1>
          </div>
          <span
            className={`w-full lg:max-w-lg text-base lg:text-base text-primary ${open.className} lg:text-left `}
          >
            At Quick S and A Construction Pvt. Ltd., every project reflects our
            promise of engineering excellence, safety, and trust. From private
            residences and commercial complexes to bridges, hydropower plants,
            and luxury resorts, our gallery captures the diversity and scale of
            our work across Nepal.
          </span>
        </div>

        <div className="mt-10 md:mt-20">
          <GalleryGrid images={gallery2} />
        </div>

        <div className="mt-10 lg:mt-20">
          <ContactSection />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
