import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "@/components/about-us/AboutUs";

export const Route = createFileRoute("/(main-layout)/about-us")({
  component: AboutUsPage,
});

function AboutUsPage() {
  return <AboutUs />;
}
