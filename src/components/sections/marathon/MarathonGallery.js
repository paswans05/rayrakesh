"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

const MarathonGallery = () => {
	const { t } = useLanguage();

	const galleryItems = [
		{
			src: "/images/project/project-1.png",
			caption: "Community Gathering & Health Discussion in Parsa",
			tag: "Community",
		},
		{
			src: "/images/project/project-2.png",
			caption: "Youth & Sports Volunteers Preparing for the Marathon",
			tag: "Youth",
		},
		{
			src: "/images/project/project-3.png",
			caption: "Field Visit & Community Engagement by Rakesh Ray",
			tag: "Field Visit",
		},
		{
			src: "/images/project/project-4.png",
			caption: "Local Residents Discussing Public Fitness & Better Roads",
			tag: "Citizens",
		},
		{
			src: "/images/about/about-1.png",
			caption: "Rakesh Ray — Leading Community-Driven Initiatives",
			tag: "Leadership",
		},
		{
			src: "/images/hero/hero-img.png",
			caption: "United for a Healthy, Prosperous Nepal",
			tag: "Vision",
		},
	];

	return (
		<section
			id="gallery"
			className="section-gap-x"
			style={{
				background: "#ffffff",
				color: "#18292c",
				paddingTop: "90px",
				paddingBottom: "95px",
			}}
		>
			<div className="container">
				{/* Section Header */}
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8 col-md-10">
						<div
							className="d-inline-block text-uppercase fw-bold mb-2"
							style={{
								fontSize: "13px",
								color: "#1e8a8a",
								letterSpacing: "1.5px",
							}}
						>
							{t("marathon.gallery.subtitle", "Community Moments")}
						</div>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
								fontWeight: "800",
								color: "#0c1e21",
								lineHeight: "1.2",
								marginBottom: "16px",
							}}
						>
							{t("marathon.gallery.title_prefix", "Marathon Preparation & ")}
							<span style={{ color: "#1e8a8a" }}>
								{t("marathon.gallery.title_highlight", "Community Spirit")}
							</span>
						</h2>
						<p
							style={{
								fontSize: "1.05rem",
								color: "#67787a",
								lineHeight: "1.7",
								maxWidth: "680px",
								margin: "0 auto",
							}}
						>
							{t(
								"marathon.gallery.desc",
								"Snapshots from local fitness gatherings, youth sports groups, and community preparation across Parsa, Nepal."
							)}
						</p>
					</div>
				</div>

				{/* Responsive Gallery Grid */}
				<div className="row g-4">
					{galleryItems.map((item, idx) => (
						<div key={idx} className="col-lg-4 col-md-6">
							<div
								style={{
									borderRadius: "18px",
									overflow: "hidden",
									position: "relative",
									background: "#0c1e21",
									boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
									aspectRatio: "4 / 3",
									cursor: "pointer",
								}}
							>
								<Image
									src={item.src}
									alt={item.caption}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{
										objectFit: "cover",
										transition: "transform 0.4s ease",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "scale(1.05)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "scale(1)";
									}}
								/>

								{/* Gradient overlay with caption */}
								<div
									style={{
										position: "absolute",
										bottom: "0",
										left: "0",
										right: "0",
										padding: "20px 16px 14px",
										background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
										color: "#ffffff",
										pointerEvents: "none",
									}}
								>
									<span
										style={{
											background: "#1e8a8a",
											color: "#ffffff",
											padding: "2px 8px",
											borderRadius: "10px",
											fontSize: "11px",
											fontWeight: "700",
											textTransform: "uppercase",
											display: "inline-block",
											marginBottom: "6px",
										}}
									>
										{item.tag}
									</span>
									<div style={{ fontSize: "13.5px", fontWeight: "600", lineHeight: "1.4" }}>
										{item.caption}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MarathonGallery;
