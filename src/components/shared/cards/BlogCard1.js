"use client";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useLanguage } from "@/hooks/useLanguage";

const BlogCard1 = ({ blog, idx }) => {
	const { title, id, img, category, day, month } = blog || {};
	const { t, language } = useLanguage();

	const newsTitles = {
		en: [
			"Community Consultation on Rural Road Connections in Parsa",
			"Prioritizing Quality Infrastructure in Local Public Schools",
			"Promoting Vocational Skills and Local Opportunities for Youth",
		],
		ne: [
			"पर्सामा ग्रामीण सडक सञ्जाल विस्तारबारे स्थानीय नागरिकसँग परामर्श",
			"सामुदायिक विद्यालयहरूमा गुणस्तरीय पूर्वाधार निर्माणलाई प्राथमिकता",
			"पर्साका युवाहरूका लागि प्राविधिक सीप र स्थानीय रोजगारी प्रवर्द्धन",
		],
	};

	const displayTitle =
		newsTitles[language]?.[idx] || title || "Community Update for Parsa";

	const displayCategory =
		language === "ne" ? "अभियान समाचार" : "Campaign Update";

	return (
		<div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
			<div className="blog-thumb">
				<Link href="/contact">
					<Image
						src={img ? img : "/images/blog/blog-1.webp"}
						alt={displayTitle}
						width={870}
						height={450}
					/>
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href="/contact">{displayCategory}</Link>
					</span>
					<span>
						<Link href="/contact">
							{language === "ne" ? "राकेश राय अभियान" : "Rakesh Ray Campaign"}
						</Link>
					</span>
				</div>
				<h4 className="title">
					<Link href="/contact">{displayTitle}</Link>
				</h4>
				<ButtonPrimary
					text={t("news.read_more", "Read Update")}
					url={"/contact"}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default BlogCard1;
