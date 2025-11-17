import { useState } from "react";
import styles from "./Cucumber.module.css";
import { cucumberImages } from "./data.cucumber";

export default function Cucumber() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

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
        <img 
          src={cucumberImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Cucumber" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = cucumberImages.small[imageId as 2 | 3 | 4] 
              || cucumberImages.large[imageId];
            const isLargeImageAsSmall = !cucumberImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Cucumber" 
                className={isLargeImageAsSmall ? styles.smallImageFromLarge : undefined}
                onClick={() => handleImageClick(imageId)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
