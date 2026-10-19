import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const MobileNavbar = () => {
	const navItems = getNavItems();

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
										{item?.name}
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
