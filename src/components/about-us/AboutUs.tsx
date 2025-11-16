import styles from "./AboutUs.module.css";
import aboutUs from "@/assets/main-layout/about-us.png";

export default function AboutUs() {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          About us
        </h2>
        <p className={styles.description}>
          At Pokrovske Tarim, we take pride in cultivating
          the finest produce through dedication, innovation
          and care for nature. Our team works
          daily to bring healthy, fresh, and flavorful
          fruits and vegetables straight from
          the field to your table.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={aboutUs} alt="About us" />
      </div>
    </section>
  );
}
