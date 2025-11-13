import styles from "./FeaturedProducts.module.css";
import { featuredProducts } from "./data.featuredProducts";

export default function FeaturedProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
