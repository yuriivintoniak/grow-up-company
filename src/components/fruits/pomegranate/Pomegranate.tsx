import { useState } from "react";
import styles from "./Pomegranate.module.css";
import { pomegranateImages } from "./data.pomegranate";

export default function Pomegranate() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.pomegranateSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Pomegranate
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: pomegranate</p>
          <p>Variety: caliber&nbsp;7, caliber&nbsp;9, caliber&nbsp;12, caliber&nbsp;14</p>
          <p>Season: September - February</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={pomegranateImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Pomegranate" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = pomegranateImages.small[imageId as 2 | 3 | 4] 
              || pomegranateImages.large[imageId];
            const isLargeImageAsSmall = !pomegranateImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Pomegranate" 
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
