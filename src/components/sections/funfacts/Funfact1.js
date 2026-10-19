"use client";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import { useLanguage } from "@/hooks/useLanguage";

const Funfact1 = () => {
	const { t } = useLanguage();

	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={93} symbol={"%"} />
								<span className="count-text">
									{t("funfacts.projects_completed", "Projects Completed.")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="count-text">
									{t("funfacts.reach_worldwide", "Reach Worldwide")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={8.5} symbol={"X"} />
								<span className="count-text">
									{t("funfacts.faster_growth", "Faster Growth")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={100} symbol={"+"} />
								<span className="count-text">
									{t("funfacts.awards_archived", "Awards Archived")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
