import styles from "./AboutUs.module.css";
import aboutUs from "@/assets/main-layout/about-us.png";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.description}>
          At Pokrovske Tarim, we take pride in cultivating
          <br />
          the finest produce through dedication, innovation
          <br />
          and care for nature. Our team works
          <br />
          daily to bring healthy, fresh, and flavorful
          <br />
          fruits and vegetables straight from
          <br />
          the field to your table.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={aboutUs} alt="About us" />
      </div>
    </div>
  );
}
