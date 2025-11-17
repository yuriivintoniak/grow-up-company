import styles from "./Cucumber.module.css";
import cucumberLarge1 from "@/assets/main-layout/vegetables/cucumber/large/1-cucumber-large.png";
import cucumberSmall2 from "@/assets/main-layout/vegetables/cucumber/small/2-cucumber-small.png";
import cucumberSmall3 from "@/assets/main-layout/vegetables/cucumber/small/3-cucumber-small.png";
import cucumberSmall4 from "@/assets/main-layout/vegetables/cucumber/small/4-cucumber-small.png";

export default function Cucumber() {
  return (
    <section className={styles.cucumberSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Cucumber
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: cucumber</p>
          <p>Variety: smooth, spiny</p>
          <p>Size: 8-16 cm</p>
          <p>Season: all year</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={cucumberLarge1} className={styles.largeImage} alt="Cucumber" />
        <div className={styles.smallImages}>
          <img src={cucumberSmall2} alt="Cucumber" />
          <img src={cucumberSmall3} alt="Cucumber" />
          <img src={cucumberSmall4} alt="Cucumber" />
        </div>
      </div>
    </section>
  );
}
