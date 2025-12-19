import styles from "./Home.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useNavigate } from "@tanstack/react-router";
import ValuesSection from "@/components/values-section/ValuesSection";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.heroSection}>
        <Header />
        <h1 className={styles.heroTitle}>
          {`The freshest from
          nature perfectly prepared
          and delivered to you`}
        </h1>
        <button 
          className={styles.heroButton}
          onClick={() => navigate({ to: "/about-us" })}
        >
          About us
        </button>
      </div>
      <FeaturedProducts />
      <div className={styles.footerLayout}>
        <ValuesSection />
        <Footer />
      </div>
    </div>
  );
}
