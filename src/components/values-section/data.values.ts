import qualityPolicy from "@/assets/values-section/photo-quality.png";
import visionMission from "@/assets/values-section/photo-vision.png";
import sustainability from "@/assets/values-section/photo-sus.png";

type ValuesDataItem = {
  image: string;
  title: string;
  href: string;
};

export const valuesData: ValuesDataItem[] = [
  {
    image: qualityPolicy,
    title: "Quality policy",
    href: "/quality-policy",
  },
  {
    image: visionMission,
    title: "Vision mission",
    href: "/vision-mission",
  },
  {
    image: sustainability,
    title: "Sustainability",
    href: "/sustainabillity",
  },
];
