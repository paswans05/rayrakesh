import PageHeader from "@/components/sections/page-header";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import CTA from "@/components/sections/cta";
import Reviews from "@/components/sections/reviews";

export const metadata = {
  title: "Community Services & Public Welfare | Rakesh Ray",
  description: "Discover public welfare services, sports development, youth empowerment, and social programs led by Rakesh Ray in Birgunj, Parsa.",
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
