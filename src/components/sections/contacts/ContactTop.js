"use client";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const ContactTop = () => {
	const { t } = useLanguage();

	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>
								{t("contact_page.subtitle", "Contact info")}
							</span>
							<h2 className="sec-title title-anim">
								<span>{t("contact_page.reach_prefix", "Reach ")}</span>{" "}
								{t("contact_page.reach_highlight", "Out to Us")}
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="contact-icon">
								<i className="tji-location-3"></i>
							</div>
							<h3 className="contact-title">
								{t("contact_page.our_location", "Our Location")}
							</h3>
							<p>993 Renner Burg, West Rond, MT 94251-030</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">
								{t("contact_page.email_us", "Email us")}
							</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:support@bexon.com">support@bexon.com</Link>
								</li>
								<li>
									<Link href="mailto:erakesh.ray@gmail.com ">
										erakesh.ray@gmail.com
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">
								{t("contact_page.call_us", "Call us")}
							</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:10095447818">+977 981-8888722</Link>
								</li>
								<li>
									<Link href="tel:10098801810">+1 (009) 880-1810</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">
								{t("contact_page.live_chat", "Live chat")}
							</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:livechat@bexon.com">
										livechat@bexon.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">
										{t("contact_page.need_help", "Need help?")}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
