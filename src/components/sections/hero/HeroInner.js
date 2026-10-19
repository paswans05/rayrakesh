"use client";
import sliceText from "@/libs/sliceText";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import React from "react";

const HeroInner = ({ title, text, breadcrums = [] }) => {
	const { t } = useLanguage();

	const displayTitle =
		title === "Contact Us" ? t("contact_page.title", "Contact Us") : title;
	const displayText =
		text === "Contact Us" ? t("contact_page.title", "Contact Us") : text;

	return (
		<section
			className="tj-page-header section-gap-x"
			style={{ backgroundImage: `url('/images/bg/pheader-bg.webp')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{displayTitle}</h1>
							<div className="tj-page-link">
								<span>
									<i className="tji-home"></i>
								</span>
								<span>
									<Link href="/">{t("nav.home", "Home")}</Link>
								</span>
								<span>
									<i className="tji-arrow-right"></i>
								</span>
								{breadcrums?.length
									? breadcrums?.map(({ name, path }, idx) => (
											<React.Fragment key={idx}>
												<span>
													<Link href={path ? path : "/"}>{name}</Link>
												</span>
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</React.Fragment>
									  ))
									: ""}
								<span>
									<span>{sliceText(displayText, 28, true)}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="page-header-overlay"
				style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
			></div>
		</section>
	);
};

export default HeroInner;
