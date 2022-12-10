import Header from "components/header"
import ModalTemplate, { ModalProps } from "../modal-template"
import Image from "next/image"
import Link from "next/link"
import fakePhoto from "../../../assets/img/fake-photo.png"
import classes from "../style.module.scss"
import { useRef, useState } from "react"
import Button from "../../button"

interface ModalPostProps extends ModalProps {
  currentUser: {
    readonly avatar?: string
    readonly id: string | number
  }
}

const ModalPost = ({
  isVisible,
  onDialogClose,
  currentUser
}: ModalPostProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [shouldSubmit, setShouldSubmit] = useState(false)

  const handleDialogClose = () => {
    const textarea = textareaRef.current
    const textContent = textarea?.value
    onDialogClose()
    if (shouldSubmit && textContent) {
      // TODO post new tweet
      // ! need post API
      console.log(textarea.value)
    }
    setShouldSubmit(false)
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
          onSubmit={() => setShouldSubmit(true)}
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
