"use client";
import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import { useLanguage } from "@/hooks/useLanguage";

const Brands1 = ({ type = 1 }) => {
	const { language } = useLanguage();

	return (
		<section
			className={`tj-client-section ${
				type === 2 ? "client-section-gap-2" : "client-section-gap"
			} wow fadeInUp`}
			data-wow-delay=".4s"
		>
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div className="client-content">
							<h5 className="sec-title">
								{language === "ne" ? (
									<>
										पर्साको विकास र समृद्धिका लागि{" "}
										<span className="client-text">हामी सबै एकताबद्ध</span>
									</>
								) : (
									<>
										United with the Citizens of{" "}
										<span className="client-text">Parsa</span> for Shared
										Progress
									</>
								)}
							</h5>
						</div>
						<BrandSlider1 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands1;
