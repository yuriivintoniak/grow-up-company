import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/footer/Footer";

export const Route = createFileRoute("/(main-layout)")({
  component: () => {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="w-full bg-green-500 h-[200px]">
          Header component
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});
