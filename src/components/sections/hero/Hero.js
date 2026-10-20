"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
	const { t } = useLanguage();

	return (
		<section className="tj-banner-section section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<span className="sub-title wow fadeInDown" data-wow-delay=".2s">
							<i className="tji-excellence"></i>{" "}
							{t("hero.badge", "Together for a Better Parsa")}
						</span>
						<h1 className="banner-title title-anim">
							{t("hero.title_prefix", "A Better Parsa, ")}
							<span>{t("hero.title_highlight", "Together.")}</span>
						</h1>
						<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
							<Link className="banner-link" href="#vision">
								<span>
									<i className="tji-arrow-right-big"></i>
								</span>
							</Link>
							<div className="banner-desc">
								{t(
									"hero.desc",
									"Working toward a brighter future for Parsa through improved infrastructure, quality education, accessible healthcare, local opportunities, and transparent public services."
								)}
							</div>
						</div>
						<div
							className="banner-btn-wrap d-flex flex-wrap align-items-center gap-3 mt-4 wow fadeInUp"
							data-wow-delay=".8s"
						>
							<ButtonPrimary
								text={t("hero.primary_cta", "Explore Our Vision")}
								url="#vision"
							/>
							<ButtonPrimary
								text={t("hero.secondary_cta", "Meet Rakesh Ray")}
								url="#about"
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="banner-shape">
						<img src="/images/shape/pattern-bg.webp" alt="" />
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/hero-img.png"
							alt="Rakesh Ray"
							width={945}
							height={793}
						/>
					</div>
					<div className="box-area">
						<div className="customers-box">
							<div className="customers">
								<ul>
									<li className="wow fadeInLeft" data-wow-delay=".5s">
										<Image
											src="/images/testimonial/client-1.webp"
											alt=""
											width={89}
											height={89}
										/>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".6s">
										<Image
											src="/images/testimonial/client-2.webp"
											alt=""
											width={89}
											height={89}
										/>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".7s">
										<Image
											src="/images/testimonial/client-3.webp"
											alt=""
											width={89}
											height={89}
										/>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".8s">
										<span>
											<i className="tji-plus"></i>
										</span>
									</li>
								</ul>
							</div>
							<div
								className="customers-number wow fadeInUp"
								data-wow-delay=".5s"
							>
								{t("hero.customers_count", "Parsa")}
							</div>
							<h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">
								{t("hero.customers_text", "One community. One shared future.")}
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
				<button data-target="#choose" className="scroll-down tj-scroll-btn">
					<span>
						<i className="tji-arrow-down-long"></i>
					</span>
					{t("hero.scroll_down", "Explore Our Vision")}
				</button>
			</div>
		</section>
	);
};

export default Hero;
