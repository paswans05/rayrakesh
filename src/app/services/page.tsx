import PageHeader from "@/components/sections/page-header";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import CTA from "@/components/sections/cta";
import Reviews from "@/components/sections/reviews";

export const metadata = {
  title: "Our Services | Rakesh Ray ",
  description: "Rakesh Ray is a NextJS Interior Design Landing Page Template with a modern design and a premium visual experience.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        heading="Our Service"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Service" },
        ]}
      />
      <Services headAlign="start" boxed={false} mode="light" />
      <HowItWorks />
      <CTA />
      <Reviews boxed={false} />
    </main>
  );
}
