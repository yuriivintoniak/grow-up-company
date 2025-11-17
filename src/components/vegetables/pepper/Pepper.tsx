import { useState } from "react";
import styles from "./Pepper.module.css";
import { pepperImages } from "./data.pepper";

export default function Pepper() {
  const [selectedImage, setSelectedImage] = useState<1 | 2 | 3 | 4>(1);

  const handleImageClick = (imageId: 1 | 2 | 3 | 4) => {
    setSelectedImage(imageId);
  };

  const smallImages = ([1, 2, 3, 4] as const).filter(id => id !== selectedImage);

  return (
    <section className={styles.pepperSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Pepper
        </h2>
        <h3 className={styles.subtitle}>
          Product Information:
        </h3>
        <div className={styles.productInformation}>
          <p>Product: pepper</p>
          <p>Variety: california red, california yellow, kapia <br /> chili red, chili green</p>
          <p>Size: 70-120 mm (length)</p>
          <p>Season: November - June</p>
          <p>Origin: Turkey</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={pepperImages.large[selectedImage]} 
          className={styles.largeImage} 
          alt="Pepper" 
        />
        <div className={styles.smallImages}>
          {smallImages.map((imageId) => {
            const imageSrc = pepperImages.small[imageId as 2 | 3 | 4] 
              || pepperImages.large[imageId];
            const isLargeImageAsSmall = !pepperImages.small[imageId as 2 | 3 | 4];

            return (
              <img 
                key={imageId}
                src={imageSrc} 
                alt="Pepper" 
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
