import styles from "./Footer.module.css";
import { ChevronRight } from "lucide-react";
import logoFooter from "@/assets/Logo-footer.svg";
import { footerMenuItems } from "@/components/footer/data.footer";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoFooter}>
          <img src={logoFooter} alt="Grow Up Company Logo" />
        </div>
        {footerMenuItems.map((column) => (
          <div key={column.label} className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>
              <span>{column.label}</span>
            </h3>
            <ul className={styles.menuList}>
              {column.options?.map((option) => (
                <li key={option.label} className={styles.menuListItem}>
                  {column.label !== "Contacts" && (
                    <ChevronRight size={28} className={styles.menuListIcon} />
                  )}
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
