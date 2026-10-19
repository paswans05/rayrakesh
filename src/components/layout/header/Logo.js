"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						!isStickyHeader
							? "/images/logos/logo.png"
							: "/images/logos/logo.png"
					}
					alt="Rakesh Ray — A Better Parsa, Together"
					width={544}
					height={181}
					style={{ height: "auto" }}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
