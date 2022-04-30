import type { NextPage } from "next";
import { Home } from "@modules/home";
import { AboutMe } from "@modules/aboutme";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Home />
      <AboutMe />
    </div>
  );
};

export default IndexPage;
