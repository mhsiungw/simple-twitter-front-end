import type { NextPage } from "next"
import Example from "components/example"
import { useState } from "react"
import Modal from "components/modal"

const Home: NextPage = () => {
  const [isOpened, setModalOpened] = useState(false)
  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)
  return (
    <>
      <div onClick={openModal}>Home</div>
      <Example message="example string" />
      <Modal isOpened={isOpened} onClose={closeModal} />
    </>
  )
}

export default Home
