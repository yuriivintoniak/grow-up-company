import { valuesData } from "./data.values";
import styles from "./ValuesSection.module.css";

export default function ValuesSection() {
  return (
    <div className={styles.valuesSection}>
      <div className={styles.values}>
        {valuesData.map((value) => (
          <div key={value.id} className={styles.valueItem}>
            <img src={value.image} alt={value.title} />
            <h3 className={styles.valueTitle}>
              {value.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
