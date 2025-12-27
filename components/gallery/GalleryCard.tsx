import Image from "next/image";
import { GalleryDataTypes } from "@/data/gallery-data";

interface Props {
  img: GalleryDataTypes;
}

function GalleryCard({ img }: Props) {
  return (
 <div className="w-full aspect-16/12 overflow-hidden rounded-2xl relative group">
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  </div>
  
  <Image
    src={img.link}
    alt={img.name}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
  />
</div>
  );
}

export default GalleryCard;
