import styles from "./HeroSection.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ValuesSection from "@/components/values-section/ValuesSection";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";

export default function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
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
    </>
  );
}
