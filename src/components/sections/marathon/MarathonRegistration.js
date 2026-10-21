"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonRegistration = ({ initialCategory = "5km" }) => {
	const { t } = useLanguage();

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "+977 ",
		age: "",
		gender: "",
		category: initialCategory,
		emergencyContact: "",
		registrationType: "free",
		tshirtSize: "M",
		agreeTerms: false,
	});

	useEffect(() => {
		if (initialCategory) {
			setFormData((prev) => ({ ...prev, category: initialCategory }));
		}
	}, [initialCategory]);

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [serverError, setServerError] = useState("");
	const [receipt, setReceipt] = useState(null);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Clear inline error on edit
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
		if (serverError) setServerError("");
	};

	const validate = () => {
		const newErrors = {};

		if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
			newErrors.fullName = "Please enter your full name (minimum 2 characters).";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
			newErrors.email = "Please enter a valid email address.";
		}

		if (!formData.phone.trim() || formData.phone.trim().length < 8) {
			newErrors.phone = "Please enter a valid phone number with country code.";
		}

		const parsedAge = parseInt(formData.age, 10);
		if (isNaN(parsedAge) || parsedAge < 5 || parsedAge > 100) {
			newErrors.age = "Please enter a valid age between 5 and 100.";
		}

		if (!formData.category) {
			newErrors.category = "Please select a marathon category.";
		}

		if (!formData.emergencyContact.trim() || formData.emergencyContact.trim().length < 3) {
			newErrors.emergencyContact = "Please provide an emergency contact name and phone number.";
		}

		if (!formData.agreeTerms) {
			newErrors.agreeTerms = "You must agree to the marathon participation guidelines and terms.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setServerError("");

		if (!validate()) {
			return;
		}

		setIsSubmitting(true);

		try {
			const res = await fetch("/api/marathon/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await res.json();

			if (!res.ok || !result.success) {
				setServerError(result.error || "Unable to complete registration. Please verify your details.");
				setIsSubmitting(false);
				return;
			}

			// Registration succeeded
			setReceipt(result.data);
			setIsSubmitting(false);
		} catch (err) {
			console.error("Submission error:", err);
			setServerError("Network error. Please check your internet connection and try again.");
			setIsSubmitting(false);
		}
	};

	const resetForm = () => {
		setFormData({
			fullName: "",
			email: "",
			phone: "+977 ",
			age: "",
			gender: "",
			category: "5km",
			emergencyContact: "",
			registrationType: "free",
			tshirtSize: "M",
			agreeTerms: false,
		});
		setErrors({});
		setServerError("");
		setReceipt(null);
	};

	return (
		<section
			id="register"
			className="section-gap-x"
			style={{
				background: "linear-gradient(180deg, #071518 0%, #0d2327 100%)",
				color: "#ffffff",
				paddingTop: "95px",
				paddingBottom: "105px",
				position: "relative",
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
								color: "#38d6d6",
								letterSpacing: "1.5px",
							}}
						>
							{t("marathon.registration.subtitle", "Take Your Mark")}
						</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
								fontWeight: "800",
								color: "#ffffff",
								lineHeight: "1.2",
								marginBottom: "16px",
							}}
						>
							{t("marathon.registration.title_prefix", "Marathon ")}
							<span style={{ color: "#38d6d6" }}>
								{t("marathon.registration.title_highlight", "Registration Form")}
							</span>
						</h2>
						<p
							style={{
								fontSize: "1.05rem",
								color: "rgba(255, 255, 255, 0.8)",
								lineHeight: "1.7",
								maxWidth: "680px",
								margin: "0 auto",
							}}
						>
							{t(
								"marathon.registration.desc",
								"Complete your details below to secure your runner spot. All citizens are warmly invited to participate in this grand community event."
							)}
						</p>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-9 col-md-11">
						{/* Success State Card */}
						{receipt ? (
							<div
								style={{
									background: "#ffffff",
									color: "#0c1e21",
									borderRadius: "24px",
									padding: "clamp(24px, 5vw, 50px) clamp(16px, 4vw, 36px)",
									textAlign: "center",
									boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
								}}
							>
								<div
									style={{
										width: "72px",
										height: "72px",
										borderRadius: "50%",
										background: "#e8f8f0",
										color: "#2ecc71",
										display: "inline-flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "32px",
										marginBottom: "20px",
									}}
								>
									<i className="fa-solid fa-check"></i>
								</div>

								<h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px", color: "#0c1e21" }}>
									{t("marathon.registration.form.success_title", "Registration Received Successfully!")}
								</h3>

								<p style={{ color: "#67787a", fontSize: "15px", maxWidth: "560px", margin: "0 auto 24px" }}>
									{t(
										"marathon.registration.form.success_desc",
										"Thank you for joining the Rakesh Ray Community Marathon. Your official reference number is:"
									)}
								</p>

								{/* Official Reference Badge */}
								<div
									style={{
										display: "inline-block",
										background: "#0c1e21",
										color: "#38d6d6",
										padding: "16px 32px",
										borderRadius: "16px",
										fontSize: "26px",
										fontWeight: "900",
										letterSpacing: "2px",
										marginBottom: "24px",
										border: "2px solid #1e8a8a",
									}}
								>
									{receipt.referenceId}
								</div>

								<div
									style={{
										background: "#f7faf9",
										borderRadius: "14px",
										padding: "18px 24px",
										maxWidth: "540px",
										margin: "0 auto 30px",
										textAlign: "left",
										fontSize: "13.5px",
										color: "#364e52",
										lineHeight: "1.7",
										border: "1px solid #dce8e6",
									}}
								>
									<div><strong>Participant:</strong> {receipt.fullName}</div>
									<div><strong>Category:</strong> {receipt.category.toUpperCase()} Run</div>
									<div><strong>Entry Type:</strong> {receipt.registrationType.toUpperCase()}</div>
									<div className="mt-2 text-muted" style={{ fontSize: "12px" }}>
										{t(
											"marathon.registration.form.success_note",
											"Please save this reference number. You will receive an SMS and email notification once bib numbers and race packs are ready for collection in Parsa."
										)}
									</div>
								</div>

								<button
									type="button"
									onClick={resetForm}
									style={{
										background: "#1e8a8a",
										color: "#ffffff",
										border: "none",
										borderRadius: "12px",
										padding: "12px 28px",
										fontSize: "14px",
										fontWeight: "700",
										cursor: "pointer",
									}}
								>
									{t("marathon.registration.form.register_another", "Register Another Participant")}
								</button>
							</div>
						) : (
							/* Interactive Registration Form */
							<div
								style={{
									background: "rgba(255, 255, 255, 0.04)",
									border: "1px solid rgba(255, 255, 255, 0.12)",
									borderRadius: "24px",
									padding: "clamp(22px, 4.5vw, 45px) clamp(16px, 3.5vw, 36px)",
									backdropFilter: "blur(12px)",
									boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
								}}
							>
								{/* Global Server Error Banner */}
								{serverError && (
									<div
										className="alert alert-danger mb-4 d-flex align-items-center gap-2"
										style={{ borderRadius: "12px", fontSize: "14px" }}
									>
										<i className="fa-solid fa-triangle-exclamation"></i>
										<span>{serverError}</span>
									</div>
								)}

								<form onSubmit={handleSubmit} noValidate>
									<div className="row g-4">
										{/* Full Name */}
										<div className="col-md-6">
											<label htmlFor="fullName" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.full_name", "Full Name *")}
											</label>
											<input
												id="fullName"
												type="text"
												name="fullName"
												value={formData.fullName}
												onChange={handleChange}
												placeholder={t("marathon.registration.form.full_name_ph", "e.g., Ramesh Shrestha")}
												className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "#ffffff",
													border: errors.fullName ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											/>
											{errors.fullName && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.fullName}
												</div>
											)}
										</div>

										{/* Email Address */}
										<div className="col-md-6">
											<label htmlFor="email" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.email", "Email Address *")}
											</label>
											<input
												id="email"
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder={t("marathon.registration.form.email_ph", "e.g., ramesh@example.com")}
												className={`form-control ${errors.email ? "is-invalid" : ""}`}
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "#ffffff",
													border: errors.email ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											/>
											{errors.email && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.email}
												</div>
											)}
										</div>

										{/* Phone Number */}
										<div className="col-md-6">
											<label htmlFor="phone" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.phone", "Phone Number (with Country Code) *")}
											</label>
											<input
												id="phone"
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder={t("marathon.registration.form.phone_ph", "+977 98XXXXXXXX")}
												className={`form-control ${errors.phone ? "is-invalid" : ""}`}
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "#ffffff",
													border: errors.phone ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											/>
											{errors.phone && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.phone}
												</div>
											)}
										</div>

										{/* Age */}
										<div className="col-md-3">
											<label htmlFor="age" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.age", "Age *")}
											</label>
											<input
												id="age"
												type="number"
												name="age"
												min="5"
												max="100"
												value={formData.age}
												onChange={handleChange}
												placeholder={t("marathon.registration.form.age_ph", "e.g., 24")}
												className={`form-control ${errors.age ? "is-invalid" : ""}`}
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "#ffffff",
													border: errors.age ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											/>
											{errors.age && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.age}
												</div>
											)}
										</div>

										{/* Gender */}
										<div className="col-md-3">
											<label htmlFor="gender" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.gender", "Gender (Optional)")}
											</label>
											<select
												id="gender"
												name="gender"
												value={formData.gender}
												onChange={handleChange}
												className="form-select"
												style={{
													background: "#0c1e21",
													color: "#ffffff",
													border: "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											>
												<option value="">Select Gender</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="other">Other</option>
												<option value="prefer_not_to_say">Prefer not to say</option>
											</select>
										</div>

										{/* Marathon Category */}
										<div className="col-md-6">
											<label htmlFor="category" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.category", "Selected Marathon Category *")}
											</label>
											<select
												id="category"
												name="category"
												value={formData.category}
												onChange={handleChange}
												className="form-select"
												style={{
													background: "#0c1e21",
													color: "#ffffff",
													border: errors.category ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											>
												<option value="3km">3 KM Community Fun Run (All Ages - Free)</option>
												<option value="5km">5 KM Public Run (14+ Years - Free / Supporter)</option>
												<option value="10km">10 KM Challenge Run (16+ Years - Free / Supporter)</option>
											</select>
											{errors.category && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.category}
												</div>
											)}
										</div>

										{/* T-Shirt Size */}
										<div className="col-md-6">
											<label htmlFor="tshirtSize" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.tshirt_size", "T-Shirt Size")}
											</label>
											<select
												id="tshirtSize"
												name="tshirtSize"
												value={formData.tshirtSize}
												onChange={handleChange}
												className="form-select"
												style={{
													background: "#0c1e21",
													color: "#ffffff",
													border: "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											>
												<option value="S">Small (S)</option>
												<option value="M">Medium (M)</option>
												<option value="L">Large (L)</option>
												<option value="XL">Extra Large (XL)</option>
												<option value="XXL">Double Extra Large (XXL)</option>
											</select>
										</div>

										{/* Emergency Contact */}
										<div className="col-12">
											<label htmlFor="emergencyContact" className="form-label" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.emergency_contact", "Emergency Contact Name & Phone *")}
											</label>
											<input
												id="emergencyContact"
												type="text"
												name="emergencyContact"
												value={formData.emergencyContact}
												onChange={handleChange}
												placeholder={t("marathon.registration.form.emergency_contact_ph", "e.g., Hari Ray - +977 98XXXXXXXX")}
												className={`form-control ${errors.emergencyContact ? "is-invalid" : ""}`}
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "#ffffff",
													border: errors.emergencyContact ? "1px solid #e74c3c" : "1px solid rgba(255, 255, 255, 0.2)",
													borderRadius: "12px",
													padding: "12px 16px",
												}}
											/>
											{errors.emergencyContact && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.emergencyContact}
												</div>
											)}
										</div>

										{/* Registration Type (Free vs Paid/Supporter - Configurable) */}
										<div className="col-12">
											<label className="form-label mb-2" style={{ fontSize: "14px", fontWeight: "600" }}>
												{t("marathon.registration.form.reg_type", "Registration Type *")}
											</label>
											<div className="row g-3">
												<div className="col-md-6">
													<div
														onClick={() => setFormData((prev) => ({ ...prev, registrationType: "free" }))}
														style={{
															padding: "14px 18px",
															borderRadius: "12px",
															background: formData.registrationType === "free" ? "rgba(30, 138, 138, 0.2)" : "rgba(255, 255, 255, 0.05)",
															border: formData.registrationType === "free" ? "2px solid #1e8a8a" : "1px solid rgba(255, 255, 255, 0.15)",
															cursor: "pointer",
															display: "flex",
															alignItems: "center",
															gap: "12px",
														}}
													>
														<input
															type="radio"
															name="registrationType"
															value="free"
															checked={formData.registrationType === "free"}
															onChange={handleChange}
															style={{ accentColor: "#1e8a8a" }}
														/>
														<div>
															<div style={{ fontWeight: "700", fontSize: "14px", color: "#ffffff" }}>
																{t("marathon.registration.form.reg_type_free", "Free Community Entry")}
															</div>
															<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
																No fee required • Open to all citizens
															</div>
														</div>
													</div>
												</div>

												<div className="col-md-6">
													<div
														onClick={() => setFormData((prev) => ({ ...prev, registrationType: "paid" }))}
														style={{
															padding: "14px 18px",
															borderRadius: "12px",
															background: formData.registrationType === "paid" ? "rgba(255, 94, 20, 0.2)" : "rgba(255, 255, 255, 0.05)",
															border: formData.registrationType === "paid" ? "2px solid #ff5e14" : "1px solid rgba(255, 255, 255, 0.15)",
															cursor: "pointer",
															display: "flex",
															alignItems: "center",
															gap: "12px",
														}}
													>
														<input
															type="radio"
															name="registrationType"
															value="paid"
															checked={formData.registrationType === "paid"}
															onChange={handleChange}
															style={{ accentColor: "#ff5e14" }}
														/>
														<div>
															<div style={{ fontWeight: "700", fontSize: "14px", color: "#ffffff" }}>
																{t("marathon.registration.form.reg_type_paid", "Supporter Entry")}
															</div>
															<div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
																Voluntary / Configurable community contribution
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										{/* Terms Consent */}
										<div className="col-12">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													id="agreeTerms"
													name="agreeTerms"
													checked={formData.agreeTerms}
													onChange={handleChange}
													style={{ accentColor: "#1e8a8a" }}
												/>
												<label className="form-check-label" htmlFor="agreeTerms" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.85)" }}>
													{t(
														"marathon.registration.form.terms",
														"I confirm I am medically fit to participate and agree to the event guidelines, terms, and privacy policy."
													)}
												</label>
											</div>
											{errors.agreeTerms && (
												<div style={{ color: "#ff7675", fontSize: "12px", marginTop: "4px" }}>
													{errors.agreeTerms}
												</div>
											)}
										</div>

										{/* Submit Button */}
										<div className="col-12 text-center pt-2">
											<button
												type="submit"
												disabled={isSubmitting}
												style={{
													background: "#ff5e14",
													color: "#ffffff",
													border: "none",
													borderRadius: "14px",
													padding: "16px 36px",
													fontSize: "16px",
													fontWeight: "800",
													letterSpacing: "0.5px",
													cursor: isSubmitting ? "not-allowed" : "pointer",
													opacity: isSubmitting ? 0.7 : 1,
													boxShadow: "0 10px 25px rgba(255, 94, 20, 0.35)",
													transition: "all 0.3s ease",
													display: "inline-flex",
													alignItems: "center",
													gap: "10px",
												}}
												onMouseEnter={(e) => {
													if (!isSubmitting) e.currentTarget.style.background = "#1e8a8a";
												}}
												onMouseLeave={(e) => {
													if (!isSubmitting) e.currentTarget.style.background = "#ff5e14";
												}}
											>
												{isSubmitting ? (
													<>
														<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
														<span>{t("marathon.registration.form.submitting", "Submitting Registration...")}</span>
													</>
												) : (
													<>
														<span>{t("marathon.registration.form.submit_btn", "Complete Marathon Registration")}</span>
														<i className="fa-solid fa-arrow-right"></i>
													</>
												)}
											</button>
										</div>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarathonRegistration;
