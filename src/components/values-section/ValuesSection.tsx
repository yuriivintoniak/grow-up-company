import { valuesData } from "./data.values";
import { Link } from "@tanstack/react-router";
import styles from "./ValuesSection.module.css";

export default function ValuesSection() {
  return (
    <div className={styles.valuesSection}>
      <div className={styles.values}>
        {valuesData.map((value) => (
          <Link
            key={value.title}
            to={value.href}
            className={styles.valueItem}
          >
            <img src={value.image} alt={value.title} />
            <h3 className={styles.valueTitle}>
              {value.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
