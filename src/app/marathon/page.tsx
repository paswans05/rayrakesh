import React from "react";
import type { Metadata } from "next";
import MarathonHero from "@/components/sections/marathon/marathon-hero";
import MarathonPrizes from "@/components/sections/marathon/marathon-prizes";
import MarathonInfo from "@/components/sections/marathon/marathon-info";
import MarathonRoute from "@/components/sections/marathon/marathon-route";
import MarathonCommunity from "@/components/sections/marathon/marathon-community";
import MarathonRegistration from "@/components/sections/marathon/marathon-registration";

export const metadata: Metadata = {
  title: "Rakesh Marathon | 15 KM Community Race in Kathmandu, Nepal",
  description:
    "Join the Rakesh Marathon in Kathmandu, Nepal. An exclusive 15 KM single-distance community race with NPR 29,000 in total prizes (1st: NPR 15,000, 2nd: NPR 9,000, 3rd: NPR 5,000). Free online registration.",
  keywords: [
    "Rakesh Marathon",
    "15 KM Marathon",
    "Kathmandu Marathon",
    "Nepal Marathon",
    "Rakesh Ray",
    "Running in Nepal",
    "Community Marathon Nepal",
    "Marathon Prizes NPR",
  ],
  openGraph: {
    title: "Rakesh Marathon | 15 KM Community Race in Kathmandu, Nepal",
    description:
      "15 KM. One Challenge. One Community. NPR 29,000 total prize pool. Free online registration open for Kathmandu runners.",
    type: "website",
    locale: "en_US",
    siteName: "Rakesh Ray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Marathon — 15 KM Kathmandu Race",
    description: "Run Together. Build a Better Tomorrow. 15 KM race with NPR 29,000 in prizes.",
  },
};

export default function MarathonPage() {
  return (
    <React.Fragment>
      <MarathonHero />
      <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        <MarathonPrizes />
        <MarathonInfo />
        <MarathonRoute />
        <MarathonCommunity />
        <MarathonRegistration />
      </main>
    </React.Fragment>
  );
}
