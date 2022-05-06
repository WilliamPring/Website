import * as React from "react";
import styles from "./Project.module.css";

export const Project: React.FC = () => {
  return (
    <section className={styles.project}>
      <h1>Projects</h1>
      <div className={styles.cardList}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2>Website</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};
