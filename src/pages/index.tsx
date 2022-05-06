import type { NextPage } from "next";
import { Home } from "@modules/home";
import { AboutMe } from "@modules/aboutme";
import { Project } from "@modules/project";
const IndexPage: NextPage = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Project />
    </div>
  );
};

export default IndexPage;
