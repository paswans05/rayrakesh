"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonVolunteer = () => {
	const { t } = useLanguage();

	const [volunteerFormOpen, setVolunteerFormOpen] = useState(false);
	const [volData, setVolData] = useState({ name: "", phone: "", role: "marshal" });
	const [volSubmitted, setVolSubmitted] = useState(false);

	const handleVolSubmit = (e) => {
		e.preventDefault();
		if (volData.name && volData.phone) {
			setVolSubmitted(true);
		}
	};

	return (
		<section
			id="volunteer"
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
							{t("marathon.volunteer.subtitle", "Join the Team")}
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
							{t("marathon.volunteer.title_prefix", "Volunteer, Partner or ")}
							<span style={{ color: "#1e8a8a" }}>
								{t("marathon.volunteer.title_highlight", "Support the Event")}
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
								"marathon.volunteer.desc",
								"A successful marathon thrives on active volunteers and community partners. Discover how you can be an integral part of this inspiring event."
							)}
						</p>
					</div>
				</div>

				{/* 3 Pillars of Community Engagement */}
				<div className="row g-4 mb-4">
					{/* Card 1: Volunteer */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#ffffff",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "36px 28px",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div>
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
									<i className="fa-solid fa-hands-holding-child"></i>
								</div>
								<h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
									{t("marathon.volunteer.card_vol_title", "Become an Event Volunteer")}
								</h4>
								<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.65" }}>
									{t(
										"marathon.volunteer.card_vol_desc",
										"Lend a helping hand in route coordination, water distribution stations, participant guidance, and cheer zones."
									)}
								</p>
							</div>

							<button
								type="button"
								onClick={() => setVolunteerFormOpen(!volunteerFormOpen)}
								style={{
									background: "#0c1e21",
									color: "#ffffff",
									border: "none",
									borderRadius: "12px",
									padding: "12px 20px",
									fontSize: "14px",
									fontWeight: "700",
									marginTop: "20px",
									cursor: "pointer",
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "8px",
								}}
							>
								<span>{t("marathon.volunteer.card_vol_btn", "Sign Up as Volunteer")}</span>
								<i className="fa-solid fa-chevron-down"></i>
							</button>
						</div>
					</div>

					{/* Card 2: Partnerships */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#ffffff",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "36px 28px",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div>
								<div
									style={{
										width: "52px",
										height: "52px",
										borderRadius: "14px",
										background: "rgba(255, 94, 20, 0.12)",
										color: "#ff5e14",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "22px",
										marginBottom: "20px",
									}}
								>
									<i className="fa-solid fa-handshake-angle"></i>
								</div>
								<h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
									{t("marathon.volunteer.card_partner_title", "Community Partnerships & Support")}
								</h4>
								<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.65" }}>
									{t(
										"marathon.volunteer.card_partner_desc",
										"Local clubs, healthcare providers, schools, and civic organizations are invited to co-create this community celebration."
									)}
								</p>
							</div>

							<Link
								href="/contact"
								style={{
									background: "#1e8a8a",
									color: "#ffffff",
									borderRadius: "12px",
									padding: "12px 20px",
									fontSize: "14px",
									fontWeight: "700",
									marginTop: "20px",
									textDecoration: "none",
									textAlign: "center",
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "8px",
								}}
							>
								<span>{t("marathon.volunteer.card_partner_btn", "Inquire for Partnership")}</span>
								<i className="fa-solid fa-arrow-right"></i>
							</Link>
						</div>
					</div>

					{/* Card 3: Announcements */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#ffffff",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "36px 28px",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div>
								<div
									style={{
										width: "52px",
										height: "52px",
										borderRadius: "14px",
										background: "rgba(52, 152, 219, 0.12)",
										color: "#3498db",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "22px",
										marginBottom: "20px",
									}}
								>
									<i className="fa-solid fa-bullhorn"></i>
								</div>
								<h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
									{t("marathon.volunteer.card_news_title", "Event Announcements")}
								</h4>
								<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.65" }}>
									{t(
										"marathon.volunteer.card_news_desc",
										"Route maps, bib pickup schedules, and community warmup sessions will be announced here first."
									)}
								</p>
							</div>

							<div
								style={{
									background: "#f8fbfb",
									borderRadius: "12px",
									padding: "12px 16px",
									fontSize: "13px",
									color: "#364e52",
									marginTop: "20px",
									border: "1px solid #e1ebe9",
								}}
							>
								<i className="fa-regular fa-bell text-warning me-2"></i>
								Next update: Volunteer briefing scheduled in Parsa.
							</div>
						</div>
					</div>
				</div>

				{/* Collapsible Quick Volunteer Form */}
				{volunteerFormOpen && (
					<div
						className="row justify-content-center mt-4"
						style={{ animation: "fadeIn 0.3s ease" }}
					>
						<div className="col-lg-8">
							<div
								style={{
									background: "#ffffff",
									borderRadius: "20px",
									padding: "32px",
									border: "2px solid #1e8a8a",
									boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
								}}
							>
								<h5 style={{ fontWeight: "800", color: "#0c1e21", marginBottom: "16px" }}>
									Volunteer Registration Form
								</h5>

								{volSubmitted ? (
									<div className="alert alert-success d-flex align-items-center gap-2 mb-0">
										<i className="fa-solid fa-circle-check"></i>
										<span>Thank you for volunteering! The marathon coordination team will contact you shortly.</span>
									</div>
								) : (
									<form onSubmit={handleVolSubmit}>
										<div className="row g-3">
											<div className="col-md-6">
												<input
													type="text"
													required
													placeholder="Your Full Name *"
													value={volData.name}
													onChange={(e) => setVolData({ ...volData, name: e.target.value })}
													className="form-control"
													style={{ borderRadius: "10px", padding: "10px 14px" }}
												/>
											</div>
											<div className="col-md-6">
												<input
													type="tel"
													required
													placeholder="Phone Number (e.g. +977 98XXXXXXXX) *"
													value={volData.phone}
													onChange={(e) => setVolData({ ...volData, phone: e.target.value })}
													className="form-control"
													style={{ borderRadius: "10px", padding: "10px 14px" }}
												/>
											</div>
											<div className="col-md-12">
												<select
													className="form-select"
													value={volData.role}
													onChange={(e) => setVolData({ ...volData, role: e.target.value })}
													style={{ borderRadius: "10px", padding: "10px 14px" }}
												>
													<option value="marshal">Route Marshal & Safety</option>
													<option value="water">Water & Hydration Station</option>
													<option value="registration">Registration & Kit Distribution</option>
													<option value="medical">Medical & First-Aid Volunteer</option>
													<option value="cheer">Cheering Zone & Motivation</option>
												</select>
											</div>
											<div className="col-12 text-end">
												<button
													type="submit"
													style={{
														background: "#1e8a8a",
														color: "#ffffff",
														border: "none",
														borderRadius: "10px",
														padding: "10px 24px",
														fontWeight: "700",
														fontSize: "14px",
														cursor: "pointer",
													}}
												>
													Submit Volunteer Application
												</button>
											</div>
										</div>
									</form>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default MarathonVolunteer;
