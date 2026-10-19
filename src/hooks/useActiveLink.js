"use client";
import { usePathname } from "next/navigation";

export default function useActiveLink() {
	const currentPathname = usePathname();
	const makeActiveLink = (navItem) => {
		if (!navItem) return null;
		const isActive =
			navItem.path === "/"
				? currentPathname === "/"
				: currentPathname === navItem.path;
		return {
			...navItem,
			isActive,
		};
	};
	return makeActiveLink;
}
