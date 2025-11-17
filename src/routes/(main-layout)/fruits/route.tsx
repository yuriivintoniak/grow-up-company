import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-layout)/fruits")({
  component: () => <Outlet />,
});
