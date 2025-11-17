import mandarinLarge1 from "@/assets/main-layout/fruits/mandarin/large/1-mandarin-large.png";
import mandarinLarge2 from "@/assets/main-layout/fruits/mandarin/large/2-mandarin-large.png";
import mandarinLarge3 from "@/assets/main-layout/fruits/mandarin/large/3-mandarin-large.png";
import mandarinLarge4 from "@/assets/main-layout/fruits/mandarin/large/4-mandarin-large.png";
import mandarinSmall2 from "@/assets/main-layout/fruits/mandarin/small/2-mandarin-small.png";
import mandarinSmall3 from "@/assets/main-layout/fruits/mandarin/small/3-mandarin-small.png";
import mandarinSmall4 from "@/assets/main-layout/fruits/mandarin/small/4-mandarin-small.png";

export type MandarinImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const mandarinImages: MandarinImages = {
  large: {
    1: mandarinLarge1,
    2: mandarinLarge2,
    3: mandarinLarge3,
    4: mandarinLarge4,
  },
  small: {
    2: mandarinSmall2,
    3: mandarinSmall3,
    4: mandarinSmall4,
  },
};
