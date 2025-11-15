import styles from "./TopBanner.module.css";
import topBanner from "@/assets/main-layout/sub-header.png";

export default function TopBanner() {
  return (
    <div className={styles.topBannerContainer}>
      <img src={topBanner} alt="Top Banner" className={styles.topBanner} />
    </div>
  );
}
