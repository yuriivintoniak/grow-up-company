import { useState } from "react";
import styles from "./Zucchini.module.css";
import { zucchiniImages } from "./data.zucchini";

export default function Zucchini() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.zucchiniSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Zucchini
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: zucchini</p>
          <p>Size: 150-250 mm (length)</p>
          <p>Season: all year</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={zucchiniImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Zucchini" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = zucchiniImages.small[imageId as 2 | 3 | 4] 
              || zucchiniImages.large[imageId];
            const isLargeImageAsSmall = !zucchiniImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Zucchini" 
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
