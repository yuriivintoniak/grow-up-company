import lemons from "@/assets/products/photo-5.png";
import peppers from "@/assets/products/photo-2.png";
import squashes from "@/assets/products/photo-1.png";
import zucchini from "@/assets/products/photo-4.png";
import tomatoes from "@/assets/products/photo-8.png";
import mandarins from "@/assets/products/photo-3.png";
import cucumbers from "@/assets/products/photo-7.png";
import pomegranates from "@/assets/products/photo-6.png";

type FeaturedProduct = {
  name: string;
  image: string;
  path: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    image: pomegranates,
    name: "Pomegranates",
    path: "/fruits/pomegranate",
  },
  {
    image: cucumbers,
    name: "Cucumbers",
    path: "/vegetables/cucumber",
  },
  {
    image: tomatoes,
    name: "Tomatoes",
    path: "/vegetables/tomatoe",
  },
  {
    image: lemons,
    name: "Lemons",
    path: "/fruits/lemon",
  },
  {
    image: squashes,
    name: "Squashes",
    path: "/vegetables/squash",
  },
  {
    image: mandarins,
    name: "Mandarins",
    path: "/fruits/mandarin",
  },
  {
    image: zucchini,
    name: "Zucchini",
    path: "/vegetables/zucchini",
  },
  {
    image: peppers,
    name: "Peppers",
    path: "/vegetables/pepper",
  },
];
