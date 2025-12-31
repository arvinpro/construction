export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string[];
  features: string[];
  imageLeft: boolean;
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Building Construction",
    description:
      "We specialize in constructing residential and commercial buildings that reflect modern design principles while ensuring durability and functionality. Our projects range from apartments and office towers to multi-use complexes, all delivered with strict quality control and attention to detail.",
    image:[
      "/gallery/img11.jpeg",
      "/gallery/build1.jpeg",
      "/gallery/build2.jpeg",
      "/gallery/build3.jpeg",
      "/gallery/build4.jpeg",
    ],   
    features: [
      "Contemporary residential and commercial architecture",
      "Eco-friendly and energy-efficient building solutions",
      "End-to-end project management from planning to handover",
    ],
    imageLeft: true,
  },

  {
    id: 2,
    title: "Road Construction",
    description:
      "Roads are the backbone of national development. We deliver high-quality highways and local roads that connect cities, towns, and rural areas, ensuring safe and smooth transportation. Using advanced equipment and durable materials, our roads stand the test of time and weather.",
    image:[
       "/servicepage/road.jpeg",
       "/gallery/road2.jpeg",
       "/gallery/road3.jpeg",
       "/gallery/road4.jpeg",
       "/gallery/road5.jpeg",
      ],
     
    features: [
      "Highway and regional road development",
      "Asphalt, concrete, and hybrid road solutions",
      "Focus on long-term durability and road safety",
    ],
    imageLeft: false,
  },

  {
    id: 3,
    title: "Bridge Construction",
    image:[
      "/servicepage/bridge.jpg",
      "/gallery/bridge1.jpeg",
      "/gallery/bridge2.jpeg",
      "/gallery/bridge3.jpeg",
    ],
    description:
      "We design and build strong bridges that connect people and enable commerce. Whether over rivers, valleys, or rugged terrains, our bridge projects embody safety, structural integrity, and engineering excellence.",
    features: [
      " Steel, concrete, and composite bridge designs",
      "Expertise in challenging landscapes and river crossings",
      "Compliance with global safety and engineering standards",
    ],
    imageLeft: true,
  },

  {
    id: 4,
    title: "Private Residences",
    description:
      "A home should be a reflection of its owner’s lifestyle and dreams. We bring those visions to life with customized residential projects that combine modern aesthetics with practical layouts. Every detail is tailored to ensure comfort, safety, and long-lasting value.",
    image:[
      "/servicepage/private.jpeg",
      "/gallery/img10.jpeg",
      "/gallery/img14.jpeg",
      "/gallery/img15.jpeg",
    ],
     
    features: [
      "Bespoke home design and construction",
      "Integration of interiors with sustainable architecture",
      "Premium finishes and quality craftsmanship",
    ],
    imageLeft: false,
  },

  {
    id: 5,
    title: "Resorts & Villas",
    description:
      "We deliver luxury resort and villa projects in Nepal’s most scenic destinations. Our designs blend natural landscapes with contemporary architecture, creating spaces that are not only visually stunning but also functional for leisure and tourism.",
    image:[
      "/servicepage/resort.jpg",
      "/gallery/img20.jpg",
      "/gallery/img21.jpg",
    ],
    features: [
      "High-end resorts and hospitality projects",
      "Custom-designed villas with luxury amenities",
      "Eco-conscious designs harmonizing with nature",
    ],
    imageLeft: true,
  },

  {
    id: 6,
    title: "Commercial Complexes",
    description:
      "Our commercial construction services focus on creating efficient, modern, and adaptable spaces for businesses to thrive. From shopping centers and office blocks to business hubs, we provide infrastructure that supports economic growth and modern lifestyles.",
    image: [
      "/servicepage/commercial.jpeg",
      "/homepage/home2.jpeg",
      "/homepage/home3.jpeg"
    ],
    features: [
      "Commercial hubs for offices and retail spaces",
      "Flexible layouts for multipurpose use",
      "Smart designs focused on accessibility and energy efficiency",
    ],
    imageLeft: false,
  },

  {
    id: 7,
    title: "Hydropower Projects",
    description:
      "Nepal’s future lies in clean, renewable energy — and we contribute through specialized hydropower construction. From dam and tunnel excavation to powerhouse infrastructure, our expertise covers every aspect of hydropower projects, helping to secure sustainable energy for the nation.",
    image: [
      "/servicepage/hydropower.jpg",
      "/gallery/hydro1.jpg",
       "/gallery/hydro2.jpg",
        "/gallery/hydro3.jpg",
    ],
    features: [
      "Dam and tunnel construction",
      "Civil works for powerhouses",
      "Long-term solutions supporting renewable energy growth",
    ],
    imageLeft: true,
  },
];
