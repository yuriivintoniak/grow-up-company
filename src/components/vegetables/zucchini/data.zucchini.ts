import zucchiniLarge1 from "@/assets/main-layout/vegetables/zucchini/large/1-zucchini-large.png";
import zucchiniLarge2 from "@/assets/main-layout/vegetables/zucchini/large/2-zucchini-large.png";
import zucchiniLarge3 from "@/assets/main-layout/vegetables/zucchini/large/3-zucchini-large.png";
import zucchiniLarge4 from "@/assets/main-layout/vegetables/zucchini/large/4-zucchini-large.png";
import zucchiniSmall2 from "@/assets/main-layout/vegetables/zucchini/small/2-zucchini-small.png";
import zucchiniSmall3 from "@/assets/main-layout/vegetables/zucchini/small/3-zucchini-small.png";
import zucchiniSmall4 from "@/assets/main-layout/vegetables/zucchini/small/4-zucchini-small.png";

export type ZucchiniImages = {
  large: Record<number, string>; 
  small: Record<number, string>; 
};

export const zucchiniImages: ZucchiniImages = {
  large: {
    1: zucchiniLarge1,
    2: zucchiniLarge2,
    3: zucchiniLarge3,
    4: zucchiniLarge4,
  },
  small: {
    2: zucchiniSmall2,
    3: zucchiniSmall3,
    4: zucchiniSmall4,
  },
};
