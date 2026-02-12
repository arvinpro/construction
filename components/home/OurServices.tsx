import Image from "next/image";
import services from "@/data/services-data";
import { raleway, open } from "@/lib/font";
import Link from "next/link";

function OurServices() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 mb-8">
        <div className="w-full lg:w-auto">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 lg:w-12 h-px bg-primary"></div>
            <span
              className={`text-primary font-medium tracking-wide text-sm sm:text-base ${open.className}`}
            >
              Our Services
            </span>
          </div>
          <h1
            className={`${raleway.className} text-primary text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold leading-tight sm:leading-normal`}
          >
            What We Build, Defines Us
          </h1>
        </div>
        <span
          className={`w-full lg:max-w-lg text-base lg:text-base text-primary ${open.className} font-normal lg:text-left `}
        >
          From residential homes to national infrastructure, we deliver projects
          that combine innovation, safety, and lasting value.
        </span>
      </div>

      {/*our services*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((items) => (
          <Link key={items.id} href={`/service#service-${items.id}`}>
          <div
            className="flex flex-col justify-start items-start overflow-hidden group"
          >
            <div className="w-full aspect-video overflow-hidden rounded-3xl relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <Image
                src={items.image}
                alt={items.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="py-4">
              <h2
                className={`text-2xl font-semibold mb-3 text-gray-800 ${raleway.className}`}
              >
                {items.name}
              </h2>
              <p
                className={`text-gray-400 text-sm leading-relaxed ${open.className}`}
              >
                {items.description}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default OurServices;
