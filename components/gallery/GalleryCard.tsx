import Image from "next/image"
import { GalleryDataTypes } from "@/data/gallery-data"

interface Props {
    img : GalleryDataTypes
}

function GalleryCard({img}: Props) {
  return (
        <div className="w-full aspect-16/12 overflow-hidden rounded-2xl relative group">
                    <Image
                      src={img.link}
                      alt={img.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
  )
}

export default GalleryCard