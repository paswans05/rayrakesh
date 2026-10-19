import { gsap, SplitText } from "@/libs/gsap.config";

const titleAnim3 = contanerRef => {
	const animItems = gsap.utils.toArray(".hero-text-anim");
	const splits = [];

	if (animItems.length) {
		let staggerAmount = 0.05,
			delayValue = 0.4,
			easeType = "power1.out";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				let animationSplitText = new SplitText(element, { type: "chars, words" });
				splits.push(animationSplitText);
				gsap.from(animationSplitText.chars, {
					opacity: 0,
					duration: 0.4,
					delay: delayValue,
					ease: easeType,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			} catch (e) {}
		});
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

export default titleAnim3;
