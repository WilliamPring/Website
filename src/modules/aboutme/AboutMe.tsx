import * as React from "react";
import styles from "./AboutMe.module.css";

export const AboutMe: React.FC = () => {
  return (
    <section
      id="AboutMe"
      className={styles.aboutme}
      style={{ background: "white" }}
    >
      <div
        className={styles.cycle}
        style={{
          margin: "auto",
        }}
      >
        <h1 className={styles.title}>About Me</h1>
        <div style={{ margin: "auto" }}>
          My name is{" "}
          <strong>
            <span className={styles.half_background}>
              <b>William Pring</b>
            </span>
          </strong>
          . I'm a{" "}
          <strong>
            <span className={styles.half_background}>
              <b>Software Engineer</b>
            </span>
          </strong>{" "}
          with over{" "}
          <strong>
            <span className={styles.half_background}>
              <b>5 years plus experience</b>
            </span>
          </strong>{" "}
          in the software industry. I have have work for a variety of company
          ranging from small startup to large canadian company. I have
          experience in working in different industry such as{" "}
          <strong>
            <span className={styles.half_background}>
              <b>Insurance, the education and telecommunication industry.</b>
            </span>
          </strong>{" "}
          Currently, I am working for{" "}
          <strong>
            <span className={styles.half_background}>
              <b>Telus</b>
            </span>
          </strong>{" "}
          as a{" "}
          <strong>
            <span className={styles.half_background}>
              <b>Senior Software Developer</b>
            </span>
          </strong>{" "}
          working on{" "}
          <strong>
            <span className={styles.half_background}>
              <b>MyTelus Mobile</b>
            </span>
          </strong>{" "}
          Product Focusing on the{" "}
          <span className={styles.half_background}>
            <b>backend portion.</b>{" "}
          </span>
          Together with my team we are implementing{" "}
          <span className={styles.half_background}>
            <b>new feature</b>{" "}
          </span>
          for our mobile apps, working on{" "}
          <span className={styles.half_background}>
            <b> moderenizating,</b>{" "}
          </span>
          <span className={styles.half_background}>
            <b>maintain and upgrading </b>{" "}
          </span>
          our backend apis and systems.
        </div>
      </div>
    </section>
  );
};
