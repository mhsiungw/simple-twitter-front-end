import Header from "components/header"
import HeaderLeftButton from "components/header/header-left-button"
import { ModalTemplate, ModalProps } from "../modal-template"
import Image from "next/image"
import Link from "next/link"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "./style.module.scss"
import { useRef } from "react"
import Button from "../../button"

interface PostTweetModalProps extends ModalProps {
  currentUser: {
    readonly avatar?: string
    readonly id: string
  }
}

const PostTweetModal = ({
  isVisible,
  onDialogClose,
  currentUser
}: PostTweetModalProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleFormSubmit = () => {
    const textarea = textareaRef.current
    // TODO 傳送新的推文
    if (textarea !== null && textarea.value !== "") {
      console.log(textarea.value)
      textarea.value = ""
    }
  }
  const handleDialogClose = () => {
    const textarea = textareaRef.current
    if (textarea !== null) {
      textarea.value = ""
      onDialogClose()
    }
  }
  return (
    <ModalTemplate isVisible={isVisible} onDialogClose={handleDialogClose}>
      <>
        <Header
          headerLeftButton={
            <HeaderLeftButton
              currentUtility="modal"
              handleClick={onDialogClose}
            />
          }
        />
        <aside className={classes["post-modal"]}>
          <div className={classes.avatar}>
            <Link href={`/${currentUser.id}`}>
              <Image
                src={currentUser.avatar || fakePhoto}
                alt="current user's avatar"
              />
            </Link>
          </div>
          <form
            method="dialog"
            onSubmit={handleFormSubmit}
            className={classes.form}>
            <textarea
              ref={textareaRef}
              placeholder="有什麼新鮮事？"
              className={classes.textarea}
            />
            <Button className={classes.form__btn}>推文</Button>
          </form>
        </aside>
      </>
    </ModalTemplate>
  )
}

export default PostTweetModal
