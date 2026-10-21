import { gsap } from "@/libs/gsap.config";

const titleAnim3 = contanerRef => {
	const animItems = gsap.utils.toArray(".hero-text-anim");

	if (animItems.length) {
		let delayValue = 0.2,
			easeType = "power1.out";

		animItems.forEach(element => {
			try {
				element.classList.add("start-anim");
				gsap.from(element, {
					opacity: 0,
					y: 20,
					duration: 0.6,
					delay: delayValue,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			} catch (e) {}
		});
	}

	return () => {};
};

export default titleAnim3;
