"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const MarathonHero = () => {
	const { t } = useLanguage();

	return (
		<section
			className="tj-marathon-hero section-gap-x"
			style={{
				position: "relative",
				background: "linear-gradient(135deg, #071518 0%, #0e2428 50%, #153338 100%)",
				color: "#ffffff",
				overflow: "hidden",
				paddingTop: "90px",
				paddingBottom: "110px",
			}}
		>
			{/* Subtle decorative background glow and shapes */}
			<div
				style={{
					position: "absolute",
					top: "-15%",
					right: "-5%",
					width: "600px",
					height: "600px",
					background: "radial-gradient(circle, rgba(30, 138, 138, 0.22) 0%, rgba(0,0,0,0) 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: "-20%",
					left: "-10%",
					width: "500px",
					height: "500px",
					background: "radial-gradient(circle, rgba(255, 94, 20, 0.15) 0%, rgba(0,0,0,0) 70%)",
					borderRadius: "50%",
					pointerEvents: "none",
				}}
			/>

			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row align-items-center gy-5">
					{/* Left content column */}
					<div className="col-lg-7 col-md-12">
						{/* Badge */}
						<div
							className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2"
							style={{
								background: "rgba(30, 138, 138, 0.18)",
								border: "1px solid rgba(30, 138, 138, 0.45)",
								borderRadius: "30px",
								fontSize: "14px",
								fontWeight: "600",
								color: "#57d4d4",
								letterSpacing: "0.5px",
							}}
						>
							<span
								style={{
									display: "inline-block",
									width: "8px",
									height: "8px",
									borderRadius: "50%",
									background: "#ff5e14",
									boxShadow: "0 0 10px #ff5e14",
								}}
							/>
							<span>{t("marathon.hero.badge", "Nepal Community Fitness Initiative")}</span>
						</div>

						{/* Headline */}
						<h1
							style={{
								fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
								fontWeight: "800",
								lineHeight: "1.15",
								letterSpacing: "-0.5px",
								color: "#ffffff",
								marginBottom: "22px",
							}}
						>
							{t("marathon.hero.title_prefix", "Run Together. ")}
							<span
								style={{
									background: "linear-gradient(90deg, #1e8a8a 0%, #38d6d6 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								{t("marathon.hero.title_highlight", "Build a Better Tomorrow.")}
							</span>
						</h1>

						{/* Supporting text */}
						<p
							style={{
								fontSize: "1.125rem",
								lineHeight: "1.75",
								color: "rgba(255, 255, 255, 0.85)",
								maxWidth: "600px",
								marginBottom: "35px",
							}}
						>
							{t(
								"marathon.hero.desc",
								"Join our community marathon to celebrate fitness, unity, and a brighter future for Nepal."
							)}
						</p>

						{/* Quick Event Info Pills */}
						<div
							className="d-flex flex-wrap gap-3 mb-4"
							style={{
								padding: "16px 20px",
								background: "rgba(255, 255, 255, 0.05)",
								borderRadius: "16px",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(8px)",
							}}
						>
							<div className="d-flex align-items-center gap-2 me-4">
								<span
									style={{
										width: "36px",
										height: "36px",
										borderRadius: "50%",
										background: "rgba(30, 138, 138, 0.25)",
										color: "#38d6d6",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "15px",
									}}
								>
									<i className="fa-regular fa-calendar-star"></i>
								</span>
								<div>
									<div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", fontWeight: "600" }}>
										{t("marathon.hero.date_label", "Event Date")}
									</div>
									<div style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff" }}>
										{t("marathon.hero.date_value", "Official Date Coming Soon")}
									</div>
								</div>
							</div>

							<div className="d-flex align-items-center gap-2 me-4">
								<span
									style={{
										width: "36px",
										height: "36px",
										borderRadius: "50%",
										background: "rgba(255, 94, 20, 0.25)",
										color: "#ff7a3d",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "15px",
									}}
								>
									<i className="fa-regular fa-location-dot"></i>
								</span>
								<div>
									<div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", fontWeight: "600" }}>
										{t("marathon.hero.location_label", "Location")}
									</div>
									<div style={{ fontSize: "14px", fontWeight: "700", color: "#ffffff" }}>
										{t("marathon.hero.location_value", "Parsa, Sarlahi District, Nepal")}
									</div>
								</div>
							</div>

							<div className="d-flex align-items-center gap-2">
								<span
									style={{
										width: "36px",
										height: "36px",
										borderRadius: "50%",
										background: "rgba(46, 204, 113, 0.25)",
										color: "#2ecc71",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "15px",
									}}
								>
									<i className="fa-regular fa-ticket"></i>
								</span>
								<div>
									<div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", fontWeight: "600" }}>
										{t("marathon.hero.status_label", "Registration Status")}
									</div>
									<div style={{ fontSize: "14px", fontWeight: "700", color: "#2ecc71" }}>
										{t("marathon.hero.status_value", "Early Registration Open")}
									</div>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="d-flex flex-wrap align-items-center gap-3">
							<ButtonPrimary
								text={t("marathon.hero.primary_cta", "Register for Marathon")}
								url="#register"
							/>
							<ButtonPrimary
								text={t("marathon.hero.secondary_cta", "Explore the Campaign")}
								url="#about-marathon"
								isTextBtn={true}
							/>
						</div>
					</div>

					{/* Right Portrait & Visual Column */}
					<div className="col-lg-5 col-md-12">
						<div
							style={{
								position: "relative",
								maxWidth: "460px",
								margin: "0 auto",
							}}
						>
							{/* Outer glowing frame */}
							<div
								style={{
									position: "relative",
									borderRadius: "24px",
									overflow: "hidden",
									boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.12)",
									background: "linear-gradient(180deg, rgba(30, 138, 138, 0.2) 0%, rgba(12, 30, 33, 0.9) 100%)",
								}}
							>
								<Image
									src="/images/about/about-1.png"
									alt="Rakesh Ray — Community Marathon Campaign"
									width={460}
									height={540}
									priority
									style={{
										width: "100%",
										height: "auto",
										display: "block",
										objectFit: "cover",
										transition: "transform 0.4s ease",
									}}
								/>

								{/* Overlay caption banner */}
								<div
									style={{
										position: "absolute",
										bottom: "0",
										left: "0",
										right: "0",
										padding: "24px 20px 18px",
										background: "linear-gradient(180deg, rgba(7, 21, 24, 0) 0%, rgba(7, 21, 24, 0.92) 50%, #071518 100%)",
									}}
								>
									<h4
										style={{
											color: "#ffffff",
											margin: 0,
											fontSize: "20px",
											fontWeight: "700",
										}}
									>
										Rakesh Ray
									</h4>
									<p
										style={{
											color: "#38d6d6",
											fontSize: "13px",
											fontWeight: "600",
											margin: "4px 0 0",
											letterSpacing: "0.5px",
										}}
									>
										Community Leader & Marathon Convener
									</p>
								</div>
							</div>

							{/* Floating Community Badge */}
							<div
								style={{
									position: "absolute",
									top: "16px",
									right: "12px",
									background: "#ff5e14",
									color: "#ffffff",
									padding: "10px 16px",
									borderRadius: "50px",
									fontWeight: "700",
									fontSize: "12px",
									boxShadow: "0 8px 20px rgba(255, 94, 20, 0.4)",
									display: "flex",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<i className="fa-solid fa-person-running"></i>
								<span>3 KM • 5 KM • 10 KM</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarathonHero;
