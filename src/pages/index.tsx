import type { NextPage } from "next";
import Example from "components/example";

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
    </>
  );
};

export default Home;
