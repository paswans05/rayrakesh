import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavbarProvider } from "@/context/navbar-context";
import { RegistrationModalProvider } from "@/context/registration-modal-context";
import MarathonRegistrationModal from "@/components/sections/marathon/marathon-registration-modal";
import Preloader from "@/components/ui/preloader";
import "@/css/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rakesh Ray | Politician & Social Worker — Birgunj, Parsa, Nepal",
    template: "%s | Rakesh Ray",
  },
  description:
    "Official website of Rakesh Ray, dedicated politician and social worker from Birgunj, Parsa, Madhesh Province, Nepal. Leading community development, youth empowerment, and the 15 KM Rakesh Marathon.",
  keywords: [
    "Rakesh Ray",
    "Rakesh Ray Birgunj",
    "Rakesh Ray Parsa",
    "Rakesh Ray Nepal",
    "Politician Birgunj Parsa",
    "Social Worker Nepal",
    "Madhesh Province Leader",
    "Rakesh Marathon",
    "15 KM Marathon Nepal",
    "Parsa Marathon",
    "Youth Empowerment Nepal",
    "Jingadawa Parsa",
  ],
  authors: [{ name: "Rakesh Ray" }],
  creator: "Rakesh Ray",
  publisher: "Rakesh Ray",
  openGraph: {
    title: "Rakesh Ray | Politician & Social Worker — Birgunj, Parsa",
    description:
      "Official website of Rakesh Ray, dedicated politician and social worker from Birgunj, Parsa, Madhesh Province, Nepal. Leading community initiatives, youth empowerment, and the 15 KM Rakesh Marathon.",
    siteName: "Rakesh Ray",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Ray | Politician & Social Worker — Birgunj, Parsa",
    description:
      "Official website of Rakesh Ray — Leader, visionary, and organizer of the 15 KM Rakesh Marathon in Parsa, Madhesh Province, Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body suppressHydrationWarning={true} className={`min-h-full flex flex-col text-body`}>
        <Preloader />
        <NavbarProvider>
          <RegistrationModalProvider>
            <TooltipProvider>
              <Navbar />
              {children}
              <Footer />
              <MarathonRegistrationModal />
            </TooltipProvider>
          </RegistrationModalProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
