import React from 'react'
import OurServices from '@/components/services/OurServices'


export const metadata = {
  title: "Our Services",
  description: "Construction, renovation, and engineering services in Nepal",

  openGraph: {
    title: "Construction Services in Nepal",
    description:
      "Explore residential, commercial, and infrastructure construction services.",
    images: ["/og/services.jpg"],
  },
};

function page() {
  return (
    <div>
      <OurServices />
    </div>
  )
}

export default page