"use client";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
	const { t, language } = useLanguage();

	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.png" alt="Rakesh Ray Logo" />
									</Link>
								</div>
								<div className="footer-text">
									<h6 className="text-white mb-2" style={{ fontWeight: "700" }}>
										{t("footer.brand_tagline", "Rakesh Ray — A Better Parsa, Together.")}
									</h6>
									<p>
										{t(
											"footer.desc",
											"Dedicated to the sustainable development, improved infrastructure, and transparent public service of Parsa, Sarlahi District, Madhesh Province, Nepal."
										)}
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">{t("footer.quick_links", "Quick Links")}</h5>
								<ul>
									<li>
										<Link href="/">{t("nav.home", "Home")}</Link>
									</li>
									<li>
										<Link href="#vision">{t("solutions.subtitle", "Vision & Priorities")}</Link>
									</li>
									<li>
										<Link href="#about">{t("about.title_highlight", "About Rakesh Ray")}</Link>
									</li>
									<li>
										<Link href="/contact">{t("nav.contact", "Contact Us")}</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">{t("footer.contact_info", "Campaign Contact")}</h5>
								<ul>
									<li>
										<Link href="tel:9779818888722">+977 981-8888722</Link>
									</li>
									<li>
										<Link href="mailto:erakesh.ray@gmail.com">erakesh.ray@gmail.com</Link>
									</li>
									<li>
										<span>
											{t("footer.location", "Parsa, Sarlahi, Madhesh Province, Nepal")}
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-5 col-md-6">
							<div
								className="footer-widget widget-subscribe wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h3 className="title">
									{t("footer.newsletter_title", "Stay Informed with Campaign Updates")}
								</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder={t("footer.newsletter_placeholder", "Enter your email address")}
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											{t("footer.agree_terms", "Agree to receive campaign updates?")}
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:9779818888722">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+977 981-8888722</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:erakesh.ray@gmail.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">erakesh.ray@gmail.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
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
								<div className="copyright-text">
									<p>
										&copy; 2026&nbsp;
										<Link href="/">
											{language === "ne" ? "राकेश राय — राम्रो पर्सा, हामी सबैको साथ" : "Rakesh Ray — A Better Parsa, Together"}
										</Link>{" "}
										| {t("footer.rights_reserved", "All rights reserved.")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
