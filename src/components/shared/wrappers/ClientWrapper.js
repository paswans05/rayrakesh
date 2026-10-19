"use client";
import animateInvertText from "@/libs/animateInvertText";
import arrangeAnim from "@/libs/arrangeAnim";
import arrangeAnim2 from "@/libs/arrangeAnim2";
import fadeInRightOnScrollAnim from "@/libs/fadeInRightOnScrollAnim";
import { useGSAP } from "@/libs/gsap.config";
import initSmoothScroller from "@/libs/initSmoothScroller";
import onePageNavAnim from "@/libs/onePageNavAnim";
import progressBar from "@/libs/progressBar";
import sidebarSticky from "@/libs/sidebarSticky";
import smoothScrollToTop from "@/libs/smoothScrollToTop";
import textReavealAnim from "@/libs/textReavealAnim";
import titleAnim from "@/libs/titleAnim";
import titleAnim2 from "@/libs/titleAnim2";
import titleAnim3 from "@/libs/titleAnim3";
import tjImageParallex from "@/libs/tjImageParallex";
import tjLeftSwipeAnimation from "@/libs/tjLeftSwipeAnimation";
import tjMagicCursorAnimation from "@/libs/tjMagicCursorAnimation";
import tjProgressAnimation from "@/libs/tjProgressAnimation";
import tjRightSwipeAnimation from "@/libs/tjRightSwipeAnimation";
import tjScrollSlider from "@/libs/tjScrollSlider";
import tjStackAnimation from "@/libs/tjStackAnimation";
import tjStackAnimation2 from "@/libs/tjStackAnimation2";
import tjStackAnimation3 from "@/libs/tjStackAnimation3";
import tjZoomInScroll from "@/libs/tjZoomInScroll";
import { useEffect } from "react";

const ClientWrapper = () => {
	useEffect(() => {
		import("wow.js").then(({ default: WOW }) => {
			try {
				new WOW().init();
			} catch (e) {}
		});
		smoothScrollToTop();
		const cleanup = tjMagicCursorAnimation();
		return () => {
			if (cleanup) cleanup();
		};
	}, []);

	useGSAP((context, contextSafe) => {
		initSmoothScroller();
		tjRightSwipeAnimation();
		tjLeftSwipeAnimation();
		const cleanupTitle = titleAnim();
		const cleanupTitle2 = titleAnim2();
		const cleanupTitle3 = titleAnim3();
		const cleanupText = textReavealAnim();
		sidebarSticky();
		arrangeAnim();
		arrangeAnim2();
		const cleanupInvert = animateInvertText();
		fadeInRightOnScrollAnim();
		onePageNavAnim(contextSafe);
		progressBar();
		tjStackAnimation();
		tjScrollSlider();
		tjStackAnimation2();
		tjImageParallex();
		tjProgressAnimation();
		tjZoomInScroll();
		tjStackAnimation3();

		return () => {
			if (cleanupTitle) cleanupTitle();
			if (cleanupTitle2) cleanupTitle2();
			if (cleanupTitle3) cleanupTitle3();
			if (cleanupText) cleanupText();
			if (cleanupInvert) cleanupInvert();
		};
	});

	return null;
};

export default ClientWrapper;
