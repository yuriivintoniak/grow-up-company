import { createFileRoute } from "@tanstack/react-router";
import Pepper from "@/components/vegetables/pepper/Pepper";

export const Route = createFileRoute("/(main-layout)/vegetables/pepper")({
  component: PepperPage,
});

function PepperPage() {
  return <Pepper />;
}
