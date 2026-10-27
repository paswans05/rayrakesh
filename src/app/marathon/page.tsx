import React from "react";
import type { Metadata } from "next";
import MarathonHero from "@/components/sections/marathon/marathon-hero";
import MarathonPrizes from "@/components/sections/marathon/marathon-prizes";
import MarathonInfo from "@/components/sections/marathon/marathon-info";
import MarathonRoute from "@/components/sections/marathon/marathon-route";
import MarathonCommunity from "@/components/sections/marathon/marathon-community";
import MarathonRegistration from "@/components/sections/marathon/marathon-registration";

export const metadata: Metadata = {
  title: "Rakesh Marathon | 15 KM Community Race in Parsa, Nepal",
  description:
    "Join the Rakesh Marathon in Parsa, Nepal. The top three share NPR 50,000 in cash prizes; all participants receive a certificate, and the top 10 finishers receive medals. Emergency support is planned.",
  keywords: [
    "Rakesh Marathon",
    "15 KM Marathon",
    "Parsa Marathon",
    "Nepal Marathon",
    "Rakesh Ray",
    "Running in Nepal",
    "Community Marathon Nepal",
    "Marathon Prizes NPR",
  ],
  openGraph: {
    title: "Rakesh Marathon | 15 KM Community Race in Parsa, Nepal",
    description:
      "15 KM. One Challenge. One Community. NPR 50,000 in cash prizes. Certificates for all participants and medals for the top 10.",
    type: "website",
    locale: "en_US",
    siteName: "Rakesh Ray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Marathon — 15 KM Parsa Race",
    description: "Run Together. Build a Better Tomorrow. 15 KM race with NPR 50,000 in prizes.",
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
