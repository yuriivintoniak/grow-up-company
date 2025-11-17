import pomegranateLarge1 from "@/assets/main-layout/fruits/pomegranate/large/1-pomegranate-large.png";
import pomegranateLarge2 from "@/assets/main-layout/fruits/pomegranate/large/2-pomegranate-large.png";
import pomegranateLarge3 from "@/assets/main-layout/fruits/pomegranate/large/3-pomegranate-large.png";
import pomegranateLarge4 from "@/assets/main-layout/fruits/pomegranate/large/4-pomegranate-large.png";
import pomegranateSmall2 from "@/assets/main-layout/fruits/pomegranate/small/2-pomegranate-small.png";
import pomegranateSmall3 from "@/assets/main-layout/fruits/pomegranate/small/3-pomegranate-small.png";
import pomegranateSmall4 from "@/assets/main-layout/fruits/pomegranate/small/4-pomegranate-small.png";

export type PomegranateImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const pomegranateImages: PomegranateImages = {
  large: {
    1: pomegranateLarge1,
    2: pomegranateLarge2,
    3: pomegranateLarge3,
    4: pomegranateLarge4,
  },
  small: {
    2: pomegranateSmall2,
    3: pomegranateSmall3,
    4: pomegranateSmall4,
  },
};
