import { gsap, SplitText } from "@/libs/gsap.config";

const titleAnim2 = contanerRef => {
	const animItems = gsap.utils.toArray(".text-anim");
	const splits = [];

	if (animItems.length) {
		let staggerAmount = 0.03,
			translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				let animationSplitText = new SplitText(element, { type: "chars, words" });
				splits.push(animationSplitText);
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
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

export default titleAnim2;
