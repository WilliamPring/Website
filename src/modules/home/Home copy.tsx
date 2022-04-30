import * as React from "react";
import styles from "./Home.module.css";
import file from "../../assets/file.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

import Image from "next/image";
export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <h1 className={styles.nameTitle}>William Pring</h1>
          <h1 style={{ margin: "15px" }}>Fake Software Engineer</h1>
        </div>
        <div>
          <div>
            <Image src={linkedin} width={50} height={50} />
            <span>/william-pring</span>
          </div>
          <div>
            <Image src={github} width={50} height={50} />
            <span>/williampring</span>
          </div>
          <div>
            <Image src={file} width={50} height={50} />
            <span>/Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
};
