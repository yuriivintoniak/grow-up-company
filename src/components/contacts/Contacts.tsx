import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.contactsPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact information</h1>
        <div className={styles.phonesContainer}>
          <span className={styles.phone}>+90 534 29 29 764</span>
          <span className={styles.phone}>+90 545 78 59 035</span>
        </div>
        <p className={styles.email}>freshveggies.info@gmail.com</p>
        <p className={styles.address}>
          Elmalı Mah. 21 Sk. Şerbetçi Apt. No:1, İç Kapı No:12 Muratpaşa
        </p>
      </div>
    </div>
  );
}
