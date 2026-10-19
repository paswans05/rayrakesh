"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "@/translations/en";
import { ne } from "@/translations/ne";

const translations = { en, ne };

const LanguageContext = createContext({
	language: "en",
	setLanguage: () => {},
	toggleLanguage: () => {},
	t: (key, fallback) => fallback || key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
	const [language, setLanguageState] = useState("en");

	useEffect(() => {
		try {
			const saved = localStorage.getItem("app_lang");
			if (saved === "en" || saved === "ne") {
				setLanguageState(saved);
			}
		} catch (e) {
			// localStorage not available
		}
	}, []);

	const setLanguage = (lang) => {
		if (lang === "en" || lang === "ne") {
			setLanguageState(lang);
			try {
				localStorage.setItem("app_lang", lang);
			} catch (e) {}
		}
	};

	const toggleLanguage = () => {
		setLanguage(language === "en" ? "ne" : "en");
	};

	const t = (path, fallback) => {
		const currentDict = translations[language] || en;
		const fallbackDict = en;

		const getVal = (dict, keyPath) => {
			if (!keyPath || !dict) return undefined;
			const parts = keyPath.split(".");
			let cur = dict;
			for (const p of parts) {
				if (cur && typeof cur === "object" && p in cur) {
					cur = cur[p];
				} else {
					return undefined;
				}
			}
			return cur;
		};

		const val = getVal(currentDict, path);
		if (val !== undefined) return val;

		const fb = getVal(fallbackDict, path);
		if (fb !== undefined) return fb;

		return fallback !== undefined ? fallback : path;
	};

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage, toggleLanguage, t }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContext;
