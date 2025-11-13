import styles from "./Home.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ValuesSection from "@/components/values-section/ValuesSection";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <div className={styles.heroSection}>
        <Header />
        <h1 className={styles.heroTitle}>
          The freshest from{"\n"}nature perfectly{"\n"}prepared and delivered{"\n"}to you
        </h1>
        <button className={styles.heroButton}>
          About us
        </button>
      </div>
      <FeaturedProducts />
      <div className={styles.sectionFooterWrapper}>
        <ValuesSection />
        <Footer />
      </div>
    </div>
  );
}
