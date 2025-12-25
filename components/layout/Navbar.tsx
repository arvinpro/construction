"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PhoneCall } from "@deemlol/next-icons";
import Image from "next/image";
import { Amaranth } from "next/font/google";
import { Sora } from "next/font/google";
import Link from "next/link";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const amarnath = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/service" },
    { name: "Our Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 ${sora.className} *
    ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <Link href={"/"}>
            <div className="flex flex-col items-center leading-none mb-6">
              <Image
                src="/myquicklogo.png"
                alt="Logo"
                width={80}
                height={80}
                className="block h-24 w-auto object-contain"
                priority
              />

              <p
                className={`-mt-7 text-red-400 font-semibold uppercase
    text-[0.6rem] sm:text-[0.7rem] leading-none
    ${amarnath.className}`}
              >
                quick s & a construction (p) ltd
              </p>
            </div>
          </Link>

          {/* For Desktop*/}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-sky-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="tel:+9779851149961"
              className="flex items-center gap-2 bg-sky-700 text-white px-4 py-2.5 rounded-xl hover:bg-sky-800 transition hover:scale-95"
            >
              <PhoneCall size={18} color="#FFFFFF" />
              <span className="text-sm font-medium">+977-9851149961</span>
            </Link>
          </div>

          {/*for mobile menu*/}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-sky-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-5 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-gray-50 hover:text-sky-700 transition"
            >
              {link.name}
            </Link>
          ))}


          <Link
            href="tel:+9779851149961"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-4 py-3 text-white font-semibold hover:bg-sky-800 transition"
          >
            <PhoneCall size={18} color="#FFFFFF" />
            +977-9851149961
          </Link>
        </div>
      </div>
    </nav>
  );
}
