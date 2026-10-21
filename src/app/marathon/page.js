import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import MarathonPageContent from "@/components/sections/marathon/MarathonPageContent";

export const metadata = {
	title: "Rakesh Ray Community Marathon | Run Together",
	description:
		"Join the Rakesh Ray Community Marathon in Nepal to celebrate fitness, unity, and community participation.",
	openGraph: {
		title: "Rakesh Ray Community Marathon | Run Together",
		description:
			"Join the Rakesh Ray Community Marathon in Nepal to celebrate fitness, unity, and community participation.",
		url: "/marathon",
		siteName: "Rakesh Ray Campaign",
		images: [
			{
				url: "/images/about/about-1.png",
				width: 1200,
				height: 630,
				alt: "Rakesh Ray Community Marathon — Run Together. Build a Better Tomorrow.",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rakesh Ray Community Marathon | Run Together",
		description:
			"Join the Rakesh Ray Community Marathon in Nepal to celebrate fitness, unity, and community participation.",
		images: ["/images/about/about-1.png"],
	},
};

export default function MarathonPage() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<MarathonPageContent />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
