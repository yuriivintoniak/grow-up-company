import { useState } from "react";
import styles from "./Lemon.module.css";
import { lemonImages } from "./data.lemon";

export default function Lemon() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.lemonSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Lemon
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: lemon</p>
          <p>Variety: meyer, enter</p>
          <p>Size: 54-78 mm</p>
          <p>Season: August - April</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={lemonImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Lemon" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = lemonImages.small[imageId as 2 | 3 | 4] 
              || lemonImages.large[imageId];
            const isLargeImageAsSmall = !lemonImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Lemon" 
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
