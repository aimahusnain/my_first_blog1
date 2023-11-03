import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>Genius Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe.
          Tempora corrupti in eveniet delectus, deserunt fugit similique facere
          libero quis fuga pariatur assumenda adipisci odit saepe voluptate
          repudiandae aliquid!
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="facebook logo"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram logo"
            width={18}
            height={18}
          />
          <Image src="/tiktok.png" alt="tiktok logo" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube logo" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Style</Link>
          <Link href="/">Fasion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
