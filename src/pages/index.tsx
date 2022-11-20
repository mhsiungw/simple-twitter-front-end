import type { NextPage } from "next"
import Example from "components/example"
import { useEffect, useState, useRef } from "react"
import PostTweetModal from "components/modal/post-tweet-modal"

const Home: NextPage = () => {
  const [isVisible, setModalVisible] = useState(false)
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <PostTweetModal
        isVisible={isVisible}
        onDialogClose={() => setModalVisible(false)}
        currentUser={{ id: "123" }}
      />
    </>
  )
}

export default Home
