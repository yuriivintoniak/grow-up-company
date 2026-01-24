import tomatoeLarge1 from "@/assets/main-layout/vegetables/tomatoe/large/1-tomatoe-large-1.png";
import tomatoeLarge2 from "@/assets/main-layout/vegetables/tomatoe/large/2-tomatoe-large.png";
import tomatoeLarge3 from "@/assets/main-layout/vegetables/tomatoe/large/3-tomatoe-large.png";
import tomatoeLarge4 from "@/assets/main-layout/vegetables/tomatoe/large/4-tomatoe-large.png";
import tomatoeSmall2 from "@/assets/main-layout/vegetables/tomatoe/small/2-tomatoe-small.png";
import tomatoeSmall3 from "@/assets/main-layout/vegetables/tomatoe/small/3-tomatoe-small.png";
import tomatoeSmall4 from "@/assets/main-layout/vegetables/tomatoe/small/4-tomatoe-small.png";

export type TomatoeImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const tomatoeImages: TomatoeImages = {
  large: {
    1: tomatoeLarge1,
    2: tomatoeLarge2,
    3: tomatoeLarge3,
    4: tomatoeLarge4,
  },
  small: {
    2: tomatoeSmall2,
    3: tomatoeSmall3,
    4: tomatoeSmall4,
  },
};
