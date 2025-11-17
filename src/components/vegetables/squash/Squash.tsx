import { useState } from "react";
import styles from "./Squash.module.css";
import { squashImages } from "./data.squash";

export default function Squash() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.squashSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Squash
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: squash</p>
          <p>Size: 150-250 mm (length)</p>
          <p>Season: all year</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={squashImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Squash" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = squashImages.small[imageId as 2 | 3 | 4] 
              || squashImages.large[imageId];
            const isLargeImageAsSmall = !squashImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Squash" 
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
