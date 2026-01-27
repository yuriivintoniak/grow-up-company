import lemonLarge1 from "@/assets/main-layout/fruits/lemon/large/1-lemon-large-1.png";
import lemonLarge2 from "@/assets/main-layout/fruits/lemon/large/2-lemon-large.png";
import lemonLarge3 from "@/assets/main-layout/fruits/lemon/large/3-lemon-large.png";
import lemonLarge4 from "@/assets/main-layout/fruits/lemon/large/4-lemon-large.png";
import lemonSmall2 from "@/assets/main-layout/fruits/lemon/small/2-lemon-small.png";
import lemonSmall3 from "@/assets/main-layout/fruits/lemon/small/3-lemon-small.png";
import lemonSmall4 from "@/assets/main-layout/fruits/lemon/small/4-lemon-small.png";

export type LemonImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const lemonImages: LemonImages = {
  large: {
    1: lemonLarge1,
    2: lemonLarge2,
    3: lemonLarge3,
    4: lemonLarge4,
  },
  small: {
    2: lemonSmall2,
    3: lemonSmall3,
    4: lemonSmall4,
  },
};
