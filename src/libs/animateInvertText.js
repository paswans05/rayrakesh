import { gsap, SplitText } from "@/libs/gsap.config";

const animateInvertText = contanerRef => {
	const animItems = gsap.utils.toArray(".title-highlight");
	const splits = [];

	if (animItems.length) {
		try {
			const highlightText = new SplitText(".title-highlight", {
				type: "lines",
				linesClass: "line",
			});
			splits.push(highlightText);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".title-highlight",
					scrub: 1,
					start: "top 80%",
					end: "bottom center",
				},
			});
			tl.to(".line", {
				"--highlight-offset": "100%",
				stagger: 0.4,
			});
		} catch (e) {}
	}

	return () => {
		splits.forEach(s => {
			try {
				if (s && typeof s.revert === "function") {
					s.revert();
				}
			} catch (e) {}
		});
	};
};

export default animateInvertText;
