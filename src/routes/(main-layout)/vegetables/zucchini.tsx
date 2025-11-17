import { createFileRoute } from "@tanstack/react-router";
import Zucchini from "@/components/vegetables/zucchini/Zucchini";

export const Route = createFileRoute("/(main-layout)/vegetables/zucchini")({
  component: ZucchiniPage,
});

function ZucchiniPage() {
  return <Zucchini />;
}
