import Footer from "@/components/footer/Footer";
import SubHeader from "@/components/sub-header/SubHeader";
import TopBanner from "@/components/top-banner/TopBanner";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-layout)")({
  component: () => {
    return (
      <div className="min-h-screen flex flex-col relative">
        <div>
          <TopBanner />
          <SubHeader />
        </div>
        <main className="px-36 py-28 max-[1024px]:px-16 max-[1024px]:py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});
