// Importing the Blog type from the specified path for type checking and ensuring consistency in data structure
import { Blog } from "@/types/blog";

// Creating an array of blog data, each entry adhering to the Blog type structure
const blogData: Blog[] = [
  {
    id: 1, // Unique identifier for the blog post
    title: "Ghirardelli", // Title of the blog post
    paragraph:
      "Support JDE. Modified sales order, reports. Modified C BSFNs. CNC support. Server Administration.", // Brief description or summary of the blog post
    image: "/images/blog/download.jpeg", // Path to the image associated with the blog post
    author: {
      name: "Samuyl Joshi", // Name of the author
      image: "/images/blog/author-01.png", // Path to the author's image
      designation: "Graphic Designer", // Author's job title or role
    },
    tags: ["creative"], // Tags associated with the blog post for categorization
    publishDate: "2025", // The year the blog post was or will be published
  },
  {
    id: 2,
    title: "TSYS",
    paragraph:
      "Modify sales order to include credit card processing. Server and CNC administration.",
    image: "/images/blog/tsys.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Castiron.",
    paragraph:
      "Work on Java plugin for JDE, Peoplesoft and e-business suite. Integrate JDE using BSFN, XML Interop. Release tuxedo, SOAP plugin for Peoplesoft.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Dart Neurosciences.",
    paragraph:
      "Implement and support JDE. Upgrade to 9.1. CNC support.",
    image: "/images/blog/dart.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Carl Zeiss",
    paragraph:
      "EDI integration to SAP using XML.",
    image: "/images/blog/carl.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "lindt sprungli",
    paragraph:
      "Develop Weborder entry system for JDE and SAP using .net and realtime integration.",
    image: "/images/blog/lindt.jpeg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];

// Exporting the blogData array so it can be used in other parts of the application
export default blogData;
