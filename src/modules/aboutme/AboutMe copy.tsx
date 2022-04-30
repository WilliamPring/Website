import * as React from "react";
import styles from "./AboutMe.module.css";

export const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe" className={styles.aboutme}>
      <div
        className={styles.cycle}
        style={{ background: "#fff", color: "#292929" }}
      >
        <h1 className={styles.title}>By Morning</h1>
        <div>
          <span className={styles.nameTitleBlack}>Software Engineer</span>
        </div>
        <div>
          <span className={styles.nameTitleBlack}>Problem Solving</span>
        </div>
        <div>
          <span className={styles.nameTitleBlack}>System Design</span>
        </div>
        <div>
          <span className={styles.nameTitleBlack}>System Design</span>
        </div>
        <div>
          <span className={styles.nameTitleBlack}>Teaching/Mentoring</span>
        </div>
        <div>
          <span className={styles.nameTitleBlack}>Tea Drinker</span>
        </div>
      </div>
      <div
        style={{
          background: "#292929",
          color: "#fff",
        }}
        className={styles.cycle}
      >
        <h1 className={styles.title}>By Night</h1>
        <div>
          <span className={styles.nameTitleWhite}>Learning new Tech</span>
        </div>
        <div>
          <span className={styles.nameTitleWhite}>
            Working on Personal Project
          </span>
        </div>
        <div>
          <span className={styles.nameTitleWhite}>Video Games</span>
        </div>
        <div>
          <span className={styles.nameTitleWhite}>System Design</span>
        </div>
        <div>
          <span className={styles.nameTitleWhite}>Watching TV/Movies</span>
        </div>
        <div>
          <span className={styles.nameTitleWhite}>Custom Keyboard</span>
        </div>
      </div>
    </section>
  );
};
