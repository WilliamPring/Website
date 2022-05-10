import * as React from "react";
import styles from "./Project.module.css";
import github from "../../icons/github.svg";

export const Project: React.FC = () => {
  return (
    <section className={styles.project} id="#Project">
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>Projects</h1>
      <div className={styles.cardList}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2>Website</h2>
            <p>
              This current Website design, past interation and pervious version
            </p>
            <div className={styles.featureCardFooter}>
              <span style={{ padding: "1.4em" }}>Links: Learn More...</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2>Linux Machine</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <div className={styles.featureCardFooter}>
              <span style={{ padding: "1.4em" }}>
                <img src={github} width={30} height={30} />
                Learn More
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2>Keyboard</h2>
            <p>
              We need a paradigm shift get all your ducks in a row. I just
              wanted to give you a heads-up we need distributors to evangelize
              the new line to local markets when does this sunset? so waste of
              resources, yet fire up your browser, or touch base closing these
              latest prospects is like putting socks on an octopus.
            </p>
            <div className={styles.featureCardFooter}>
              <span style={{ padding: "1.4em" }}>
                <img src={github} width={30} height={30} />
                Learn More
              </span>{" "}
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2>Scoolu</h2>
            <p>
              We need a paradigm shift get all your ducks in a row. I just
              wanted to give you a heads-up we need distributors to evangelize
              the new line to local markets when does this sunset? so waste of
              resources, yet fire up your browser, or touch base closing these
              latest prospects is like putting socks on an octopus.
            </p>
            <div className={styles.featureCardFooter}>
              <span style={{ padding: "1.4em" }}>
                <img src={github} width={30} height={30} />
                Learn More
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
