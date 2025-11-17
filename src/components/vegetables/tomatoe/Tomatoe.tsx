import { useState } from "react";
import styles from "./Tomatoe.module.css";
import { tomatoeImages } from "./data.tomatoe";

export default function Tomatoe() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.tomatoeSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Tomatoe
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: tomatoe</p>
          <p>Variety: pink, vine</p>
          <p>Size: 50 mm+</p>
          <p>Season: all year</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={tomatoeImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Tomatoe" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = tomatoeImages.small[imageId as 2 | 3 | 4] 
              || tomatoeImages.large[imageId];
            const isLargeImageAsSmall = !tomatoeImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Tomatoe" 
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
