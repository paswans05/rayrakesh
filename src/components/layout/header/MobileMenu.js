"use client";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "@/components/shared/language/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const { t } = useLanguage();
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${isMobileMenuOpen ? "opened" : ""
					}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<img src="/images/logos/logo.png" alt="Rakesh Ray Logo" />
								</Link>
							</div>
							<div className="d-flex align-items-center gap-2">
								<LanguageSwitcher isMobile={true} />
								<div className="hamburger_close">
									<button className="hamburger_close_btn" onClick={handleClick}>
										<i className="fa-thin fa-times"></i>
									</button>
								</div>
							</div>
						</div>
						<MobileNavbar onClose={handleClick} />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">{t("header.contact_info", "Contact Info")}</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">{t("header.phone", "Phone")}</span>
									<Link className="contact-link" href="tel:9779818888722">
										+977 981-8888722
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">{t("header.email", "Email")}</span>
									<Link className="contact-link" href="mailto:erakesh.ray@gmail.com">
										erakesh.ray@gmail.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">{t("header.location", "Location")}</span>
									<span className="contact-link">
										{t("footer.location", "Parsa, Sarlahi, Madhesh Province, Nepal")}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h5 className="hamburger-title">{t("header.follow_us", "Follow Us")}</h5>
						<div className="social-links style-3">
							<ul>
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
