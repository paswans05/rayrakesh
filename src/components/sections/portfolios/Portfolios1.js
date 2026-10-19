"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import { useLanguage } from "@/hooks/useLanguage";
import getPortfolio from "@/libs/getPortfolio";

const Portfolios1 = () => {
	const defaultPortfolio = getPortfolio()?.slice(0, 4);
	const { t } = useLanguage();
	const communityItems = t("projects.items");

	const portfolio = Array.isArray(communityItems)
		? communityItems.map((item, idx) => ({
				...defaultPortfolio[idx],
				title: item?.title || defaultPortfolio[idx]?.title,
				category: item?.category || defaultPortfolio[idx]?.category,
				shortDesc: item?.shortDesc || defaultPortfolio[idx]?.shortDesc,
		  }))
		: defaultPortfolio;

	return (
		<section id="community" className="tj-project-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>
								{t("projects.subtitle", "Community Focus")}
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim">
										{t("projects.title_prefix", "Empowering the People of ")}
										<span>{t("projects.title_highlight", "Parsa.")}</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									{t(
										"projects.desc",
										"Addressing the genuine needs, daily concerns, and future hopes of our community through practical initiatives and community partnership."
									)}
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={t("projects.get_in_touch", "Share Your Suggestions")}
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
