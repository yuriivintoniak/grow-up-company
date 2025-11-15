import { createFileRoute } from "@tanstack/react-router";
import VisionMission from "@/components/values-section/vision-mission/VisionMission";

export const Route = createFileRoute("/(main-layout)/(values)/vision-mission")({
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return <VisionMission />;
}
