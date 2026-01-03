"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white min-h-screen">
        <Navbar />
        <motion.div
          initial={{ opacity: 0,y:20 }}
          animate={{ opacity: 1,y:0 }}
          transition={{ease:"easeInOut", duration: 0.75 }}
        >
          {children}
        </motion.div>
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
