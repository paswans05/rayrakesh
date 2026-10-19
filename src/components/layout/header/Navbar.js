"use client";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();

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
									{activeItem?.name}
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
