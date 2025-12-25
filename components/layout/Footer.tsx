"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Amaranth } from "next/font/google";
import { Inter } from "next/font/google";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import toast from "react-hot-toast";


const allowedDomains = [
  "gmail.com",
  "icloud.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "yahoo.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
];

const amarnath = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const NewsLetterSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .refine(
      (email) => {
        const domain = email.split("@")[1];
        return allowedDomains.includes(domain);
      },
      {
        message:
          "Please use a valid email provider (Gmail, Apple, Outlook, etc.)",
      }
    ),
});

type NewsletterFormData = z.infer<typeof NewsLetterSchema>;

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsLetterSchema),
  });

  const onSubmit = (data: NewsletterFormData) => {
    try {
      toast.success("Subscribed Successfully!!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!!!");
    }
  };
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/*Logo and Text */}
          <Link href={"/"}>
            <div className="flex items-center justify-start">
              <div className="flex flex-col items-center text-center leading-none">
                <Image
                  src="/myquicklogo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="block h-40 w-auto object-contain"
                  priority
                />

                <p
                  className={`-mt-6 sm:-mt-8 text-red-400 font-semibold uppercase
        text-[0.9rem] md:text-[1.35rem] leading-none
        ${amarnath.className}`}
                >
                  quick s & a construction (p) ltd
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mt-4">
                  THE SOLUTION FOR
                  <br />
                  <span className="text-white font-bold">CONSTRUCTION.</span>
                </h2>
              </div>
            </div>
          </Link>
          {/*Newsletter Signup */}
          <div className="flex flex-col items-start justify-center">
            <div className="w-full max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-6 text-left  lg:text-center">
                Newsletter Update
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative w-full"
                noValidate
              >
                <input
                  type="email"
                  placeholder="Enter your email address ..."
                  className={`w-full bg-transparent border-b-2 py-4 pr-14
          text-gray-200 placeholder-gray-500 focus:outline-none
          transition-colors text-lg
          ${
            errors.email
              ? "border-red-500 focus:border-red-400"
              : "border-gray-500 focus:border-blue-400"
          }`}
                  {...register("email")}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-0 top-1/2 -translate-y-1/2
          text-gray-400 hover:text-blue-400 transition-colors
          disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-7 h-7" />
                </button>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </form>
              <p className="mt-3 text-sm text-gray-500 text-left">
                Stay updated with our latest projects and offers.
              </p>
            </div>
          </div>
        </div>

        {/* Links & Contact*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-gray-700">
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
              {[
                "Building Construction",
                "Road Construction",
                "Bridge Construction",
                "Private Residence",
                "Resort & Villa",
                "Commercial Complexes",
              ].map((service) => (
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

          {/* Contact*/}
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

        {/* Bottom Footer*/}
        <div
          className={`pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm lg:text-base ${inter.className}`}
        >
          <p className="text-gray-400 text-center sm:text-left">
            Copyright © Quick S & A Construction Pvt Ltd 2025. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
