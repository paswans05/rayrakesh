import { StaticImageData } from "next/image";
import stepA from "@/images/step-a.jpg";
import stepB from "@/images/step-b.jpg";
import stepC from "@/images/step-c.jpg";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    step: "01",
    title: "Personalized In-Home Visits",
    description: "At your personalized in-home consultation, an interior designer will listen to your goals.",
    image: stepA,
  },
  {
    step: "02",
    title: "Review Your Custom Designs",
    description: "For your second consultation, visit our local showroom to review design options.",
    image: stepB,
  },
  {
    step: "03",
    title: "Precision Design Execution",
    description: "With your design finalized, we manage every step of execution to perfection.",
    image: stepC,
  },
];
