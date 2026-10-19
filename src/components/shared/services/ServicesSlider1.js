"use client";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import { useLanguage } from "@/hooks/useLanguage";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const icons = [
	"tji-service-1",
	"tji-service-2",
	"tji-service-3",
	"tji-service-4",
	"tji-service-5",
	"tji-service-6",
	"tji-service-1",
];

const images = [
	"/images/service/service-1.webp",
	"/images/service/service-2.webp",
	"/images/service/service-3.webp",
	"/images/service/service-4.webp",
	"/images/service/service-5.webp",
	"/images/service/service-6.webp",
	"/images/service/service-1.webp",
];

const ServicesSlider1 = () => {
	const { t } = useLanguage();
	const visionItems = t("solutions.items");
	const items = Array.isArray(visionItems) ? visionItems : [];

	return (
		<Swiper
			slidesPerView={1.3}
			spaceBetween={15}
			loop={true}
			speed={1500}
			centeredSlides={true}
			autoplay={{
				delay: 4500,
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			breakpoints={{
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2.3,
				},
				900: {
					slidesPerView: 2.6,
				},
				1024: {
					slidesPerView: 3.2,
				},
				1200: {
					slidesPerView: 3.4,
					spaceBetween: 28,
				},
				1400: {
					slidesPerView: 4.2,
					spaceBetween: 28,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="service-slider"
		>
			{items.map((service, idx) => (
				<SwiperSlide key={idx}>
					<ServiceCard1
						service={{
							...service,
							iconName: icons[idx % icons.length],
							img: images[idx % images.length],
						}}
						idx={idx}
					/>
				</SwiperSlide>
			))}
			<div className="swiper-pagination-area white-pagination"></div>
		</Swiper>
	);
};

export default ServicesSlider1;
