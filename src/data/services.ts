import { StaticImageData } from "next/image";
import serviceIconA from "@/images/service-icon-a.png";
import serviceA from "@/images/service-a.jpg";
import serviceB from "@/images/service-b.jpg";
import serviceC from "@/images/service-c.jpg";
import serviceD from "@/images/service-d.jpg";

import servicev2A from "@/images/service-v2-a.jpg";
import servicev2B from "@/images/service-v2-b.jpg";
import servicev2C from "@/images/service-v2-c.jpg";
import servicev2D from "@/images/service-v2-d.jpg";
import servicev2E from "@/images/service-v2-e.jpg";
import servicev2F from "@/images/service-v2-f.jpg";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  icon: StaticImageData;
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    title: "Architectural Design",
    description: "Crafting data-driven roadmaps that align with your business goals. Marketing enthusiasts dedicated to helping businesses",
    image: serviceA,
    href: "/services/interior-architecture",
    icon: serviceIconA,
  },
  {
    id: "service-2",
    title: "Interior Design",
    description: "Crafting data-driven roadmaps that align with your business goals. Marketing enthusiasts dedicated to helping businesses",
    image: serviceB,
    href: "/services/residential-interior",
    icon: serviceIconA,
  },
  {
    id: "service-3",
    title: "Residential Renovation",
    description: "Crafting data-driven roadmaps that align with your business goals. Marketing enthusiasts dedicated to helping businesses",
    image: serviceC,
    href: "/services/spatial-planning",
    icon: serviceIconA,
  },
  {
    id: "service-4",
    title: "Design & Execution",
    description: "Crafting data-driven roadmaps that align with your business goals. Marketing enthusiasts dedicated to helping businesses",
    image: serviceD,
    href: "/services/turnkey-execution",
    icon: serviceIconA,
  },
];

export type ServiceTwoItem = {
  id: string;
  num: string;
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
};

export const SERVICES_TWO_DATA: ServiceTwoItem[] = [
  {
    id: "interior-architecture",
    num: "01",
    title: "Interior Architecture",
    description: "Master planning, structural spatial flow and core architectural transformations.",
    image: servicev2A,
    href: "/services/interior-architecture",
  },
  {
    id: "residential-interior",
    num: "02",
    title: "Residential Design",
    description: "Bespoke residences customized around the unique rhythms of daily living.",
    image: servicev2B,
    href: "/services/residential-interior",
  },
  {
    id: "commercial-interior",
    num: "03",
    title: "Commercial Spaces",
    description: "Inspiring corporate, retail and creative environments that elevate brand identity.",
    image: servicev2C,
    href: "/services/commercial-interior",
  },
  {
    id: "spatial-planning",
    num: "04",
    title: "Hospitality",
    description: "Memorable hotel, resort and restaurant interiors that blend luxury with efficiency.",
    image: servicev2D,
    href: "/services/spatial-planning",
  },
  {
    id: "custom-furniture-design",
    num: "05",
    title: "Furniture & Styling",
    description: "Curated loose and custom built-in furniture combinations for effortless elegance.",
    image: servicev2E,
    href: "/services/custom-furniture-design",
  },
  {
    id: "turnkey-execution",
    num: "06",
    title: "Art Direction",
    description: "Harmonious architectural finishes, statement lighting and curated art collections.",
    image: servicev2F,
    href: "/services/turnkey-execution",
  },
];
