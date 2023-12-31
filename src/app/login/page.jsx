"use client"

import styles from "./loginPage.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Loginpage = () => {
  const {data: session} = useSession()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton} onClick={() => signIn()}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
        </>
      </div>
    </div>
  );
};

export default Loginpage;