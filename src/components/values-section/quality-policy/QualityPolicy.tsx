import styles from "./QualityPolicy.module.css";
import qualityPolicy from "@/assets/main-layout/values-pages/photo-quality.png";

export default function QualityPolicy() {
  return (
    <section className={styles.qualityPolicySection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Quality Policy
        </h2>
        <p className={styles.description}>
          Quality is the foundation of everything we do.
          <br />
          From careful selection of seeds to modern storage
          <br />
          and delivery.Every step is monitored
          <br />
          to guarantee freshness, safety, and premium taste
          <br />
          that meet international standards.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={qualityPolicy} alt="Quality Policy" />
      </div>
    </section>
  );
}
