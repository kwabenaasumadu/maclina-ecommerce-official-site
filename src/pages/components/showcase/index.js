import React, { useState } from "react";
import styles from "../../../styles/showcase.module.css";
import Image from "next/image";


function Index() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.descriptions}>
            <div className={styles.first_des}>
              <p>Welcome</p>
            </div>

            <div className={styles.second_des}>
              <h1> Let&apos;s Love Fashion Slick. Modern. Awesome</h1>
            </div>

            <div className={styles.ctaBtn}>
              <button>Shop Collection</button>
            </div>
          </div>

          <div className={styles.containerImage}>
            <Image
              src="/showcase.png"
              width={500}
              height={600}
              alt="showcase_image"
              className={styles.image}
            />
          </div>

       
        </div>
      </div>
    </>
  );
}

export default Index;
