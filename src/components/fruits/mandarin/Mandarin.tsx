import { useState } from "react";
import styles from "./Mandarin.module.css";
import { mandarinImages } from "./data.mandarin";

export default function Mandarin() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.mandarinSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Mandarin
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: mandarin</p>
          <p>Variety: primasol</p>
          <p>Size: 54-78 mm</p>
          <p>Season: November - May</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={mandarinImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Mandarin" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = mandarinImages.small[imageId as 2 | 3 | 4] 
              || mandarinImages.large[imageId];
            const isLargeImageAsSmall = !mandarinImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Mandarin" 
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
