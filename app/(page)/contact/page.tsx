import React from 'react'
import ContactPage from '@/components/contact/ContactPage'


export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our construction team in Nepal",

  openGraph: {
    title: "Contact S & A Construction Company Nepal",
    description:
      "Reach out to us for trusted construction services across Nepal.",
    images: ["/og/contact.jpg"],
  },
};

function page() {
  return (
    <div>
        <ContactPage />
    </div>
  )
}

export default page