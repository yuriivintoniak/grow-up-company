import { createFileRoute } from "@tanstack/react-router";
import Mandarin from "@/components/fruits/mandarin/Mandarin";

export const Route = createFileRoute("/(main-layout)/fruits/mandarin")({
  component: MandarinPage,
});

function MandarinPage() {
  return <Mandarin />;
}
