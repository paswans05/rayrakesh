import { Mail, CallAlt, MapPinFill } from "@/components/icons"

export const CONTACT_INFO = [
    { icon: MapPinFill, text: "Outstanding service in New York City" },
    { icon: CallAlt, text: "+1 (123) 456-7890" },
    { icon: Mail, text: "info@Rakesh Ray.com" },
];

export const NAV_ITEMS = [
    {
        label: "Home",
        children: [
            { label: "Home 1", href: "/" },
            { label: "Home 2", href: "/home-2" },
            { label: "Home 3", href: "/home-3" },
        ],
    },
    { label: "About", href: "/about" },
    {
        label: "Services", href: "/services"
    },
    {
        label: "Projects", href: "/projects"
    },
    {
        label: "Pages",
        children: [
            { label: "Team", href: "/team" },
            { label: "FAQs", href: "/faqs" },
            { label: "Blog", href: "/blog" },
        ],
    },
    { label: "Contact", href: "/contact" },
];