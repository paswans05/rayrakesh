import React from "react";
import type { Metadata } from "next";
import MarathonHero from "@/components/sections/marathon/marathon-hero";
import MarathonGallery from "@/components/sections/marathon/marathon-gallery";
import MarathonPrizes from "@/components/sections/marathon/marathon-prizes";
import MarathonInfo from "@/components/sections/marathon/marathon-info";
import MarathonRoute from "@/components/sections/marathon/marathon-route";
import MarathonCommunity from "@/components/sections/marathon/marathon-community";

export const metadata: Metadata = {
  title: "Rakesh Marathon | 15 KM Community Race in Parsa, Nepal",
  description:
    "Rakesh Marathon in Parsa, Nepal completed with historic success! View real event photos, winners, award highlights, and download your official Certificate of Participation.",
  keywords: [
    "Rakesh Marathon",
    "15 KM Marathon",
    "Parsa Marathon",
    "Nepal Marathon",
    "Rakesh Ray",
    "Running in Nepal",
    "Marathon Event Photos",
    "Marathon Certificate",
    "Community Marathon Nepal",
    "Marathon Prizes NPR",
  ],
  openGraph: {
    title: "Rakesh Marathon | 15 KM Race Concluded in Parsa, Nepal",
    description:
      "15 KM. One Challenge. One Community. Event completed with great success! View real race photos and download participation certificates.",
    type: "website",
    locale: "en_US",
    siteName: "Rakesh Ray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Marathon — 15 KM Parsa Race Completed",
    description: "Event completed with great community participation. View race day photos & download certificates.",
  },
};

export default function MarathonPage() {
  return (
    <React.Fragment>
      <MarathonHero />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <MarathonGallery />
        <MarathonPrizes />
        <MarathonInfo />
        <MarathonRoute />
        <MarathonCommunity />
      </main>
    </React.Fragment>
  );
}
