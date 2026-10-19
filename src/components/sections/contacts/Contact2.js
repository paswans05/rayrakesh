"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";

const Contact2 = () => {
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
		<section className="tj-contact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="global-map wow fadeInUp" data-wow-delay=".3s">
							<div className="global-map-img">
								<img src="/images/bg/map.svg" alt="Parsa Location Map" />
								<div className="location-indicator loc-1">
									<div className="location-tooltip">
										<span>
											{language === "ne" ? "अभियान मुख्य कार्यालय:" : "Main Campaign Office:"}
										</span>
										<p>Parsa, Sarlahi, Madhesh Province, Nepal.</p>
										<Link href="tel:9779818888722">P: +977 981-8888722</Link>
										<Link href="mailto:erakesh.ray@gmail.com">
											M: erakesh.ray@gmail.com
										</Link>
									</div>
								</div>
								<div className="location-indicator loc-2">
									<div className="location-tooltip">
										<span>
											{language === "ne" ? "सम्पर्क सम्पर्क केन्द्र:" : "Contact Center:"}
										</span>
										<p>Sarlahi District, Madhesh Province, Nepal.</p>
										<Link href="tel:9779818888722">P: +977 981-8888722</Link>
										<Link href="mailto:erakesh.ray@gmail.com">
											M: erakesh.ray@gmail.com
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="contact-form style-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="sec-heading">
								<span className="sub-title text-white">
									<i className="tji-box"></i>
									{t("home_contact.subtitle", "Get in Touch")}
								</span>
								<h2 className="sec-title title-anim">
									{t("home_contact.title_prefix", "Send Us Your ")}
									<span>{t("home_contact.title_highlight", "Message.")}</span>
								</h2>
							</div>
							<form id="contact-form-2">
								<div className="row wow fadeInUp" data-wow-delay=".5s">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName2"
												placeholder={t("home_contact.full_name", "Full Name *")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail2"
												placeholder={t("home_contact.email_address", "Email Address *")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone2"
												placeholder={t("home_contact.phone_number", "Phone number *")}
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
												name="cfMessage2"
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
											text={t("home_contact.send_message", "Send Message")}
											type={"submit"}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Contact2;
