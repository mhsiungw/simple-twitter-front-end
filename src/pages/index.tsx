import type { NextPage } from "next";
import Example from "components/example";
import Popular from "components/popular";
import SideBar from "components/sideBar";

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <Popular />
      <SideBar />
    </>
  );
};

export default Home;
