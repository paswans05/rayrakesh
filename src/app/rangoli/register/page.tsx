import React from "react";
import type { Metadata } from "next";
import RangoliView from "../rangoli-view";

export const metadata: Metadata = {
  title: "Submit Your Diwali Rangoli | दीपोत्सव रङ्गोली दर्ता",
  description:
    "Submit your Diwali Rangoli entry. Fill in your artist details, upload your authentic Rangoli photo, and collect votes to win grand cash prizes!",
  keywords: [
    "Rangoli Register",
    "Submit Rangoli",
    "Diwali Rangoli Registration",
    "रङ्गोली प्रतियोगिता दर्ता",
  ],
  openGraph: {
    title: "Submit Your Diwali Rangoli 2026 — Official Registration",
    description: "Upload your Rangoli photo, collect votes, and win grand cash prizes!",
    type: "website",
  },
};

export default function RangoliRegisterPage() {
  return <RangoliView initialOpenSubmitModal={true} />;
}
