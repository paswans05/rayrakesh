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
    default: "Rakesh Ray - NextJS Interior Design Landing Page Template",
    template: "%s | Rakesh Ray - NextJS Interior Design Landing Page Template",
  },
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
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
