"use client";
import ServicesSlider1 from "@/components/shared/services/ServicesSlider1";
import { useLanguage } from "@/hooks/useLanguage";

const Services1 = () => {
	const { t } = useLanguage();

	return (
		<section
			id="vision"
			className="tj-service-section overflow-hidden section-gap section-gap-x"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span
								className="sub-title text-white wow fadeInUp"
								data-wow-delay=".3s"
							>
								<i className="tji-box"></i>
								{t("solutions.subtitle", "Our Vision & Priorities")}
							</span>
							<h2 className="sec-title text-white title-anim">
								{t("solutions.title_prefix", "Key Priorities for ")}
								<span>{t("solutions.title_highlight", "Parsa.")}</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							<ServicesSlider1 />
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
		</section>
	);
};

export default Services1;
