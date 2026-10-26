import { Mail, CallAlt, MapPinFill } from "@/components/icons"

export const CONTACT_INFO = [
    { icon: MapPinFill, text: "Parsa, Sarlahi, Nepal" },
    { icon: CallAlt, text: "+977-9818888722" },
    { icon: Mail, text: "erakesh.ray@gmail.com " },
];

export interface DropdownChild {
    label: string;
    href?: string;
    icon?: string;
    children?: DropdownChild[];
}

export interface NavItem {
    label: string;
    href?: string;
    children?: DropdownChild[];
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Home",
        href: "/"
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];