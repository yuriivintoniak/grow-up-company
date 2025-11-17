import lemon from "@/assets/main-layout/fruits/Lemon.png";
import mandarin from "@/assets/main-layout/fruits/Mandarin.png";
import pomegranate from "@/assets/main-layout/fruits/Pomegranate.png";

type FruitImage = {
  id: string;
  src: string;
  alt: string;
};

export const fruitsImages: FruitImage[] = [
  { id: "pomegranate", src: pomegranate, alt: "Pomegranate" },
  { id: "lemon", src: lemon, alt: "Lemon" },
  { id: "mandarin", src: mandarin, alt: "Mandarin" },
];
