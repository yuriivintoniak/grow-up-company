import { createFileRoute } from "@tanstack/react-router";
import QualityPolicy from "@/components/values-section/quality-policy/QualityPolicy";

export const Route = createFileRoute("/(main-layout)/(values)/quality-policy")({
  component: QualityPolicyPage,
});

function QualityPolicyPage() {
  return <QualityPolicy />;
}
