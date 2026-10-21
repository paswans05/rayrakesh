"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const { t } = useLanguage();
	const faqItems = t("faq.items");

	const items = Array.isArray(faqItems)
		? faqItems.map((item, idx) => ({
				...item,
				initActive: idx === 0,
		  }))
		: [];

	return (
		<section
			className={`tj-faq-section section-gap ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>
										{t("faq.subtitle", "Frequently Asked Questions")}
									</span>
									<h2 className="sec-title title-anim">
										{t("faq.title", "Campaign Questions & Answers")}
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									{t(
										"about.quote",
										"Working together with every citizen of Parsa to build better roads, stronger schools, and honest governance."
									)}
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary
										text={t("features.request_call", "Get in Touch")}
										url={"/contact"}
									/>
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.png"
										alt="Parsa Campaign FAQ"
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										{t("faq.title", "Campaign Questions & Answers")}
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">
											{t("faq.call_title", "Have Questions for the Campaign?")}
										</h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:9779818888722">
											<span>+977 981-8888722</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
