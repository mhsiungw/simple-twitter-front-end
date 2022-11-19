import type { NextPage } from "next"
import Example from "components/example"
import { useEffect, useState } from "react"
import ModalTemplate from "components/modal/modal-template"
import Header from "components/header"
import HeaderLeftButton from "components/header/header-left-button"
import ReplyingTweets from "components/modal/replying-tweets"

const Home: NextPage = () => {
  const [isVisible, setModalVisible] = useState(false)
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)
  useEffect(() => {
    console.log(isVisible)
  }, [isVisible])
  return (
    <>
      <div>Home</div>
      <Example message="example string" />
      <button onClick={openModal}>{isVisible ? "Close" : "Open"} Modal</button>
      <ModalTemplate isVisible={isVisible} onDialogClose={closeModal}>
        <Header
          headerLeftButton={
            <HeaderLeftButton currentUtility="modal" handleClick={closeModal} />
          }
        />
      </ModalTemplate>
    </>
  )
}

export default Home
