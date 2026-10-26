import { Mail, CallAlt, MapPinFill } from "@/components/icons"

export const CONTACT_INFO = [
    { icon: MapPinFill, text: "Outstanding service in New York City" },
    { icon: CallAlt, text: "+1 (123) 456-7890" },
    { icon: Mail, text: "info@Rakesh Ray.com" },
];

export const NAV_ITEMS = [
    {
        label: "Home",
        href: "/"
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