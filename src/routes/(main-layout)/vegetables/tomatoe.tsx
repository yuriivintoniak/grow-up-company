import { createFileRoute } from "@tanstack/react-router";
import Tomatoe from "@/components/vegetables/tomatoe/Tomatoe";

export const Route = createFileRoute("/(main-layout)/vegetables/tomatoe")({
  component: TomatoePage,
});

function TomatoePage() {
  return <Tomatoe />;
}
