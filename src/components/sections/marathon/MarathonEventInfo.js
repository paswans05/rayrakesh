"use client";
import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonEventInfo = () => {
	const { t } = useLanguage();
	const [activeFaq, setActiveFaq] = useState(0);

	const defaultFaqs = [
		{
			q: "Who can register for the Rakesh Ray Community Marathon?",
			a: "Anyone residing in Parsa, Sarlahi, or neighboring regions of Nepal is welcome! We have 3 KM, 5 KM, and 10 KM categories suitable for families, students, and competitive runners.",
		},
		{
			q: "Is registration free or paid?",
			a: "General participation is free to ensure full accessibility for all citizens. Configurable paid supporter options or voluntary community contributions can be selected by those who wish to support event logistics.",
		},
		{
			q: "How and when will I receive my Runner Bib?",
			a: "Once your registration is verified, you will receive a digital receipt with a reference ID. Physical bibs and event T-shirts will be distributed at the Parsa campaign office 48 hours before the run.",
		},
		{
			q: "Are there medical and water facilities along the route?",
			a: "Yes. Dedicated mobile medical units, paramedical volunteers, and hydration points with clean drinking water and electrolyte drinks will be positioned across the course.",
		},
	];

	const defaultGuidelines = [
		"Ensure personal medical fitness before participating; first-aid and medical ambulances will be stationed along the route.",
		"Wear appropriate running shoes and sports attire suited for outdoor running.",
		"Hydration and energy water points will be available every 1.5 KM along the circuit.",
		"Please collect your Runner Bib and kit at the designated Parsa community center before race day.",
		"Respect fellow runners and keep the marathon route clean and plastic-free.",
	];

	const faqs = t("marathon.event_info.faqs", defaultFaqs);
	const guidelines = t("marathon.event_info.guidelines", defaultGuidelines);

	return (
		<section
			id="event-info"
			className="section-gap-x"
			style={{
				background: "#ffffff",
				color: "#18292c",
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
							{t("marathon.event_info.subtitle", "Event Logistics")}
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
							{t("marathon.event_info.title_prefix", "Essential Information & ")}
							<span style={{ color: "#1e8a8a" }}>
								{t("marathon.event_info.title_highlight", "Race Schedule")}
							</span>
						</h2>
					</div>
				</div>

				{/* Logistics 3-Card Overview */}
				<div className="row g-4 mb-5">
					{/* Card 1: Date & Time */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#f7faf9",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "32px 26px",
								height: "100%",
							}}
						>
							<div
								style={{
									width: "48px",
									height: "48px",
									borderRadius: "12px",
									background: "rgba(30, 138, 138, 0.12)",
									color: "#1e8a8a",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "20px",
									marginBottom: "20px",
								}}
							>
								<i className="fa-regular fa-clock"></i>
							</div>
							<h5 style={{ fontSize: "19px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
								{t("marathon.event_info.date_title", "Event Date & Flag-off Time")}
							</h5>
							<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.7", margin: 0 }}>
								{t(
									"marathon.event_info.date_desc",
									"Official date and exact morning flag-off times (anticipated 6:00 AM) will be announced soon. Registered participants will receive SMS & email alerts."
								)}
							</p>
							<div
								style={{
									marginTop: "16px",
									display: "inline-block",
									background: "#fff1eb",
									color: "#ff5e14",
									padding: "4px 12px",
									borderRadius: "20px",
									fontSize: "12px",
									fontWeight: "700",
								}}
							>
								Coming Soon • घोषणा हुँदै
							</div>
						</div>
					</div>

					{/* Card 2: Venue */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#f7faf9",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "32px 26px",
								height: "100%",
							}}
						>
							<div
								style={{
									width: "48px",
									height: "48px",
									borderRadius: "12px",
									background: "rgba(255, 94, 20, 0.12)",
									color: "#ff5e14",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "20px",
									marginBottom: "20px",
								}}
							>
								<i className="fa-regular fa-map-location-dot"></i>
							</div>
							<h5 style={{ fontSize: "19px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
								{t("marathon.event_info.venue_title", "Starting & Finishing Point")}
							</h5>
							<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.7", margin: 0 }}>
								{t(
									"marathon.event_info.venue_desc",
									"Parsa Main Grounds, Sarlahi District, Nepal. A centralized hub accessible from all local wards with parking and safe baggage counter."
								)}
							</p>
							<div
								style={{
									marginTop: "16px",
									display: "inline-block",
									background: "#eafaf1",
									color: "#2ecc71",
									padding: "4px 12px",
									borderRadius: "20px",
									fontSize: "12px",
									fontWeight: "700",
								}}
							>
								Parsa, Sarlahi • नेपाल
							</div>
						</div>
					</div>

					{/* Card 3: Registration Timeline */}
					<div className="col-lg-4 col-md-6">
						<div
							style={{
								background: "#f7faf9",
								borderRadius: "20px",
								border: "1px solid #dce8e6",
								padding: "32px 26px",
								height: "100%",
							}}
						>
							<div
								style={{
									width: "48px",
									height: "48px",
									borderRadius: "12px",
									background: "rgba(52, 152, 219, 0.12)",
									color: "#3498db",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "20px",
									marginBottom: "20px",
								}}
							>
								<i className="fa-regular fa-id-card"></i>
							</div>
							<h5 style={{ fontSize: "19px", fontWeight: "700", color: "#0c1e21", marginBottom: "12px" }}>
								{t("marathon.event_info.deadline_title", "Registration Timeline")}
							</h5>
							<p style={{ fontSize: "14px", color: "#67787a", lineHeight: "1.7", margin: 0 }}>
								{t(
									"marathon.event_info.deadline_desc",
									"Early online registration is currently open. On-spot bib distribution counter will open 2 days prior to the race."
								)}
							</p>
							<div
								style={{
									marginTop: "16px",
									display: "inline-block",
									background: "#eef6fd",
									color: "#3498db",
									padding: "4px 12px",
									borderRadius: "20px",
									fontSize: "12px",
									fontWeight: "700",
								}}
							>
								Registration Active • खुला छ
							</div>
						</div>
					</div>
				</div>

				{/* Two Columns: Guidelines on Left, Route Map Card on Right */}
				<div className="row g-4 align-items-stretch mb-5">
					{/* Left: Participation Guidelines */}
					<div className="col-lg-6">
						<div
							style={{
								background: "#ffffff",
								border: "1px solid #e1ebe9",
								borderRadius: "20px",
								padding: "36px 30px",
								height: "100%",
							}}
						>
							<div className="d-flex align-items-center gap-2 mb-3">
								<i className="fa-solid fa-clipboard-check" style={{ color: "#1e8a8a", fontSize: "20px" }}></i>
								<h4 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#0c1e21" }}>
									{t("marathon.event_info.guidelines_title", "Participation Guidelines")}
								</h4>
							</div>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								{guidelines.map((guide, gIdx) => (
									<li
										key={gIdx}
										style={{
											display: "flex",
											alignItems: "flex-start",
											gap: "12px",
											fontSize: "14px",
											color: "#364e52",
											lineHeight: "1.65",
											paddingBottom: "14px",
											marginBottom: "14px",
											borderBottom: gIdx === guidelines.length - 1 ? "none" : "1px solid #f0f4f3",
										}}
									>
										<span
											style={{
												width: "22px",
												height: "22px",
												borderRadius: "50%",
												background: "rgba(30, 138, 138, 0.15)",
												color: "#1e8a8a",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: "11px",
												fontWeight: "700",
												flexShrink: 0,
												marginTop: "2px",
											}}
										>
											{gIdx + 1}
										</span>
										<span>{guide}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right: Route Map Visualization & Support Points */}
					<div className="col-lg-6">
						<div
							style={{
								background: "linear-gradient(135deg, #0c1e21 0%, #153338 100%)",
								color: "#ffffff",
								borderRadius: "20px",
								padding: "36px 30px",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div>
								<div className="d-flex justify-content-between align-items-center mb-3">
									<h4 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>
										Course & Route Overview
									</h4>
									<span
										style={{
											background: "rgba(255, 94, 20, 0.25)",
											color: "#ff7a3d",
											fontSize: "11px",
											fontWeight: "700",
											padding: "4px 10px",
											borderRadius: "20px",
											textTransform: "uppercase",
										}}
									>
										Detailed Map Coming Soon
									</span>
								</div>
								<p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.7" }}>
									The community marathon course is mapped across wide, asphalted streets and scenic community routes through Parsa, designed for safety, flat elevation, and vibrant spectator support.
								</p>

								{/* Station Highlights */}
								<div className="row g-3 my-3">
									<div className="col-6">
										<div
											style={{
												background: "rgba(255, 255, 255, 0.06)",
												borderRadius: "12px",
												padding: "12px",
												border: "1px solid rgba(255, 255, 255, 0.1)",
											}}
										>
											<div style={{ color: "#38d6d6", fontSize: "16px", fontWeight: "800" }}>
												Every 1.5 KM
											</div>
											<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
												Water & Hydration Stations
											</div>
										</div>
									</div>
									<div className="col-6">
										<div
											style={{
												background: "rgba(255, 255, 255, 0.06)",
												borderRadius: "12px",
												padding: "12px",
												border: "1px solid rgba(255, 255, 255, 0.1)",
											}}
										>
											<div style={{ color: "#ff7a3d", fontSize: "16px", fontWeight: "800" }}>
												3 Ambulances
											</div>
											<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
												Mobile Medical & First-Aid
											</div>
										</div>
									</div>
									<div className="col-6">
										<div
											style={{
												background: "rgba(255, 255, 255, 0.06)",
												borderRadius: "12px",
												padding: "12px",
												border: "1px solid rgba(255, 255, 255, 0.1)",
											}}
										>
											<div style={{ color: "#2ecc71", fontSize: "16px", fontWeight: "800" }}>
												Flat & Safe
											</div>
											<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
												Traffic Controlled Circuit
											</div>
										</div>
									</div>
									<div className="col-6">
										<div
											style={{
												background: "rgba(255, 255, 255, 0.06)",
												borderRadius: "12px",
												padding: "12px",
												border: "1px solid rgba(255, 255, 255, 0.1)",
											}}
										>
											<div style={{ color: "#f1c40f", fontSize: "16px", fontWeight: "800" }}>
												50+ Volunteers
											</div>
											<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
												Marshals & Cheering Zones
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								style={{
									borderTop: "1px solid rgba(255, 255, 255, 0.1)",
									paddingTop: "14px",
									fontSize: "12px",
									color: "rgba(255, 255, 255, 0.6)",
								}}
							>
								<i className="fa-solid fa-circle-info me-2 text-warning"></i>
								Final GPS route map and elevation chart will be sent to all confirmed registrants before race day.
							</div>
						</div>
					</div>
				</div>

				{/* Accordion FAQ Section */}
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div
							style={{
								background: "#f8fbfb",
								borderRadius: "22px",
								padding: "clamp(24px, 4vw, 40px) clamp(14px, 3.5vw, 32px)",
								border: "1px solid #dce8e6",
							}}
						>
							<h4
								className="text-center mb-4"
								style={{
									fontSize: "22px",
									fontWeight: "800",
									color: "#0c1e21",
								}}
							>
								{t("marathon.event_info.faqs_title", "Frequently Asked Questions")}
							</h4>

							<div className="accordion" id="marathonFaqAccordion">
								{faqs.map((faq, fIdx) => {
									const isOpen = activeFaq === fIdx;

									return (
										<div
											key={fIdx}
											style={{
												background: "#ffffff",
												borderRadius: "14px",
												border: "1px solid #e1ebe9",
												marginBottom: "12px",
												overflow: "hidden",
											}}
										>
											<button
												type="button"
												onClick={() => setActiveFaq(isOpen ? -1 : fIdx)}
												style={{
													width: "100%",
													padding: "18px 22px",
													textAlign: "left",
													background: "transparent",
													border: "none",
													fontSize: "16px",
													fontWeight: "700",
													color: isOpen ? "#1e8a8a" : "#0c1e21",
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													cursor: "pointer",
												}}
											>
												<span>{faq.q}</span>
												<i
													className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}
													style={{ fontSize: "14px", color: isOpen ? "#1e8a8a" : "#67787a" }}
												></i>
											</button>
											{isOpen && (
												<div
													style={{
														padding: "0 22px 18px",
														fontSize: "14px",
														color: "#4a5d60",
														lineHeight: "1.7",
													}}
												>
													{faq.a}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarathonEventInfo;
