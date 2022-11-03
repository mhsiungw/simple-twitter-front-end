import type { NextPage } from "next"
import Example from "components/example"
import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import HeaderTitle from "components/header/HeaderTitle"

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <Header headerTitle={<HeaderTitle title={"首頁"} />} />
      <Header
        headerLeftButton={<HeaderLeftButton />}
        headerTitle={<HeaderTitle title={"推文"} />}
      />
      <Header
        headerLeftButton={<HeaderLeftButton />}
        headerTitle={<HeaderTitle title={["John Doe", "25 推文"]} />}
      />
    </>
  )
}

export default Home
