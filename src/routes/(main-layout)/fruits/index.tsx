import { createFileRoute } from "@tanstack/react-router";
import Fruits from "@/components/fruits/Fruits";

export const Route = createFileRoute("/(main-layout)/fruits/")({
  component: FruitsPage,
});

function FruitsPage() {
  return <Fruits />;
}
