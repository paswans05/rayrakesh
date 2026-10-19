"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import { useLanguage } from "@/hooks/useLanguage";

const Contact3 = () => {
	const { t, language } = useLanguage();

	const selectOptions = [
		{
			value: "0",
			optionName:
				language === "ne" ? "विषय छान्नुहोस्" : "Select Topic",
		},
		{
			value: "1",
			optionName:
				language === "ne" ? "सडक तथा पूर्वाधार" : "Roads & Infrastructure",
		},
		{
			value: "2",
			optionName:
				language === "ne" ? "शिक्षा तथा विद्यालय" : "Education & Schools",
		},
		{
			value: "3",
			optionName:
				language === "ne" ? "स्वास्थ्य सेवा" : "Healthcare & Health Posts",
		},
		{
			value: "4",
			optionName:
				language === "ne" ? "युवा तथा रोजगारी" : "Youth & Local Employment",
		},
		{
			value: "5",
			optionName:
				language === "ne" ? "सरसफाइ तथा वातावरण" : "Sanitation & Environment",
		},
		{
			value: "6",
			optionName:
				language === "ne" ? "अभियानमा स्वयंसेवक बन्ने" : "Volunteer for Campaign",
		},
		{
			value: "7",
			optionName:
				language === "ne" ? "सामान्य सुझाव" : "General Suggestion",
		},
	];

	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								{t(
									"contact_page.form_title",
									"Share Your Thoughts or Visit Our Campaign Office in Parsa."
								)}
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder={t("home_contact.full_name", "Full Name*")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder={t("home_contact.email_address", "Email Address*")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder={t("home_contact.phone_number", "Phone number*")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={selectOptions}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage"
												id="message"
												placeholder={t(
													"home_contact.type_message",
													"Write your message or suggestion *"
												)}
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary
											type={"submit"}
											text={t("contact_page.submit_now", "Submit Message")}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe
								src="https://maps.google.com/maps?q=Parsa%2C%20Sarlahi%2C%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
								title="Parsa, Sarlahi, Nepal"
								style={{ border: 0, width: "100%", height: "100%", minHeight: "450px" }}
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
