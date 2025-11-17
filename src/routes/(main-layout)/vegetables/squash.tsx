import { createFileRoute } from "@tanstack/react-router";
import Squash from "@/components/vegetables/squash/Squash";

export const Route = createFileRoute("/(main-layout)/vegetables/squash")({
  component: SquashPage,
});

function SquashPage() {
  return <Squash />;
}
