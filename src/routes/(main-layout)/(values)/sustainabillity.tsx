import { createFileRoute } from "@tanstack/react-router";
import Sustainabillity from "@/components/values-section/sustainabillity/Sustainabillity";

export const Route = createFileRoute("/(main-layout)/(values)/sustainabillity")({
  component: SustainabillityPage,
});

function SustainabillityPage() {
  return <Sustainabillity />;
}
