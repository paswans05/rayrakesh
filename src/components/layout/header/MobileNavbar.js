"use client";
import { useLanguage } from "@/hooks/useLanguage";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const { t } = useLanguage();

	const getItemName = (item) => {
		if (item?.path === "/") return t("nav.home", item?.name);
		if (item?.path === "/contact") return t("nav.contact", item?.name);
		return item?.name;
	};

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<nav className="mean-nav">
						<ul>
							{navItems.map((item, idx) => (
								<li
									key={idx}
									className={idx === navItems.length - 1 ? "mean-last" : ""}
								>
									<Link href={item?.path ? item?.path : "/"}>
										{getItemName(item)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
