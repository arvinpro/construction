export interface GalleryData {
  id: number;
  link: string;
}

export interface GalleryDataTypes {
  id: number;
  name: string;
  link: string;
}

const gallery: GalleryData[] = [
  { id: 1, link: "/gallery/img1.jpeg" },
  { id: 2, link: "/gallery/img2.jpeg" },
  { id: 3, link: "/gallery/img3.jpeg" },
  { id: 13, link: "/gallery/img13.jpeg" },
  { id: 4, link: "/gallery/img4.jpeg" },
  { id: 5, link: "/gallery/img5.jpeg" },
  { id: 6, link: "/gallery/img6.jpeg" },
  { id: 7, link: "/gallery/img7.jpeg" },
  { id: 8, link: "/gallery/img8.jpeg" },
  { id: 9, link: "/gallery/img9.jpeg" },
  { id: 10, link: "/gallery/img10.jpeg" },
  { id: 11, link: "/gallery/img11.jpeg" },
  { id: 12, link: "/gallery/img12.jpeg" },
  { id: 15, link: "/gallery/img5.jpeg" },
];

export const gallery2: GalleryDataTypes[] = [
  { id: 2, name: "gallery1", link: "/gallery/img2.jpeg" },
  { id: 11, name: "gallery1", link: "/gallery/img11.jpeg" },
  { id: 12, name: "gallery1", link: "/gallery/img12.jpeg" },
  { id: 24, name: "gallery1", link: "/gallery/img24.jpg" },
  { id: 25, name: "gallery1", link: "/gallery/img25.jpg" },
  { id: 3, name: "gallery1", link: "/gallery/img3.jpeg" },
  { id: 4, name: "gallery1", link: "/gallery/img4.jpeg" },
  { id: 5, name: "gallery1", link: "/gallery/img5.jpeg" },
  { id: 6, name: "gallery1", link: "/gallery/img6.jpeg" },
  { id: 15, name: "gallery1", link: "/gallery/img15.jpeg" },
  { id: 7, name: "gallery1", link: "/gallery/img7.jpeg" },
  { id: 8, name: "gallery1", link: "/gallery/img8.jpeg" },
  { id: 9, name: "gallery1", link: "/gallery/img9.jpeg" },
  { id: 10, name: "gallery1", link: "/gallery/img10.jpeg" },
  { id: 13, name: "gallery1", link: "/gallery/img13.jpeg" },
  { id: 20, name: "gallery1", link: "/gallery/img20.jpg" },
  { id: 21, name: "gallery1", link: "/gallery/img21.jpg" },
  { id: 22, name: "gallery1", link: "/gallery/img22.jpg" },
  { id: 23, name: "gallery1", link: "/gallery/img23.jpg" },
  { id: 26, name: "gallery1", link: "/gallery/img26.jpg" },
  { id: 27, name: "gallery1", link: "/gallery/img27.jpg" },

  { id: 28, name: "gallery01", link: "/gallery/bridge2.jpeg" },
  { id: 29, name: "gallery11", link: "/gallery/build4.jpeg" },
  { id: 30, name: "gallery21", link: "/gallery/road8.jpeg" },
  { id: 31, name: "gallery31", link: "/gallery/road9.jpeg" },
  { id: 32, name: "gallery41", link: "/gallery/img00.jpeg" },
  { id: 33, name: "gallery51", link: "/gallery/img01.jpeg" },
];

export default gallery;
