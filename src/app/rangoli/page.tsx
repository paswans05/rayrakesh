import React from "react";
import type { Metadata } from "next";
import RangoliView from "./rangoli-view";

export const metadata: Metadata = {
  title: "Diwali Rangoli Festival 2026 | दीपोत्सव रङ्गोली प्रतियोगिता",
  description:
    "Participate in the Diwali Rangoli Festival led by Rakesh Ray in Parsa, Nepal. Create authentic handmade Rangolis, collect public votes, and win grand cash prizes for 1st, 2nd, and 3rd place! Medals for Top 10 and certificates for all.",
  keywords: [
    "Rangoli Festival",
    "Diwali Rangoli Festival",
    "Rangoli Competition Nepal",
    "Parsa Rangoli Competition",
    "Birgunj Rangoli",
    "Rakesh Ray Rangoli",
    "Diwali Prizes",
    "रङ्गोली प्रतियोगिता",
    "दीपावली रङ्गोली",
  ],
  openGraph: {
    title: "Diwali Rangoli Festival 2026 | Vote & Win Grand Prizes",
    description:
      "Celebrate creativity and Diwali tradition in Parsa, Nepal. Submit your Rangoli and vote for your favorites. 1st: NPR 21,000, 2nd: NPR 11,000, 3rd: NPR 5,100, medals for Top 10, certificates for all participants.",
    type: "website",
    locale: "en_US",
    siteName: "Rakesh Ray Official",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwali Rangoli Festival 2026 — Rakesh Ray",
    description: "Submit your Rangoli, collect votes, and win grand cash prizes this Diwali!",
  },
};

export default function RangoliPage() {
  return <RangoliView />;
}
