import { gsap } from "@/libs/gsap.config";

const titleAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".title-anim");

	if (animItems.length) {
		let delayValue = 0.1,
			easeType = "power2.out";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				gsap.from(element, {
					y: 28,
					opacity: 0,
					duration: 0.8,
					delay: delayValue,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			} catch (e) {
				// prevent DOM mutation failure
			}
		});
	}

	return () => {};
};

export default titleAnim;
