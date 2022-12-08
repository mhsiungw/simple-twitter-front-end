import Header from "components/header"
import HeaderLeftButton from "components/header/header-left-button"
import { ModalTemplate, ModalProps } from "../modal-template"
import Image from "next/image"
import Link from "next/link"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "./style.module.scss"
import { useRef } from "react"
import Button from "../../button"
import modalClasses from "../style.module.scss"

interface PostTweetModalProps extends ModalProps {
  postApi: () => void
  currentUser: {
    readonly avatar?: string
    readonly id: string | number
  }
}

const PostTweetModal = ({
  // ! isVisible 應該可以改成由外層傳入ref去變動
  // ! 所以由外層元件決定就好，根本不需要傳入
  isVisible,
  onDialogClose,
  children,
  currentUser,
  postApi
}: PostTweetModalProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleFormSubmit = () => {
    const textarea = textareaRef.current
    // TODO 傳送新的推文
    if (textarea !== null && textarea.value !== "") {
      console.log(textarea.value)
      postApi()
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
        {children}
        <aside
          className={`${classes["post-modal"]} ${
            children ? "" : modalClasses.border_top
          }`}>
          <div className={modalClasses.avatar}>
            <Link href={`/${currentUser.id}`}>
              <a>
                <Image
                  src={currentUser.avatar || fakePhoto}
                  alt="current user's avatar"
                />
              </a>
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
            <Button className={classes.form__btn}>
              {children ? "回覆" : "推文"}
            </Button>
          </form>
        </aside>
      </>
    </ModalTemplate>
  )
}

export { type PostTweetModalProps }
export default PostTweetModal
