import type { NextPage } from "next"
import Example from "components/example"
import Header from "components/header"

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      {/* <Header utility="with-arrow" title={["John Doe", 25]} /> */}
      <Header utility="normal" title="首頁" />
    </>
  )
}

export default Home
