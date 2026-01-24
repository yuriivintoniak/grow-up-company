import pepperLarge1 from "@/assets/main-layout/vegetables/pepper/large/1-pepper-large-1.png";
import pepperLarge2 from "@/assets/main-layout/vegetables/pepper/large/2-pepper-large.png";
import pepperLarge3 from "@/assets/main-layout/vegetables/pepper/large/3-pepper-large.png";
import pepperLarge4 from "@/assets/main-layout/vegetables/pepper/large/4-pepper-large.png";
import pepperSmall2 from "@/assets/main-layout/vegetables/pepper/small/2-pepper-small.png";
import pepperSmall3 from "@/assets/main-layout/vegetables/pepper/small/3-pepper-small.png";
import pepperSmall4 from "@/assets/main-layout/vegetables/pepper/small/4-pepper-small.png";

export type PepperImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const pepperImages: PepperImages = {
  large: {
    1: pepperLarge1,
    2: pepperLarge2,
    3: pepperLarge3,
    4: pepperLarge4,
  },
  small: {
    2: pepperSmall2,
    3: pepperSmall3,
    4: pepperSmall4,
  },
};
