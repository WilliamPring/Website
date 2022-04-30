import file from "../../../assets/file-arrow-down.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import squareEnvelope from "../../../assets/square-envelope.svg";
import { SocialMediaProps } from "@site/types/social";

export const mediaLinks: Array<SocialMediaProps> = [
  {
    name: "linkedin",
    src: linkedin,
    height: "50px",
    width: "50px",
    url: "/william-pring",
    desc: "/william-pring",
  },
  {
    name: "github",
    src: github,
    height: "50px",
    width: "50px",
    url: "/WilliamPring",
    desc: "WilliamPring",
  },
  {
    name: "resume",
    src: file,
    height: "50px",
    width: "50px",
    url: "/william-pring",
    desc: "Resume",
  },
  {
    name: "email",
    src: squareEnvelope,
    height: "50px",
    width: "50px",
    url: "/william-pring",
    desc: "williampring@pm.me",
  },
];