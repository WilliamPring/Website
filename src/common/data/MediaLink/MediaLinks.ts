import file from "../../../icons/file.svg";
import github from "../../../icons/github.svg";
import linkedin from "../../../icons/linkedin.svg";
import squareEnvelope from "../../../icons/square-envelope.svg";
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