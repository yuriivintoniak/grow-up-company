import Footer from "@/components/footer/Footer";
import SubHeader from "@/components/sub-header/SubHeader";
import TopBanner from "@/components/top-banner/TopBanner";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-layout)")({
  component: () => {
    return (
      <div className="min-h-screen flex flex-col relative">
        <TopBanner />
        <SubHeader />
        <main className="px-36 py-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});
