"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useLanguage } from "@/hooks/useLanguage";

const ServiceCard1 = ({ service, idx }) => {
	const { title, desc, img, iconName } = service || {};
	const { t } = useLanguage();

	return (
		<div className="service-item style-1">
			<div className="service-img">
				<Image
					src={img ? img : "/images/service/service-1.webp"}
					alt={title || "Vision"}
					width={870}
					height={450}
				/>
			</div>
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href="/contact">{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={t("solutions.learn_more", "Learn More")}
					url={"/contact"}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard1;
