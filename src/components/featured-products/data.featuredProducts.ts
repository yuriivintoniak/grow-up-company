import lemons from "@/assets/products/photo-5.png";
import peppers from "@/assets/products/photo-2.png";
import squashes from "@/assets/products/photo-1.png";
import zucchini from "@/assets/products/photo-4.png";
import tomatoes from "@/assets/products/photo-8.png";
import mandarins from "@/assets/products/photo-3.png";
import cucumbers from "@/assets/products/photo-7.png";
import pomegranates from "@/assets/products/photo-6.png";

type FeaturedProduct = {
  id: number;
  name: string;
  image: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    image: pomegranates,
    name: "Pomegranates",
  },
  {
    id: 2,
    image: cucumbers,
    name: "Cucumbers",
  },
  {
    id: 3,
    image: tomatoes,
    name: "Tomatoes",
  },
  {
    id: 4,
    image: lemons,
    name: "Lemons",
  },
  {
    id: 5,
    image: squashes,
    name: "Squashes",
  },
  {
    id: 6,
    image: mandarins,
    name: "Mandarins",
  },
  {
    id: 7,
    image: zucchini,
    name: "Zucchini",
  },
  {
    id: 8,
    image: peppers,
    name: "Peppers",
  },
];
