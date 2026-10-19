"use client";
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitcher = ({ isMobile = false }) => {
	const { language, setLanguage } = useLanguage();

	return (
		<div
			className={`language-switcher ${
				isMobile ? "language-switcher-mobile" : "language-switcher-desktop"
			}`}
			style={{
				display: "inline-flex",
				alignItems: "center",
				background: isMobile ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.12)",
				border: "1px solid rgba(255, 255, 255, 0.2)",
				borderRadius: "30px",
				padding: "3px 4px",
				gap: "2px",
				backdropFilter: "blur(8px)",
			}}
		>
			<button
				type="button"
				onClick={() => setLanguage("en")}
				style={{
					background: language === "en" ? "var(--tj-color-theme-primary, #ff5e14)" : "transparent",
					color: language === "en" ? "#fff" : "#ddd",
					border: "none",
					borderRadius: "20px",
					padding: "4px 10px",
					fontSize: "12px",
					fontWeight: language === "en" ? "700" : "500",
					cursor: "pointer",
					transition: "all 0.3s ease",
					display: "inline-flex",
					alignItems: "center",
					gap: "4px",
					lineHeight: "1.2",
				}}
				title="English"
			>
				<span>🇬🇧</span> ENG
			</button>
			<button
				type="button"
				onClick={() => setLanguage("ne")}
				style={{
					background: language === "ne" ? "var(--tj-color-theme-primary, #ff5e14)" : "transparent",
					color: language === "ne" ? "#fff" : "#ddd",
					border: "none",
					borderRadius: "20px",
					padding: "4px 10px",
					fontSize: "12px",
					fontWeight: language === "ne" ? "700" : "500",
					cursor: "pointer",
					transition: "all 0.3s ease",
					display: "inline-flex",
					alignItems: "center",
					gap: "4px",
					lineHeight: "1.2",
				}}
				title="नेपाली"
			>
				<span>🇳🇵</span> नेपाली
			</button>
		</div>
	);
};

export default LanguageSwitcher;
