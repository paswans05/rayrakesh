"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import { useLanguage } from "@/hooks/useLanguage";
import getPortfolio from "@/libs/getPortfolio";

const Portfolios1 = () => {
	const portfolio = getPortfolio()?.slice(0, 4);
	const { t } = useLanguage();

	return (
		<section className="tj-project-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>
								{t("projects.subtitle", "Proud Projects")}
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim">
										{t("projects.title_prefix", "Breaking Boundaries, Building ")}
										<span>{t("projects.title_highlight", "Dreams.")}</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									{t(
										"projects.desc",
										"We work closely with our clients to understand their unique needs and craft tailored solutions that address challenges."
									)}
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={t("projects.get_in_touch", "Get In Touch")}
										url="/contact"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-area tj-arrange-container">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard1 key={idx} portfolio={portfolioSingle} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios1;
