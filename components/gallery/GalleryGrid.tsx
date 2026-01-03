"use client";

import { useState } from "react";
import { GalleryDataTypes } from "@/data/gallery-data";
import GalleryCard from "./GalleryCard";

interface Props {
  images: GalleryDataTypes[];
}

const ITEMS_LOADS = 18;

function GalleryGrid({ images }: Props) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_LOADS);
  const [loading, setLoading] = useState(false);

  const visibleImages = images.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_LOADS);
      setLoading(false);
    }, 700);
  };

  const handleLoadLess = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(ITEMS_LOADS);
      setLoading(false);
    }, 400);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleImages.map((image) => (
          <GalleryCard key={image.id} img={image} />
        ))}
      </div>


      <div className="flex justify-center gap-6 mt-12">
        {/* Load More */}
        {visibleCount < images.length && (
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl
                       bg-sky-700 text-white font-medium
                       hover:bg-sky-800 transition
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        )}

        {/* Load Less */}
        {visibleCount > ITEMS_LOADS && (
          <button
            onClick={handleLoadLess}
            disabled={loading}
            className="px-8 py-3 rounded-2xl
                       border border-gray-300
                       text-white
                       bg-sky-700 font-medium
                       hover:bg-sky-800 transition
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
}

export default GalleryGrid;
