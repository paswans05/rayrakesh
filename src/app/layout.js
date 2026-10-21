import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";
import DomErrorBoundary from "@/components/shared/wrappers/DomErrorBoundary";
import { LanguageProvider } from "@/context_api/LanguageContext";

const bodyFont = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});
const headingFont = Mona_Sans({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rakeshray.com"),
	title: "Rakesh Ray — Mayoral Election Campaign | Parsa, Nepal",
	description:
		"Official campaign website for Rakesh Ray, candidate for Mayor of Parsa, Sarlahi District, Madhesh Province, Nepal. A Better Parsa, Together.",
	icons: {
		icon: "/images/logos/logo.png",
		apple: "/images/logos/logo.png",
	},
	other: {
		google: "notranslate",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			dir="ltr"
			className="notranslate"
			translate="no"
			suppressHydrationWarning
		>
			<body
				className={`${bodyFont.variable} ${headingFont.variable}`}
				suppressHydrationWarning
			>
				<DomErrorBoundary>
					<LanguageProvider>{children}</LanguageProvider>
				</DomErrorBoundary>
			</body>
		</html>
	);
}
