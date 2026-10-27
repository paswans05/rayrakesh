import projectA from "@/images/project-a.jpg";
import projectB from "@/images/project-b.jpg";
import projectC from "@/images/project-c.jpg";
import projectD from "@/images/project-d.jpg";

export const PROJECTS_DATA = [
  {
    id: "project-001",
    title: "Construction Work in Parsa",
    category: "Construction",
    location: "Parsa, Nepal",
    year: "Current focus",
    client: "Cloud Construction Pvt. Ltd.",
    image: projectA,
    gallery: [projectA, projectB, projectD, projectC],
    excerpt: "Construction imagery representing the type of work associated with Cloud Construction Pvt. Ltd.",
    description: "This section presents the construction and community areas connected with Rakesh Ray and Cloud Construction Pvt. Ltd.",
    subDescription: "The imagery is illustrative and is used to communicate the company and campaign focus.",
    challenge: "Construction work depends on careful planning, safe execution, and clear coordination with local communities.",
    result: "The goal is to support practical, well-planned development in Parsa."
  },
  {
    id: "project-002",
    title: "Neighborhood Roads & Drainage",
    category: "Community Infrastructure",
    location: "Parsa, Nepal",
    year: "Community focus",
    client: "Parsa Community",
    image: projectB,
    gallery: [projectB, projectD, projectA, projectC],
    excerpt: "A community-focused view of paved roads, drainage, and accessible public spaces.",
    description: "Well-maintained local infrastructure can make everyday travel safer and more convenient for residents.",
    subDescription: "This image illustrates an area of community development relevant to Parsa.",
    challenge: "Local improvements need to account for water flow, safe walking routes, and daily use by residents.",
    result: "The campaign highlights practical infrastructure that supports neighborhood life."
  },
  {
    id: "project-003",
    title: "Rakesh Marathon",
    category: "Community Sports",
    location: "Parsa, Nepal",
    year: "15 KM Community Race",
    client: "Rakesh Marathon",
    image: projectC,
    gallery: [projectC, projectB, projectD, projectA],
    excerpt: "A community running event that brings people together through fitness and participation.",
    description: "The Rakesh Marathon is a 15 KM community race planned for Parsa, Nepal.",
    subDescription: "Every participant receives a certificate, while the top 10 finishers receive medals.",
    challenge: "A community race requires a clear route, participant support, and an emergency safety plan.",
    result: "The event aims to encourage healthy living and community participation."
  },
  {
    id: "project-004",
    title: "Community Development Dialogue",
    category: "Community Engagement",
    location: "Parsa, Nepal",
    year: "Ongoing conversation",
    client: "Parsa Residents",
    image: projectD,
    gallery: [projectD, projectB, projectA, projectC],
    excerpt: "Community conversations that help identify local priorities and practical development needs.",
    description: "Listening to residents is an essential part of understanding local needs and planning future improvements.",
    subDescription: "The image illustrates a community discussion in Parsa.",
    challenge: "Different neighborhoods have different priorities, so local input matters.",
    result: "The campaign seeks to keep the conversation open and focused on community needs."
  }
];

export type Project = (typeof PROJECTS_DATA)[number];
