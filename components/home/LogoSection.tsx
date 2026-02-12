"use client";

import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { raleway, open } from "@/lib/font";

const logos = [
  { name: "logo1", href: "/logo/logo1.png" },
  { name: "logo2", href: "/logo/logo2.png" },
  { name: "logo3", href: "/logo/logo3.png" },
  { name: "logo4", href: "/logo/logo4.png" },
  { name: "logo5", href: "/logo/logo5.png" },
  { name: "logo6", href: "/logo/logo6.png" },
  { name: "logo7", href: "/logo/logo7.png" },
  { name: "logo8", href: "/logo/logo8.png" },
];

export default function LogoSection() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Speed (px per second)
  const speed = 60;

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 2;
    let moveBy = (speed * delta) / 1000;

    x.set(x.get() - moveBy);

    if (Math.abs(x.get()) >= width) {
      x.set(0);
    }
  });

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 m-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-primary" />
            <span className={`${open.className} text-sm text-primary`}>
              Our Clients
            </span>
          </div>

          <h1
            className={`${raleway.className} text-3xl text-primary lg:text-4xl font-semibold uppercase`}
          >
            Trusted by Clients
          </h1>
        </div>

        <p className={`max-w-lg ${open.className} text-primary`}>
           We are proud to collaborate with trusted clients and customers who
          believe in our quality and reliability.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex flex-nowrap items-center gap-6 sm:gap-10 md:gap-14 lg:gap-20"
          style={{ x }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] flex items-center justify-center"
            >
              <div className="relative w-40 h-24 lg:w-48 lg:h-28 hover:scale-110 transition-transform">
                <Image
                  src={logo.href}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
}
