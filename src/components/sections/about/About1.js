"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import Link from "next/link";

const About1 = () => {
	const { t } = useLanguage();

	return (
		<section id="about" className="tj-about-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className={`about-img-area wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed="0.8"
									src="/images/about/about-1.png"
									alt="Rakesh Ray - Parsa Development"
									width={653}
									height={675}
								/>
							</div>
							<div className="box-area">
								<div
									className="experience-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<span className="sub-title">
										{t("about.experiences", "Commitment")}
									</span>
									<div className="customers-number">
										{t("about.exp_years", "Parsa")}
									</div>
									<h6 className="customers-text">
										{t("about.exp_text", "Dedicated to the Development of Our Municipality")}
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div
							className={`about-content-area style-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>
									{t("about.subtitle", "Candidate for Mayor, Parsa")}
								</span>
								<h2 className="sec-title title-anim">
									{t("about.title_prefix", "About ")}
									<span>{t("about.title_highlight", "Rakesh Ray")}</span>
								</h2>
								<p className="desc mt-3 wow fadeInUp" data-wow-delay=".4s">
									{t(
										"about.desc",
										"Rakesh Ray is a dedicated professional with a background in the construction business through Cloud Construction Pvt Ltd. Born and rooted in Parsa, Sarlahi District, he is committed to utilizing his practical experience in planning, infrastructure development, and organizational management to contribute toward the comprehensive development of Parsa."
									)}
								</p>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ButtonPrimary
									text={t("about.learn_more", "Meet Rakesh Ray")}
									url={"/contact"}
									isTextBtn={true}
								/>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="client-review-cont wow fadeInUp"
								data-wow-delay=".7s"
							>
								<div className="rating-area">
									<Ratings1 />
								</div>
								<p className="desc">
									{t(
										"about.quote",
										"Our goal is simple and clear: to work together with every citizen of Parsa to build better roads, stronger schools, accessible clinics, and honest public governance."
									)}
								</p>
								<div className="client-info-area">
									<div className="client-info">
										<h6 className="title">
											{t("about.founder_name", "Rakesh Ray")}
										</h6>
										<span className="designation">
											{t("about.founder_role", "Cloud Construction Pvt Ltd")}
										</span>
									</div>
									<span className="quote-icon">
										<i className="tji-quote"></i>
									</span>
								</div>
							</div>
							<div className="video-img wow fadeInUp" data-wow-delay=".9s">
								<Image
									src="/images/about/about-2.webp"
									alt="Community Gathering"
									width={224}
									height={234}
								/>
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
