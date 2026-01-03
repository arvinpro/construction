"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryDataTypes } from "@/data/gallery-data";
import { X } from "lucide-react";

interface Props {
  img: GalleryDataTypes;
}

function GalleryCard({ img }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="w-full aspect-16/12 overflow-hidden rounded-2xl relative group cursor-pointer"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <Image
          src={img.link}
          alt={img.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* fullscreen image */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[90vh]"
          >
            <Image
              src={img.link}
              alt={img.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryCard;
