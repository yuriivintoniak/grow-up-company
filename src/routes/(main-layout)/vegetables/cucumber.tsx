import { createFileRoute } from "@tanstack/react-router";
import Cucumber from "@/components/vegetables/cucumber/Cucumber";

export const Route = createFileRoute("/(main-layout)/vegetables/cucumber")({
  component: CucumberPage,
});

function CucumberPage() {
  return <Cucumber />;
}
