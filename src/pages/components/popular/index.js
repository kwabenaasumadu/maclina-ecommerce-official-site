import React from "react";
import styles from "../../../styles/popular.module.css";
import Image from "next/image";
import Star from "@mui/icons-material/Star";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <div className={styles.firstHeader}>
            <p>summer Collection</p>
          </div>

          <div className={styles.secondHeader}>
            <h1>Popular T-Shirts</h1>
          </div>
        </div>

        <div className={styles.containerItems}>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <Image
                src="/showcase.png"
                width={300}
                height={300}
                alt="ks"
                className={styles.image}
              />

              <div className={styles.description}>
                <p>Women-shirt</p>
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/showcase.png"
                width={300}
                height={300}
                alt="ks"
                className={styles.image}
              />

              <div className={styles.description}>
                <p> An Women-shirt</p>
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/showcase.png"
                width={300}
                height={300}
                alt="ks"
                className={styles.image}
              />

              <div className={styles.description}>
                <p>Another Women-shirt</p>
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
