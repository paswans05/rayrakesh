import blogA from "@/images/blog-a.jpg"
import blogB from "@/images/blog-b.jpg"
import blogC from "@/images/blog-c.jpg"
import blogD from "@/images/blog-d.jpg"
import blogE from "@/images/blog-e.jpg"
import blogF from "@/images/blog-f.jpg"
import avatarA from "@/images/avatar-a.jpg"
import avatarB from "@/images/avatar-b.jpg"
import avatarC from "@/images/avatar-c.jpg"
import avatarD from "@/images/avatar-d.jpg"
import avatarE from "@/images/avatar-e.jpg"
import avatarF from "@/images/avatar-f.jpg"

export const BLOG_DATA = [
    {
        "id": "post-001",
        "image": blogA,
        "title": "Elevate Every Corner With Sleek Interior Concepts",
        "excerpt": "Transform your living space with modern minimalist aesthetics, sleek furniture arrangements, and harmonious color palettes that elevate every room in your home.",
        "author": { "name": "Javier Morales", "avatar": avatarA },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-002",
        "image": blogB,
        "title": "The Pros and Cons of Large Format Porcelain",
        "excerpt": "Explore the durability, seamless aesthetic, and installation requirements of large format porcelain tiles for luxury residential floors and walls.",
        "author": { "name": "Amara Whitfield", "avatar": avatarB },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-003",
        "image": blogC,
        "title": "Functionality and Style in Modern Architecture",
        "excerpt": "How contemporary architectural design bridges the gap between sleek aesthetic choices and practical everyday living comfort.",
        "author": { "name": "Daniel Osei", "avatar": avatarC },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-004",
        "image": blogD,
        "title": "Functional Design Trends That Blend Style",
        "excerpt": "Discover key interior design trends that prioritize multipurpose furniture, smart spatial planning, and timeless visual appeal.",
        "author": { "name": "Priya Nandakumar", "avatar": avatarD },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-005",
        "image": blogE,
        "title": "Transform Your Home With the Modern Interior Design Tips",
        "excerpt": "Simple yet impactful interior design strategies to refresh your home, optimize natural light, and create a sophisticated atmosphere.",
        "author": { "name": "Lucas Ferreira", "avatar": avatarE },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-006",
        "image": blogF,
        "title": "Inspired Spaces: Blending Function and Aesthetic",
        "excerpt": "A look into curated living rooms, open layout dining spaces, and architectural accents that balance functionality with inspiring beauty.",
        "author": { "name": "Sofia Marchetti", "avatar": avatarF },
        "date": "2025-01-19",
        "url": "#"
    },
    {
        "id": "post-007",
        "image": blogA,
        "title": "Mastering Minimalist Living: Less Clutter, More Space",
        "excerpt": "Learn how decluttering and adopting purposeful interior layouts can make any modern living space feel twice as large and serene.",
        "author": { "name": "Ethan Brooks", "avatar": avatarA },
        "date": "2025-01-25",
        "url": "#"
    },
    {
        "id": "post-008",
        "image": blogB,
        "title": "The Ultimate Guide to Sustainable Materials in Home Design",
        "excerpt": "From reclaimed timber to recycled glass, explore eco-friendly building materials that add character and sustainability to your home.",
        "author": { "name": "Nadia Petrov", "avatar": avatarB },
        "date": "2025-02-02",
        "url": "#"
    },
    {
        "id": "post-009",
        "image": blogC,
        "title": "How Color Psychology Shapes Your Living Space Experience",
        "excerpt": "Understand how warm tones, subtle neutrals, and accent colors influence mood, productivity, and relaxation in interior environments.",
        "author": { "name": "Marcus Chen", "avatar": avatarC },
        "date": "2025-02-10",
        "url": "#"
    },
    {
        "id": "post-010",
        "image": blogD,
        "title": "Creating Cozy Lighting Layers for Warm Modern Homes",
        "excerpt": "Combine ambient, task, and accent lighting to create depth, warmth, and inviting atmosphere throughout every corner of your interior.",
        "author": { "name": "Isabela Rocha", "avatar": avatarD },
        "date": "2025-02-18",
        "url": "#"
    },
    {
        "id": "post-011",
        "image": blogE,
        "title": "Maximizing Small Spaces with Smart Furniture Choices",
        "excerpt": "Clever storage solutions, modular seating, and visual spatial tricks to turn compact apartments into spacious modern sanctuaries.",
        "author": { "name": "Elena Rostova", "avatar": avatarE },
        "date": "2025-02-24",
        "url": "#"
    },
    {
        "id": "post-012",
        "image": blogF,
        "title": "Biophilic Design: Bringing Nature Into Contemporary Interiors",
        "excerpt": "Integrate indoor greenery, natural light, and organic textures to improve indoor air quality and bring peaceful nature indoors.",
        "author": { "name": "Oliver Vance", "avatar": avatarF },
        "date": "2025-03-01",
        "url": "#"
    }
];

export type BlogPost = typeof BLOG_DATA[number] & {
  featured?: boolean;
  comments?: number;
};