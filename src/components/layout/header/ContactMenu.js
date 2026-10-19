"use client";
import Link from "next/link";
import LanguageSwitcher from "@/components/shared/language/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
	const { t } = useLanguage();
	const handleClick = () => {
		setIsContactOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`tj-offcanvas-area d-none d-lg-block  ${isContactOpen ? "opened" : ""
					}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<img src="/images/logos/logo-2.webp" alt="Logo" />
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
						<div className="offcanvas-text">
							<p>
								Developing personalize our customer journeys to increase
								satisfaction & loyalty of our expansion recognized by industry
								leaders.
							</p>
						</div>
						<div className="hamburger-search-area">
							<h5 className="hamburger-title">Search Now!</h5>
							<div className="hamburger_search">
								<form method="get" action="/">
									<button type="submit">
										<i className="tji-search"></i>
									</button>
									<input
										type="search"
										autoComplete="off"
										name="s"
										placeholder={t("header.search_placeholder", "Search here...")}
									/>
								</form>
							</div>
						</div>
						<div className="hamburger-infos">
							<h5 className="hamburger-title">
								{t("header.contact_info", "Contact Info")}
							</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">{t("header.phone", "Phone")}</span>
									<Link className="contact-link" href="tel:10095447818">
										+977 981-8888722
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">{t("header.email", "Email")}</span>
									<Link className="contact-link" href="mailto:erakesh.ray@gmail.com ">
										erakesh.ray@gmail.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">{t("header.location", "Location")}</span>
									<span className="contact-link">
										993 Renner Burg, West Rond, MT 94251-030
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h5 className="hamburger-title">
							{t("header.follow_us", "Follow Us")}
						</h5>
						<div className="social-links style-3">
							<ul>
								<li>
									<a href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMenu;
