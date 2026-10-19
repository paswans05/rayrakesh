import { gsap, SplitText } from "@/libs/gsap.config";

const textReavealAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".tj-text-invert");
	const splits = [];

	if (animItems.length) {
		try {
			const split = new SplitText(".tj-text-invert", { type: "lines" });
			splits.push(split);
			split.lines.forEach(target => {
				gsap.to(target, {
					backgroundPositionX: 0,
					ease: "none",
					scrollTrigger: {
						trigger: target,
						scrub: 1,
						start: "top 85%",
						end: "bottom center",
					},
				});
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

export default textReavealAnim;
