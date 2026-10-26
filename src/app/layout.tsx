import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavbarProvider } from "@/context/navbar-context";
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
      <body suppressHydrationWarning={true} className={`prose-heading:text- min-h-full flex flex-col text-body`}>
        <Preloader />
        <NavbarProvider>
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
          </TooltipProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
