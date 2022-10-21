import type { NextPage } from "next"
import Example from "components/example"
import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <Header title={<span>{"首頁"}</span>} />
      <Header
        headerLeftButton={<HeaderLeftButton />}
        title={<span>{"推文"}</span>}
      />
      <Header
        headerLeftButton={<HeaderLeftButton />}
        title={
          <div>
            <p>{"John Doe"}</p>
            <p>{`25 推文`}</p>
          </div>
        }
      />
    </>
  )
}

export default Home
