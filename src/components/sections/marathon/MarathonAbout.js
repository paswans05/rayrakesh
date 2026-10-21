"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonAbout = () => {
	const { t } = useLanguage();

	const pillars = t("marathon.about.pillars", [
		{
			title: "Health & Active Living",
			desc: "Encouraging regular fitness, preventative health habits, and mental wellbeing for all generations.",
		},
		{
			title: "Youth Empowerment",
			desc: "Channeling youthful energy into constructive sports, discipline, teamwork, and leadership.",
		},
		{
			title: "Civic Unity & Belonging",
			desc: "Bringing together citizens across all backgrounds and wards to share a unified community goal.",
		},
		{
			title: "Clean & Green Spaces",
			desc: "Championing walkable roads, cleaner neighborhood environments, and vibrant public recreational spaces.",
		},
	]);

	const pillarIcons = [
		"fa-solid fa-heart-pulse",
		"fa-solid fa-bolt",
		"fa-solid fa-people-roof",
		"fa-solid fa-seedling",
	];

	return (
		<section
			id="about-marathon"
			className="section-gap-x"
			style={{
				background: "#ffffff",
				color: "#18292c",
				position: "relative",
				paddingTop: "90px",
				paddingBottom: "90px",
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
							{t("marathon.about.subtitle", "Community Fitness & Unity")}
						</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
								fontWeight: "800",
								color: "#0c1e21",
								lineHeight: "1.2",
								marginBottom: "18px",
							}}
						>
							{t("marathon.about.title_prefix", "Running for Health, ")}
							<span style={{ color: "#1e8a8a" }}>
								{t("marathon.about.title_highlight", "Youth & Togetherness")}
							</span>
						</h2>
						<p
							style={{
								fontSize: "1.05rem",
								color: "#67787a",
								lineHeight: "1.7",
								maxWidth: "720px",
								margin: "0 auto",
							}}
						>
							{t(
								"marathon.about.desc1",
								"The Rakesh Ray Community Marathon is an inclusive civic movement designed to connect every resident through the spirit of sport, wellness, and mutual collaboration."
							)}
						</p>
					</div>
				</div>

				{/* 4 Pillars Grid */}
				<div className="row g-4 mb-5">
					{pillars.map((pillar, idx) => (
						<div key={idx} className="col-lg-3 col-md-6">
							<div
								style={{
									background: "#f7faf9",
									border: "1px solid #e2ebe8",
									borderRadius: "18px",
									padding: "32px 24px",
									height: "100%",
									transition: "transform 0.3s ease, box-shadow 0.3s ease",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-6px)";
									e.currentTarget.style.boxShadow = "0 14px 30px rgba(30, 138, 138, 0.12)";
									e.currentTarget.style.borderColor = "#1e8a8a";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "none";
									e.currentTarget.style.borderColor = "#e2ebe8";
								}}
							>
								<div
									style={{
										width: "52px",
										height: "52px",
										borderRadius: "14px",
										background: "rgba(30, 138, 138, 0.12)",
										color: "#1e8a8a",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "22px",
										marginBottom: "20px",
									}}
								>
									<i className={pillarIcons[idx] || "fa-solid fa-star"}></i>
								</div>
								<h5
									style={{
										fontSize: "18px",
										fontWeight: "700",
										color: "#0c1e21",
										marginBottom: "10px",
									}}
								>
									{pillar.title}
								</h5>
								<p
									style={{
										fontSize: "14px",
										color: "#67787a",
										lineHeight: "1.65",
										margin: 0,
									}}
								>
									{pillar.desc}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Rakesh Ray Dedicated Vision Card */}
				<div
					style={{
						background: "linear-gradient(135deg, #0c1e21 0%, #163136 100%)",
						borderRadius: "24px",
						color: "#ffffff",
						padding: "45px 36px",
						boxShadow: "0 20px 40px rgba(12, 30, 33, 0.18)",
					}}
				>
					<div className="row align-items-center gy-4">
						<div className="col-lg-3 col-md-4 text-center">
							<div
								style={{
									width: "140px",
									height: "140px",
									borderRadius: "50%",
									overflow: "hidden",
									margin: "0 auto",
									border: "4px solid rgba(56, 214, 214, 0.4)",
									boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
								}}
							>
								<Image
									src="/images/hero/hero-img.png"
									alt="Rakesh Ray"
									width={140}
									height={140}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</div>
							<h5 style={{ color: "#ffffff", margin: "14px 0 2px", fontWeight: "700", fontSize: "17px" }}>
								Rakesh Ray
							</h5>
							<span style={{ color: "#38d6d6", fontSize: "13px", fontWeight: "600" }}>
								Parsa, Nepal
							</span>
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="d-flex align-items-center gap-2 mb-2">
								<i className="fa-solid fa-quote-left" style={{ color: "#ff5e14", fontSize: "24px" }}></i>
								<span
									style={{
										color: "#38d6d6",
										fontSize: "13px",
										textTransform: "uppercase",
										fontWeight: "700",
										letterSpacing: "1px",
									}}
								>
									{t("marathon.about.candidate_box_title", "Rakesh Ray’s Vision for the Marathon")}
								</span>
							</div>

							<blockquote
								style={{
									fontSize: "1.1rem",
									lineHeight: "1.75",
									fontStyle: "italic",
									color: "#e2ebe8",
									margin: "0 0 16px 0",
								}}
							>
								{t(
									"marathon.about.candidate_box_text",
									"“A prosperous community starts with healthy individuals and an active, united public. When we run side by side, we break down barriers and build the foundation for a stronger, healthier Parsa and a brighter Nepal.”"
								)}
							</blockquote>

							<p
								style={{
									fontSize: "14px",
									color: "rgba(255, 255, 255, 0.75)",
									lineHeight: "1.65",
									margin: 0,
								}}
							>
								{t(
									"marathon.about.desc2",
									"Initiated with a forward-looking vision for community development in Nepal, this marathon invites runners, walkers, students, working professionals, and families to step forward together. It reflects Rakesh Ray's commitment to practical, people-centered action where community participation leads the way."
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarathonAbout;
