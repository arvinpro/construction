"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Amaranth } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Footer() {
  const links = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Projects", href: "#" },
    { name: "Why Choose Us", href: "/#" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Building Construction",
    "Road Construction",
    "Bridge Construction",
    "Private Residence",
    "Resort & Villa",
    "Commercial Complexes",
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section: Logo + Government Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Logo and Company Info */}
          <div className="flex items-center justify-start">
            <Link href={"/"} className="block">
              <div className="flex flex-col items-center text-center leading-none">
                <Image
                  src="/logo/myquicklogo.png"
                  alt="Quick S & A Construction Logo"
                  width={80}
                  height={80}
                  className="block h-40 w-auto object-contain"
                  priority
                />

                <p
                  className={`-mt-6 sm:-mt-8 text-red-400 font-semibold uppercase text-[0.9rem] leading-none ${amaranth.className}`}
                >
                  quick s & a construction (p) ltd
                </p>

                <h2 className="text-2xl text-white leading-tight mt-6">
                  THE SOLUTION FOR
                  <br />
                  <span className="text-white font-bold">CONSTRUCTION.</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* Google Map Location */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Our Location
            </h3>

            <div
              className="w-full 
                  h-[220px] 
                  overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gray-700"
            >
              <iframe
                src="https://www.google.com/maps?q=27.72600605468447,85.2423342463699&z=16&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quick S & A Construction Location"
              />
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Nagarjun-07, Kathmandu, Nepal
            </p>

            <Link
              href="https://maps.app.goo.gl/VYCXag5TdMPHTqKq9"
              target="_blank"
              className="mt-2 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              View on Google Maps →
            </Link>
          </div>
        </div>

        {/* Links, Services & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-gray-700">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <Link
                  href="tel:+9779851149961"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +977-9851149961
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                <Link
                  href="mailto:quicksnaconstruction@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  quicksnaconstruction@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  Nagarjun-07, Kathmandu, Nepal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 flex justify-between md:justify-center items-center gap-6 text-sm lg:text-base ${inter.className}`}
        >
          <p className="text-gray-400 text-center sm:text-left">
            Copyright © Quick S & A Construction Pvt Ltd 2025. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
