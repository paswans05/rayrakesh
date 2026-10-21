"use client";
import useActiveLink from "@/hooks/useActiveLink";
import { useLanguage } from "@/hooks/useLanguage";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const { t } = useLanguage();
	const navItems = getNavItems();

	const getItemName = (item) => {
		if (item?.path === "/") return t("nav.home", item?.name);
		if (item?.path === "/marathon") return t("nav.marathon", item?.name);
		if (item?.path === "/contact") return t("nav.contact", item?.name);
		return item?.name;
	};

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems.map((item, idx) => {
						const activeItem = makeActiveLink(item);
						return (
							<li
								key={idx}
								className={
									activeItem?.isActive
										? "current-menu-item current-menu-ancestor"
										: ""
								}
							>
								<Link href={activeItem?.path ? activeItem?.path : "/"}>
									{getItemName(activeItem)}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
