import { createFileRoute } from "@tanstack/react-router";
import Lemon from "@/components/fruits/lemon/Lemon";

export const Route = createFileRoute("/(main-layout)/fruits/lemon")({
  component: LemonPage,
});

function LemonPage() {
  return <Lemon />;
}
