import qualityPolicy from "@/assets/values-section/photo-quality.png";
import visionMission from "@/assets/values-section/photo-vision.png";
import sustainability from "@/assets/values-section/photo-sus.png";

type ValuesDataItem = {
  id: number;
  image: string;
  title: string;
};

export const valuesData: ValuesDataItem[] = [
  {
    id: 1,
    image: qualityPolicy,
    title: "Quality policy",
  },
  {
    id: 2,
    image: visionMission,
    title: "Vision mission",
  },
  {
    id: 3,
    image: sustainability,
    title: "Sustainability",
  },
];
