import type { NextPage } from "next"
import Example from "components/example"
import Header from "components/header"
import HeaderLeftButton from "components/header/header-left-button"
import HeaderTitle from "components/header/header-title"

const Home: NextPage = () => {
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <Header
        headerLeftButton={<HeaderLeftButton currentUtility="main" />}
        headerTitle={<HeaderTitle title={["John Doe", 100]} />}
      />
    </>
  )
}

export default Home
