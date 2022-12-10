import Header from "components/header"
import ModalTemplate, { ModalProps } from "../modal-template"
import Image from "next/image"
import Link from "next/link"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "../style.module.scss"
import { useRef } from "react"
import Button from "../../button"

interface ModalPostProps extends ModalProps {
  postApi: () => void
  currentUser: {
    readonly avatar?: string
    readonly id: string | number
  }
}

const ModalPost = ({
  // ! isVisible 應該可以改成由外層傳入ref去變動
  // ! 所以由外層元件決定就好，根本不需要傳入
  isVisible,
  onDialogClose,
  currentUser,
  postApi
}: ModalPostProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleFormSubmit = () => {
    const textarea = textareaRef.current
    const textContent = textarea?.value
    if (!textContent) return
    // TODO 傳送新的推文
    console.log(textarea.value)
    postApi()
    textarea.value = ""
  }
  const handleDialogClose = () => {
    const textarea = textareaRef.current
    const textContent = textarea?.value
    if (!textContent) return
    textarea.value = ""
  }
  return (
    <ModalTemplate isVisible={isVisible} onDialogClose={handleDialogClose}>
      <Header handleLeftClick={onDialogClose} utility="modal" />
      <aside className={classes.modal__post}>
        <div className={classes.avatar}>
          <Link href={`/${currentUser.id}`}>
            <>
              <Image
                src={currentUser.avatar || fakePhoto}
                alt="current user's avatar"
              />
            </>
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
            <span>推文</span>
          </Button>
        </form>
      </aside>
    </ModalTemplate>
  )
}

export { type ModalPostProps }
export default ModalPost
