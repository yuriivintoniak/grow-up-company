import { ChevronRight } from "lucide-react";
import styles from "./FeaturedProducts.module.css";
import { useNavigate } from "@tanstack/react-router";
import { featuredProducts } from "./data.featuredProducts";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {featuredProducts.map((product) => (
          <div key={product.name} className={styles.product}>
            <button 
              type="button" 
              className={styles.productButton} 
              aria-label={`View ${product.name}`}
              onClick={() => navigate({ to: product.path })}
            >
              <ChevronRight size={36} className={styles.productButtonIcon} />
            </button>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
