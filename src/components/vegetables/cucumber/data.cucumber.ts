import cucumberLarge1 from "@/assets/main-layout/vegetables/cucumber/large/1-cucumber-large-1.png";
import cucumberLarge2 from "@/assets/main-layout/vegetables/cucumber/large/2-cucumber-large.png";
import cucumberLarge3 from "@/assets/main-layout/vegetables/cucumber/large/3-cucumber-large.png";
import cucumberLarge4 from "@/assets/main-layout/vegetables/cucumber/large/4-cucumber-large.png";
import cucumberSmall2 from "@/assets/main-layout/vegetables/cucumber/small/2-cucumber-small.png";
import cucumberSmall3 from "@/assets/main-layout/vegetables/cucumber/small/3-cucumber-small.png";
import cucumberSmall4 from "@/assets/main-layout/vegetables/cucumber/small/4-cucumber-small.png";

export type CucumberImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const cucumberImages: CucumberImages = {
  large: {
    1: cucumberLarge1,
    2: cucumberLarge2,
    3: cucumberLarge3,
    4: cucumberLarge4,
  },
  small: {
    2: cucumberSmall2,
    3: cucumberSmall3,
    4: cucumberSmall4,
  },
};
