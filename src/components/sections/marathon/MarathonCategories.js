"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonCategories = ({ onSelectCategory }) => {
	const { t } = useLanguage();

	const defaultCategories = [
		{
			id: "3km",
			name: "3 KM Community Fun Run",
			distance: "3 KM",
			badge: "Family & Beginners",
			eligibility: "All ages welcome (Children under 12 accompanied by adult)",
			fee: "Free Registration (Configurable)",
			fee_type: "Free Community Entry",
			desc: "A relaxed, joyous route designed for families, seniors, students, and walking groups who want to celebrate community fitness together.",
			perks: [
				"Official Runner Bib",
				"Participant Finisher Medal",
				"Hydration & Refreshments",
				"Digital Certificate of Participation",
			],
		},
		{
			id: "5km",
			name: "5 KM Public Run",
			distance: "5 KM",
			badge: "Most Popular",
			eligibility: "Open to participants aged 14 and above",
			fee: "Free Registration (Configurable)",
			fee_type: "Free / Optional Contribution",
			desc: "An energetic, moderate-distance run along the central community route of Parsa, perfect for young runners and fitness enthusiasts.",
			perks: [
				"Official Runner Bib & Timing Tag",
				"Finisher Medal",
				"Commemorative Event T-Shirt",
				"Hydration Stations & First Aid",
				"Official E-Certificate",
			],
		},
		{
			id: "10km",
			name: "10 KM Challenge Run",
			distance: "10 KM",
			badge: "Challenge Run",
			eligibility: "Open to participants aged 16 and above",
			fee: "Free / Configurable Entry Option",
			fee_type: "Challenge Entry",
			desc: "A premier endurance route through key landmarks of Parsa, challenging endurance runners to test their limits and inspire our youth.",
			perks: [
				"Official Timed Runner Bib",
				"Special Challenge Medal",
				"Commemorative Event T-Shirt",
				"Podium Recognition & Awards",
				"Hydration & Physiotherapy Support",
				"Ranked Timing Certificate",
			],
		},
	];

	const categories = t("marathon.categories.items", defaultCategories);

	const handleCategoryClick = (catId) => {
		if (onSelectCategory) {
			onSelectCategory(catId);
		}
	};

	return (
		<section
			id="categories"
			className="section-gap-x"
			style={{
				background: "#f4f8f7",
				paddingTop: "90px",
				paddingBottom: "95px",
			}}
		>
			<div className="container">
				{/* Section Header */}
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8 col-md-10">
						<div
							className="d-inline-block text-uppercase fw-bold mb-2"
							style={{
								fontSize: "13px",
								color: "#1e8a8a",
								letterSpacing: "1.5px",
							}}
						>
							{t("marathon.categories.subtitle", "Choose Your Distance")}
						</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
								fontWeight: "800",
								color: "#0c1e21",
								lineHeight: "1.2",
								marginBottom: "16px",
							}}
						>
							{t("marathon.categories.title_prefix", "Marathon Categories for ")}
							<span style={{ color: "#1e8a8a" }}>
								{t("marathon.categories.title_highlight", "Every Citizen")}
							</span>
						</h2>
						<p
							style={{
								fontSize: "1.05rem",
								color: "#67787a",
								lineHeight: "1.7",
								maxWidth: "680px",
								margin: "0 auto",
							}}
						>
							{t(
								"marathon.categories.desc",
								"Whether you are a seasoned runner, an enthusiastic youth, or joining with family, there is a race category designed for you."
							)}
						</p>
					</div>
				</div>

				{/* 3 Categories Grid */}
				<div className="row g-4 justify-content-center">
					{categories.map((cat, idx) => {
						const isFeatured = cat.id === "5km";

						return (
							<div key={idx} className="col-lg-4 col-md-6">
								<div
									style={{
										background: "#ffffff",
										borderRadius: "22px",
										border: isFeatured ? "2px solid #1e8a8a" : "1px solid #dbe6e4",
										padding: "36px 28px",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										position: "relative",
										boxShadow: isFeatured
											? "0 18px 45px rgba(30, 138, 138, 0.16)"
											: "0 8px 24px rgba(12, 30, 33, 0.05)",
										transition: "all 0.3s ease",
									}}
								>
									{/* Top Badge */}
									<div className="d-flex justify-content-between align-items-center mb-3">
										<span
											style={{
												background: isFeatured ? "#1e8a8a" : "rgba(30, 138, 138, 0.12)",
												color: isFeatured ? "#ffffff" : "#1e8a8a",
												padding: "6px 14px",
												borderRadius: "20px",
												fontSize: "12px",
												fontWeight: "700",
												textTransform: "uppercase",
												letterSpacing: "0.5px",
											}}
										>
											{cat.badge}
										</span>

										<div
											style={{
												fontSize: "24px",
												fontWeight: "900",
												color: "#ff5e14",
											}}
										>
											{cat.distance}
										</div>
									</div>

									{/* Category Title */}
									<h4
										style={{
											fontSize: "22px",
											fontWeight: "800",
											color: "#0c1e21",
											marginBottom: "10px",
										}}
									>
										{cat.name}
									</h4>

									{/* Description */}
									<p
										style={{
											fontSize: "14px",
											color: "#67787a",
											lineHeight: "1.65",
											marginBottom: "20px",
										}}
									>
										{cat.desc}
									</p>

									{/* Eligibility & Fee Info Box */}
									<div
										style={{
											background: "#f8fbfb",
											borderRadius: "12px",
											padding: "14px 16px",
											marginBottom: "24px",
											border: "1px dashed #c9d8d6",
										}}
									>
										<div style={{ fontSize: "12px", color: "#67787a", marginBottom: "4px" }}>
											<strong style={{ color: "#0c1e21" }}>Eligibility:</strong> {cat.eligibility}
										</div>
										<div style={{ fontSize: "12px", color: "#1e8a8a", fontWeight: "700" }}>
											<strong style={{ color: "#0c1e21" }}>Entry Fee:</strong> {cat.fee}
										</div>
									</div>

									{/* Included Perks */}
									<div style={{ flexGrow: 1, marginBottom: "28px" }}>
										<div
											style={{
												fontSize: "13px",
												fontWeight: "700",
												color: "#0c1e21",
												textTransform: "uppercase",
												letterSpacing: "0.5px",
												marginBottom: "12px",
											}}
										>
											What’s Included:
										</div>
										<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
											{cat.perks &&
												cat.perks.map((perk, pIdx) => (
													<li
														key={pIdx}
														style={{
															fontSize: "13.5px",
															color: "#364e52",
															marginBottom: "8px",
															display: "flex",
															alignItems: "center",
															gap: "10px",
														}}
													>
														<i
															className="fa-solid fa-circle-check"
															style={{ color: "#1e8a8a", fontSize: "14px" }}
														></i>
														<span>{perk}</span>
													</li>
												))}
										</ul>
									</div>

									{/* CTA Button */}
									<Link
										href="#register"
										onClick={() => handleCategoryClick(cat.id)}
										style={{
											display: "block",
											textAlign: "center",
											padding: "13px 20px",
											borderRadius: "14px",
											fontWeight: "700",
											fontSize: "14px",
											background: isFeatured ? "#ff5e14" : "#0c1e21",
											color: "#ffffff",
											textDecoration: "none",
											transition: "all 0.3s ease",
											boxShadow: isFeatured ? "0 8px 20px rgba(255, 94, 20, 0.3)" : "none",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.background = "#1e8a8a";
											e.currentTarget.style.transform = "translateY(-2px)";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.background = isFeatured ? "#ff5e14" : "#0c1e21";
											e.currentTarget.style.transform = "translateY(0)";
										}}
									>
										Select & Register
										<i className="fa-solid fa-arrow-right ms-2"></i>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default MarathonCategories;
