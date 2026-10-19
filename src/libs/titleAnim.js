import { gsap, SplitText } from "@/libs/gsap.config";

const titleAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".title-anim");
	const splits = [];

	if (animItems.length) {
		let staggerAmount = 0.01,
			delayValue = 0.1,
			easeType = "power1.inout";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				let split = new SplitText(element, {
					types: "lines, words",
				});
				splits.push(split);
				gsap.from(split.chars, {
					y: "100%",
					duration: 0.5,
					delay: delayValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			} catch (e) {
				// prevent DOM mutation failure
			}
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

export default titleAnim;
