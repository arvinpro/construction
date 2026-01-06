import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Achivements from "./Achivements";
import WearePage from "./WearePage";
import { raleway, open } from "@/lib/font";
import ContactSection from "../home/ContactSection";

const data = [
  { per: "50%", name: "Project Completed" },
  { per: "20%", name: "Years of Expertise" },
  { per: "95%", name: "Delivery Rate" },
  { per: "100%", name: "Skilled Professional" },
];

const teams = [
  { image: "/johnny.jpg", name: "Rajesh Maharjan", role: "Sr. Developer" },
  { image: "/johnny.jpg", name: "Anika Joshi", role: "Product Manager" },
  { image: "/johnny.jpg", name: "Samir Patel", role: "UI/UX Designer" },
  { image: "/johnny.jpg", name: "Lina Zhang", role: "Data Analyst" },
  { image: "/johnny.jpg", name: "Carlos Mendez", role: "QA Engineer" },
  { image: "/johnny.jpg", name: "Johnny Deep", role: "Marketing Sepcialist" },
];

function AboutUsSection() {
  return (
    <div id="hero" className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-15">
        {/*top heading*/}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-black"></div>
              <span
                className={`text-black font-medium tracking-wide text-sm sm:text-base ${open.className}`}
              >
                About Us
              </span>
            </div>
            <h1
              className={`${raleway.className} text-black text-2xl sm:text-3xl lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
            >
              Who we are
            </h1>
          </div>
          <span
            className={`w-full lg:max-w-lg text-base lg:text-base text-black ${open.className} lg:text-left `}
          >
            Quick S and A Construction provides comprehensive solutions across
            Nepal’s construction sector, combining innovation, technical
            expertise, and professionalism to build lasting infrastructure.
          </span>
        </div>

        {/*big image*/}
        <div className="mt-10">
          <div className="relative overflow-hidden w-full h-[300px] md:h-[400px] lg:h-125 rounded-lg group cursor-pointer transition-all duration-500 hover:shadow-2xl">
            {/* Shine overlay effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <Image
              src={"/industry.jpg"}
              alt="industry"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-7 left-9">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center text-white">
                {data.map((items, index) => (
                  <span
                    key={index}
                    className="flex flex-col items-center gap-2 transition-transform duration-300 group-hover:scale-110"
                  >
                    <h1
                      className={`text-3xl lg:text-4xl font-semibold ${raleway.className}`}
                    >
                      {items.per}
                    </h1>
                    <p className={`text-xs sm:text-base ${open.className}`}>
                      {items.name}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p
              className={`font-normal leading-relaxed text-justify ${open.className}`}
            >
              Quick S and A Construction Pvt. Ltd., established in 2076 B.S., is
              a professional construction company headquartered in Kathmandu,
              Nepal. Since its inception, the company has been dedicated to
              delivering safe, sustainable, and innovative construction
              solutions that meet the evolving needs of clients and communities.
              We operate across a wide spectrum of services including
              residential and commercial building construction, road and bridge
              development, private residences, luxury resorts and villas,
              commercial complexes, and hydropower projects. Each project is
              executed with a focus on quality materials, advanced engineering
              techniques, and strict safety standards, ensuring long-lasting
              value and client satisfaction. With a team of experienced
              engineers, architects, and project managers, Quick S and A
              Construction has built a reputation for on-time project delivery,
              cost-effectiveness, and transparent client engagement. Our growing
              presence across Nepal reflects our ability to handle both
              small-scale residential projects and large-scale infrastructure
              developments with equal professionalism. At the core of our
              operations lies a commitment to excellence, sustainability, and
              innovation. Whether constructing a private home, a commercial hub,
              or a hydropower facility, we aim to build structures that not only
              serve today's needs but also contribute to Nepal's long-term
              development and energy future.
            </p>
          </div>
        </div>

        {/*Achivements*/}
        <Achivements />

        {/*big text*/}
        <div className="bg-gray-100 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] mt-10 md:mt-20">
          <div
            className={`${raleway.className} min-h-[160px] sm:min-h-[240px] lg:min-h-[360px]
    flex items-center justify-center px-4 sm:px-6`}
          >
            <h1
              className="text-center text-black font-semibold leading-tight
      text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              We deliver safe, sustainable, and innovative construction
              solutions.
              <span className="block mt-2 sm:mt-4 text-gray-800">
                Our vision is to lead Nepal’s construction sector <br /> with
                quality and trust.
              </span>
            </h1>
          </div>
        </div>

        {/*message from director*/}
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-10 md:mt-20">
          <div className="w-full lg:w-1/2 space-y-4 order-2 lg:order-1">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-black ${raleway.className}`}
            >
              Message from The Director
            </h1>

            <p className="text-xs sm:text-base text-black/70 font-semibold text-justify">
              As the Director of our respected construction company, I am
              delighted to share our journey and achievements with you. With
              more than ten years of experience in the construction field, I
              have had the honor of leading a team committed to excellence in
              every project we take on. Our dedication to innovation and quality
              guarantees that each project not only meets but surpasses our
              clients' expectations. We are excited to continue building a
              future characterized by excellence and innovation. Thank you for
              your trust and support.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative h-[330px] sm:h-[400px] md:h-[470px] overflow-hidden rounded-3xl order-1 lg:order-2">
            <Image
              src="/director.jpeg"
              alt="Director"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

        {/**/}
        <WearePage />

        {/*our team*/}
        <div className="mt-10 lg:mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-8 sm:w-10 lg:w-12 h-px bg-black"></div>
                <span
                  className={`text-black font-medium tracking-wide text-sm sm:text-base ${open.className}`}
                >
                  About Us
                </span>
              </div>
              <h1
                className={`${raleway.className} text-black text-2xl sm:text-3xl lg:text-[2.50rem] uppercase font-semibold leading-tight sm:leading-normal`}
              >
                Meet our team
              </h1>
            </div>
            <span
              className={`w-full lg:max-w-lg text-base lg:text-base text-black ${open.className} lg:text-left `}
            >
              Quick S and A Construction provides comprehensive solutions across
              Nepal’s construction sector, combining innovation, technical
              expertise, and professionalism to build lasting infrastructure.
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-15">
            {teams.map((team, index) => (
              <div key={index} className="flex flex-col gap-2 group">
                <div className="relative aspect-square overflow-hidden rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  {/* Shine overlay effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <Image
                    src={team.image}
                    alt={team.role}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text below image */}
                <div className="text-start">
                  <h1 className="text-base font-semibold text-black group-hover:text-sky-600 transition-colors duration-300">
                    {team.name}
                  </h1>
                  <p className="text-sm text-gray-500">{team.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*contact*/}
        <div className="mt-10 lg:mt-20">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
