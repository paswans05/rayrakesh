import teamCeo from "@/images/team-ceo.jpg";
import teamA from "@/images/team-a.jpg";
import teamB from "@/images/team-b.jpg";
import teamC from "@/images/team-c.jpg";
import teamD from "@/images/team-d.jpg";
import teamE from "@/images/team-e.jpg";
import teamF from "@/images/team-f.jpg";
import teamG from "@/images/team-g.jpg";
import teamH from "@/images/team-h.jpg";

export const CEO_DATA = {
  name: "Rakesh Ray",
  role: "Founder / Ceo",
  subtitle: "Our Team",
  title: "Expert Designers, Dedicated to Your Vision",
  description1: "Our custom kitchen living concepts create seamless, spacious environments centered around your lifestyle.",
  description2: "Backed by extensive expertise in high-end hospitality design, our team has led and executed large scale restaurant and racecourse projects across the UK. Our portfolio showcases a versatile range of styles—from transitional and traditional to minimalist and contemporary.",
  image: teamCeo,
};

export const TEAM_MEMBERS_DATA = [
  {
    id: "team-001",
    name: "Rakesh Ray",
    role: "Founder / Ceo",
    image: teamD,
    socials: [
      { name: "facebook", href: "#" },
      { name: "twitter", href: "#" },
      { name: "instagram", href: "#" },
      { name: "pinterest", href: "#" },
    ]
  },
  {
    id: "team-002",
    name: "Sanjay Paswan",
    role: "Software Engineer",
    image: teamB,
    socials: [
      { name: "facebook", href: "#" },
      { name: "twitter", href: "#" },
      { name: "instagram", href: "#" },
      { name: "pinterest", href: "#" },
    ]
  },

];

export type TeamMember = (typeof TEAM_MEMBERS_DATA)[number];
