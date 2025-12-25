import Image from "next/image";

const logos = [
  { name: "logo1", href: "/logo/logoipsum-395.png" },
  { name: "logo2", href: "/logo/logoipsum-398.png" },
  { name: "logo3", href: "/logo/logoipsum-402.png" },
  { name: "logo4", href: "/logo/logoipsum-408.png" },
  { name: "logo5", href: "/logo/logoipsum-410.png" },
  { name: "logo6", href: "/logo/logoipsum-414.png" },
];

function LogoSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
      {logos.map((item, index) => (
        <div key={index} className="flex items-center justify-around">
          <Image
            src={item.href}
            alt={item.name}
            height={150}
            width={150}
            className="object-contain filter grayscale"
          />
        </div>
      ))}
    </div>
  );
}

export default LogoSection;
