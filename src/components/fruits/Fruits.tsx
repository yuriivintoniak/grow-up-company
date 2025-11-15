import styles from "./Fruits.module.css";
import { fruitsImages } from "./data.fruits";

export default function Fruits() {
  return (
    <section className={styles.fruitsSection}>
      <h2 className={styles.title}>
        Fruits
      </h2>
      <div className={styles.images}>
        {fruitsImages.map((fruit) => (
          <img key={fruit.id} src={fruit.src} alt={fruit.alt} />
        ))}
      </div>
    </section>
  );
}
