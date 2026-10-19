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
								<FunfactSingle currentValue={7} symbol={""} />
								<span className="count-text">
									{t("funfacts.projects_completed", "Priority Sectors for Parsa")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={1} symbol={""} />
								<span className="count-text">
									{t("funfacts.reach_worldwide", "Wards & Communities")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={100} symbol={"%"} />
								<span className="count-text">
									{t("funfacts.awards_archived", "Committed to Transparent Service")}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={24} symbol={"/7"} />
								<span className="count-text">
									{t("funfacts.faster_growth", "Inclusive Community Vision")}
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
