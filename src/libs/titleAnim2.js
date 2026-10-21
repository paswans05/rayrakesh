import { gsap } from "@/libs/gsap.config";

const titleAnim2 = contanerRef => {
	const animItems = gsap.utils.toArray(".text-anim");

	if (animItems.length) {
		let translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				gsap.from(element, {
					duration: 0.8,
					delay: delayValue,
					x: translateXValue,
					opacity: 0,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			} catch (e) {}
		});
	}

	return () => {};
};

export default titleAnim2;
