import * as React from "react";
import styles from "./Home.module.css";
import { SocialMedia } from "@components/SocialMedia";
import arrowRight from "../../icons/arrow-right.svg";
import Link from "next/link";
import { mediaLinks } from "@site/data/MediaLink";

export const Home: React.FC = () => {
  return (
    <>
      <div className={styles.home}>
        <div
          className={styles.center}
          style={{
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <h1 className={styles.nameTitle}>William Pring</h1>
            <h1 style={{ margin: "5px" }}>Fake Software Engineer</h1>
          </div>
          <div>
            {mediaLinks &&
              mediaLinks.map((media) => <SocialMedia {...media} />)}
          </div>
        </div>
      </div>
      <div className={styles.centerT}>
        <div className={styles.centerT} style={{ marginTop: -100 }}>
          <span
            style={{
              transform: "rotate(90deg)",
              fontWeight: "bold",
              width: 90,
            }}
          >
            About Me
          </span>
          <Link href="#AboutMe">
            <img
              src={arrowRight}
              width={50}
              height={50}
              style={{ transform: "rotate(90deg)" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
