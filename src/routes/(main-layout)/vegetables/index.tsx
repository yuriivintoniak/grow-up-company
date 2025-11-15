import { createFileRoute } from "@tanstack/react-router";
import Vegetables from "@/components/vegetables/Vegetables";

export const Route = createFileRoute("/(main-layout)/vegetables/")({
  component: VegetablesPage,
});

function VegetablesPage() {
  return <Vegetables />;
}
