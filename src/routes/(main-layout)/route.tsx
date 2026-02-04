import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopBanner from "@/components/top-banner/TopBanner";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-layout)")({
  component: () => {
    return (
      <div className="min-h-screen flex flex-col relative">
        <div>
          <TopBanner />
          <Header />
        </div>
        <main className="px-36 py-28 max-[1441px]:p-20 max-[1024px]:px-16 max-[1024px]:py-8 max-[767px]:p-8.5">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  },
});
