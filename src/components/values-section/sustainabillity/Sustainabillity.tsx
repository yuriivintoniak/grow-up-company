import styles from "./Sustainabillity.module.css";
import photoSus from "@/assets/main-layout/values-pages/photo-sus.png";

export default function Sustainabillity() {
  return (
    <section className={styles.sustainabillitySection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Sustainabillity
        </h2>
        <p className={styles.description}>
          We believe in harmony between business
          and nature. By using eco-friendly technologies
          reducing waste and supporting local
          communities we ensure our growth contributes
          to a greener and healthier tomorrow.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={photoSus} alt="Sustainability" />
      </div>
    </section>
  );
}
