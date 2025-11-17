import { createFileRoute } from "@tanstack/react-router";
import Pomegranate from "@/components/fruits/pomegranate/Pomegranate";

export const Route = createFileRoute("/(main-layout)/fruits/pomegranate")({
  component: PomegranatePage,
});

function PomegranatePage() {
  return <Pomegranate />;
}
