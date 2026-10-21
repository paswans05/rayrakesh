"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonCta = () => {
	const { t } = useLanguage();

	return (
		<section
			id="cta"
			style={{
				background: "linear-gradient(135deg, #071518 0%, #102d33 100%)",
				color: "#ffffff",
				padding: "90px 0",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Decorative background circle */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "650px",
					height: "650px",
					background: "radial-gradient(circle, rgba(30, 138, 138, 0.2) 0%, rgba(0,0,0,0) 70%)",
					pointerEvents: "none",
				}}
			/>

			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row justify-content-center text-center">
					<div className="col-lg-8 col-md-10">
						<div
							className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1"
							style={{
								background: "rgba(255, 94, 20, 0.15)",
								border: "1px solid rgba(255, 94, 20, 0.35)",
								borderRadius: "30px",
								fontSize: "13px",
								fontWeight: "700",
								color: "#ff7a3d",
								letterSpacing: "1px",
								textTransform: "uppercase",
							}}
						>
							<i className="fa-solid fa-flag"></i>
							<span>Rakesh Ray Community Campaign</span>
						</div>

						<h2
							style={{
								fontSize: "clamp(2rem, 4vw, 3.2rem)",
								fontWeight: "900",
								color: "#ffffff",
								lineHeight: "1.2",
								marginBottom: "18px",
							}}
						>
							{t("marathon.cta.title", "A Better Nepal Starts with Us.")}
						</h2>

						<p
							style={{
								fontSize: "1.15rem",
								color: "rgba(255, 255, 255, 0.85)",
								lineHeight: "1.75",
								maxWidth: "620px",
								margin: "0 auto 36px",
							}}
						>
							{t(
								"marathon.cta.subtext",
								"Take a step toward a healthier, stronger, more connected community."
							)}
						</p>

						<div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
							<Link
								href="#register"
								style={{
									background: "#ff5e14",
									color: "#ffffff",
									padding: "16px 36px",
									borderRadius: "14px",
									fontWeight: "800",
									fontSize: "16px",
									textDecoration: "none",
									boxShadow: "0 10px 25px rgba(255, 94, 20, 0.4)",
									transition: "all 0.3s ease",
									display: "inline-flex",
									alignItems: "center",
									gap: "10px",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = "#1e8a8a";
									e.currentTarget.style.transform = "translateY(-3px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.background = "#ff5e14";
									e.currentTarget.style.transform = "translateY(0)";
								}}
							>
								<span>{t("marathon.cta.btn_join", "Join the Marathon")}</span>
								<i className="fa-solid fa-arrow-right"></i>
							</Link>

							<Link
								href="#volunteer"
								style={{
									background: "transparent",
									color: "#ffffff",
									border: "2px solid rgba(255, 255, 255, 0.3)",
									padding: "14px 32px",
									borderRadius: "14px",
									fontWeight: "700",
									fontSize: "15px",
									textDecoration: "none",
									transition: "all 0.3s ease",
									display: "inline-flex",
									alignItems: "center",
									gap: "8px",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor = "#38d6d6";
									e.currentTarget.style.color = "#38d6d6";
									e.currentTarget.style.transform = "translateY(-3px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
									e.currentTarget.style.color = "#ffffff";
									e.currentTarget.style.transform = "translateY(0)";
								}}
							>
								<span>{t("marathon.cta.btn_volunteer", "Become a Volunteer")}</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarathonCta;
