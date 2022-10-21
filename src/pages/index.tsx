import type { NextPage } from "next"
import Example from "components/example"
import Header from "components/header"

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <Header title={<span>{"首頁"}</span>} />
    </>
  )
}

export default Home
