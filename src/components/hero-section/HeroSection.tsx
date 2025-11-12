import styles from "./HeroSection.module.css";
import Header from "@/components/header/Header";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <Header />
    </div>
  );
}
