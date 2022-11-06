import type { NextPage } from "next"
import Example from "components/example"
import { useState } from "react"
import { Modal, tweetsData } from "components/modal"

const fakeCurrentUser = {
  avatar: ""
}

const fakeReplyingTweets: tweetsData = {
  tweetsContent:
    "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  tweetsOwner: {
    name: "Apple",
    account: "apple",
    avatar: ""
  },
  tweetsCreatedAt: 2000000000000
}

const Home: NextPage = () => {
  const [isOpened, setModalOpened] = useState(false)
  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)
  return (
    <>
      <div onClick={openModal}>Home</div>
      <Example message="example string" />
      <Modal
        isOpened={isOpened}
        onClose={closeModal}
        currentUser={fakeCurrentUser}
        tweetsData={fakeReplyingTweets}
      />
    </>
  )
}

export default Home
