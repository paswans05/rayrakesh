"use client";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const HeaderTop = ({ type }) => {
	const { t } = useLanguage();

	return (
		<div className="header-top">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="header-top-content">
							<p className="topbar-text">
								<i className="tji-excellence"></i>
								{t("header.recognized", "Together for a Better Parsa")}{" "}
								<Link href="/contact">
									{t("header.join_us", "Join Our Campaign")}
								</Link>
							</p>
							<div className="header-info">
								<div className="info-item">
									<span>
										<i className="tji-location"></i>
									</span>
									<Link href="/contact">
										{t("footer.location", "Parsa, Sarlahi, Nepal")}
									</Link>
								</div>
								<div className="info-item">
									<span>
										<i className="tji-phone-3"></i>
									</span>
									<Link href="tel:9779818888722">+977 981-8888722</Link>
								</div>
								<div className="info-item">
									<div className="social-links style-2">
										<ul>
											<li>
												<Link href="https://www.facebook.com/" target="_blank">
													<i className="fa-brands fa-facebook-f"></i>
												</Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/" target="_blank">
													<i className="fa-brands fa-instagram"></i>
												</Link>
											</li>
											<li>
												<Link href="https://x.com/" target="_blank">
													<i className="fa-brands fa-x-twitter"></i>
												</Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/" target="_blank">
													<i className="fa-brands fa-linkedin-in"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
