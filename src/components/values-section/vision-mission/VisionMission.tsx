import styles from "./VisionMission.module.css";
import visionMission from "@/assets/main-layout/values-pages/photo-vision.png";

export default function VisionMission() {
  return (
    <section className={styles.visionMissionSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Vision Mission
        </h2>
        <p className={styles.description}>
          Our mission is to grow a sustainable future through
          <br />
          responsible farming and strong partnerships.
          <br />
          We aim to be a trusted global supplier
          <br />
          known for quality, transparency, and respect
          <br />
          for both people and the planet.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={visionMission} alt="Vision Mission" />
      </div>
    </section>
  );
}
