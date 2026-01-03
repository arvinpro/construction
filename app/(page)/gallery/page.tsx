import GallerySection from "@/components/gallery/GallerySection"

export const metadata = {
  title: "Our Gallery",
  description: "View our completed construction projects",
};

function page() {
  return (
    <div>
        <GallerySection />
    </div>
  )
}

export default page