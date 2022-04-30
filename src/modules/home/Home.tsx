import * as React from "react";
import styles from "./Home.module.css";
import { SocialMedia } from "@components/SocialMedia";
import arrowRight from "../../assets/arrow-right.svg";
import Image from "next/image";
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
            <h1 style={{ margin: "5px" }}>Software Engineer</h1>
          </div>
          <div>
            {mediaLinks &&
              mediaLinks.map((media) => <SocialMedia {...media} />)}
          </div>
        </div>
      </div>
      <div className={styles.centerT}>
        <div className={styles.centerT} style={{ marginTop: -100 }}>
          <p
            style={{
              transform: "rotate(90deg)",
              fontWeight: "bold",
            }}
          >
            About Me
          </p>
          <Link href="#AboutMe">
            <Image
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
