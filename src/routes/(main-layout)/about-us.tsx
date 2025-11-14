import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-layout)/about-us")({
  component: AboutUs,
});

function AboutUs() {
  return <div>About Us</div>;
}
