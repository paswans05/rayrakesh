import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Rakesh Ray Marathon",
  description:
    "Official organizer administration portal for managing runner registrations, bib allocations, and kit inventory for the 15 KM Rakesh Marathon in Parsa, Nepal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

