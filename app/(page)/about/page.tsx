import AboutUsSection from "@/components/about/AboutUsSection"

export const metadata = {
  title: "About Us",
  description: "Learn more about our construction company and experience",

  openGraph: {
    title: "About S & A Construction Company Nepal",
    description:
      "Discover our journey, expertise, and commitment to quality construction.",
    images: ["/og/og-about.png"],
  },
};

function page() {
  return (
    <div>
      <AboutUsSection />
    </div>
  )
}

export default page