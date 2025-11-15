import cucumber from "@/assets/main-layout/vegetables/cucumber.png";
import pepper from "@/assets/main-layout/vegetables/pepper.png";
import squash from "@/assets/main-layout/vegetables/squash.png";
import tomatoe from "@/assets/main-layout/vegetables/tomatoe.png";
import zucchini from "@/assets/main-layout/vegetables/zucchini.png";

type VegetableImage = {
  id: string;
  src: string;
  alt: string;
};

export const vegetablesImages: VegetableImage[] = [
  { id: "tomatoe", src: tomatoe, alt: "Tomatoe" },
  { id: "cucumber", src: cucumber, alt: "Cucumber" },
  { id: "pepper", src: pepper, alt: "Pepper" },
  { id: "zucchini", src: zucchini, alt: "Zucchini" },
  { id: "squash", src: squash, alt: "Squash" },
];
