"use client";
import React, { useState } from "react";
import MarathonHero from "./MarathonHero";
import MarathonAbout from "./MarathonAbout";
import MarathonCategories from "./MarathonCategories";
import MarathonEventInfo from "./MarathonEventInfo";
import MarathonRegistration from "./MarathonRegistration";
import MarathonGallery from "./MarathonGallery";
import MarathonVolunteer from "./MarathonVolunteer";
import MarathonCta from "./MarathonCta";

const MarathonPageContent = () => {
	const [selectedCategory, setSelectedCategory] = useState("5km");

	const handleSelectCategory = (catId) => {
		setSelectedCategory(catId);
	};

	return (
		<>
			<MarathonHero />
			<MarathonAbout />
			<MarathonCategories onSelectCategory={handleSelectCategory} />
			<MarathonEventInfo />
			<MarathonRegistration initialCategory={selectedCategory} />
			<MarathonGallery />
			<MarathonVolunteer />
			<MarathonCta />
		</>
	);
};

export default MarathonPageContent;
