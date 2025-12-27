import React from "react";
import { ServiceData } from "@/data/servicespage-data";
import Image from "next/image";

interface Props {
  data: ServiceData;
}

function ServiceCard({ data }: Props) {
  return (
    <div
      className={`flex flex-col ${
        data.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8`}
    >
      <div className="relative w-full aspect-16/8 overflow-hidden rounded-4xl group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  </div>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform ease-out duration-300"
        />
      </div>

      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {data.description}
        </p>
        <div className="space-y-3">
          {data.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-3">
              <div className="shrink-0 w-4 h-4 rounded-full bg-sky-800 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3.5 h-3.5] text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
