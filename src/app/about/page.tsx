import PageHeader from "@/components/sections/page-header";
import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import WhyChooseUs from "@/components/sections/why-choose-us";
import TeamCarousel from "@/components/sections/team-carousel";
import Reviews from "@/components/sections/reviews";

export const metadata = {
  title: "About Rakesh Ray | Journey, Vision & Social Work",
  description: "Learn about Rakesh Ray's background, commitment to public service, community welfare initiatives, and vision for the youth of Birgunj, Parsa, and Madhesh Province, Nepal.",
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

    </main>
  );
}
