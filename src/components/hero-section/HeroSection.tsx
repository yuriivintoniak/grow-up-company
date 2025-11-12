import styles from "./HeroSection.module.css";
import Header from "@/components/header/Header";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <Header />
      <h1 className={styles.heroTitle}>
        The freshest from{"\n"}nature perfectly{"\n"}prepared and delivered{"\n"}to you
      </h1>
      <button className={styles.heroButton}>
        About us
      </button>
    </div>
  );
}
