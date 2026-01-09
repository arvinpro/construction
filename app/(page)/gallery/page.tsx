import GallerySection from "@/components/gallery/GallerySection"

export const metadata = {
  title: "Our Gallery",
  description: "View our completed construction projects",

  openGraph: {
    title: "Construction Project Gallery",
    description:
      "Browse completed projects by S & A Construction Company Nepal.",
    images: ["/og/gallery.jpg"],
  },
};

function page() {
  return (
    <div>
        <GallerySection />
    </div>
  )
}

export default page