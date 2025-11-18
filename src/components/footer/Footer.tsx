import styles from "./Footer.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
          <div
            key={column.label}
            className={`${styles.menuColumn} ${
              column.label === "Corporate"
                ? styles.corporateColumn
                : column.label === "Contacts"
                  ? styles.contactsColumn
                  : ""
            }`}
          >
            <h3 className={styles.columnTitle}>
              {column.label === "Contacts" ? (
                <a href={column.href}>
                  <span>{column.label}</span>
                </a>
              ) : (
                <Link to={column.href}>
                  <span>{column.label}</span>
                </Link>
              )}
            </h3>
            <ul className={styles.menuList}>
              {column.options?.map((option) => (
                <li key={option.label} className={styles.menuListItem}>
                  {column.label !== "Contacts" ? (
                    <Link to={option.href} className={styles.menuLink}>
                      <ChevronRight size={28} className={styles.menuListIcon} />
                      <span>{option.label}</span>
                    </Link>
                  ) : (
                    <a href={option.href} className={styles.menuLink}>
                      <span>{option.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
