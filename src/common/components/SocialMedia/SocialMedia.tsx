import * as React from "react";
import { SocialMediaProps } from "@site/types/social";
import Image from "next/image";
import styles from "./Social.module.css";

export const SocialMedia: React.FC<SocialMediaProps> = ({
  name,
  desc,
  ...rest
}) => {
  return (
    <div className={styles.iconRef} key={name}>
      <Image {...rest} />
      <span className="social">{desc}</span>
    </div>
  );
};
