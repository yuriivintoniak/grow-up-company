import { ChevronRight } from "lucide-react";
import styles from "./FeaturedProducts.module.css";
import { featuredProducts } from "./data.featuredProducts";

export default function FeaturedProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.product}>
            <button type="button" className={styles.productButton} aria-label={`View ${product.name}`}>
              <ChevronRight size={36} className={styles.productButtonIcon} />
            </button>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
