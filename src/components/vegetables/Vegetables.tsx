import styles from "./Vegetables.module.css";
import { vegetablesImages } from "./data.vegetables";

export default function Vegetables() {
  return (
    <section className={styles.vegetablesSection}>
      <h2 className={styles.title}>
        Vegetables
      </h2>
      <div className={styles.images}>
        {vegetablesImages.map((veg) => (
          <img key={veg.id} src={veg.src} alt={veg.alt} />
        ))}
      </div>
    </section>
  );
}
