import { GalleryDataTypes } from "@/data/gallery-data"
import GalleryCard from "./GalleryCard"

interface Props{
 images : GalleryDataTypes[]
}
function GalleryGrid({images}:Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image)=>(
            <GalleryCard key={image.id} img={image}/>
        ))}
    </div>
  )
}

export default GalleryGrid