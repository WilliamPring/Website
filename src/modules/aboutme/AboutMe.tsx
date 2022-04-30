import * as React from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";

export const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe" className={styles.aboutme}>
      <div
        className={styles.cycle}
        style={{ background: "#fff", color: "#292929" }}
      >
        <div className={styles.sun}></div>
      </div>
      <div
        style={{
          background: "#292929",
          color: "#fff",
        }}
        className={styles.cycle}
      >
        <p></p>
      </div>
    </section>
  );
};
