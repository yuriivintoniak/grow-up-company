import squashLarge1 from "@/assets/main-layout/vegetables/squash/large/1-squash-large.png";
import squashLarge2 from "@/assets/main-layout/vegetables/squash/large/2-squash-large.png";
import squashLarge3 from "@/assets/main-layout/vegetables/squash/large/3-squash-large.png";
import squashLarge4 from "@/assets/main-layout/vegetables/squash/large/4-squash-large.png";
import squashSmall2 from "@/assets/main-layout/vegetables/squash/small/2-squash-small.png";
import squashSmall3 from "@/assets/main-layout/vegetables/squash/small/3-squash-small.png";
import squashSmall4 from "@/assets/main-layout/vegetables/squash/small/4-squash-small.png";

export type SquashImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const squashImages: SquashImages = {
  large: {
    1: squashLarge1,
    2: squashLarge2,
    3: squashLarge3,
    4: squashLarge4,
  },
  small: {
    2: squashSmall2,
    3: squashSmall3,
    4: squashSmall4,
  },
};
