"use client";

import React from "react";
import { Raleway } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const ContactFormSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must not exceed 20 characters")
    .regex(/^[a-zA-Z]+$/, "First name must contain letters only"),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must not exceed 20 characters")
    .regex(/^[a-zA-Z]+$/, "Last name must contain letters only"),
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
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\+?977)?[9][6-9]\d{8}$/,
      "Please enter a valid Nepali phone number (e.g., 9851149961 or +9779851149961)"
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type FormData = z.infer<typeof ContactFormSchema>;

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

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <div className="flex items-start gap-1.5 mt-1.5">
        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-red-600">{message}</p>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-15">
        {/*heading*/}
        <div className="flex flex-col justify-between items-start gap-6 lg:gap-2">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-600"></div>
              <span
                className={`text-gray-600 font-medium tracking-wide text-sm sm:text-base ${open.className}`}
              >
                Contact Us
              </span>
            </div>
            <h1
              className={`${raleway.className} text-2xl text-black sm:text-3xl lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
            >
              Let's keep in touch
            </h1>
          </div>
          <span
            className={`max-w-full text-base lg:text-base text-black font-semibold ${open.className} lg:text-left `}
          >
            We're here to answer your questions, discuss on you new project, and
            help you with the best services.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <div className="bg-gray-50 rounded-xl max-w-xl">
            <div className="flex flex-col gap-6 px-6 py-6">
              <div className="space-y-2">
                <h1 className="text-3xl text-black">
                  Let's Talk About Your Projects
                </h1>
                <p className="text-gray-900">
                  Contact us regarding any concerns or inquiries.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("first_name")}
                      placeholder="Enter"
                      className={`w-full px-4 py-3 border bg-white rounded-lg outline-none transition ${
                        errors.first_name
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      }`}
                    />
                    <ErrorMessage message={errors.first_name?.message} />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("last_name")}
                      placeholder="Enter"
                      className={`w-full px-4 py-3 border bg-white rounded-lg outline-none transition ${
                        errors.last_name
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      }`}
                    />
                    <ErrorMessage message={errors.last_name?.message} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Enter your Email"
                    className={`w-full px-4 py-3 border bg-white rounded-lg outline-none transition ${
                      errors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  />
                  <ErrorMessage message={errors.email?.message} />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 border bg-white rounded-lg outline-none transition ${
                      errors.phone
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  />
                  <ErrorMessage message={errors.phone?.message} />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Type a message here..."
                    className={`w-full px-4 py-3 border bg-white rounded-lg outline-none transition resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  ></textarea>
                  <ErrorMessage message={errors.message?.message} />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-sky-800 text-white font-medium px-8 py-3 rounded-lg transition duration-200 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:bg-sky-900"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className={`px-6 py-6 ${raleway.className}`}>
            <div className="grid grid-cols-1">
              <div>
                <p className="text-sm text-gray-600 mb-2">Contact Info</p>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Prefer a Direct Approach?
                </h2>
                <div className="space-y-2">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-sky-600 mt-1 shrink-0" />
                    <div>
                      <Link
                        href="tel:+9779851149961"
                        className="text-lg text-gray-900 hover:text-sky-600 transition"
                      >
                        +977-9851149961
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-sky-600 mt-1 shrink-0" />
                    <div>
                      <Link
                        href="mailto:quicksnaconstruction@gmail.com"
                        className="text-lg text-gray-900 hover:text-sky-600 transition break-all"
                      >
                        quicksnaconstruction@gmail.com
                      </Link>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-sky-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-lg text-gray-900">
                        Nagarjun-07, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="overflow-hidden shadow-lg h-96 mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1767168573376!6m8!1m7!1sJtAPnEhWqzEkkaAKaPJQXQ!2m2!1d27.72600605468447!2d85.2423342463699!3f348.68!4f0!5f0.7820865974627469"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Street View Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
