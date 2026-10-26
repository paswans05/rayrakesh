import PageHeader from "@/components/sections/page-header";
import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import WhyChooseUs from "@/components/sections/why-choose-us";
import TeamCarousel from "@/components/sections/team-carousel";
import Reviews from "@/components/sections/reviews";

export const metadata = {
  title: "About Us | Rakesh Ray",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        heading="About Us"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About us" },
        ]}
      />
      <About />
      <CTA />
      <WhyChooseUs />
      <TeamCarousel />
      <Reviews />
    </main>
  );
}
