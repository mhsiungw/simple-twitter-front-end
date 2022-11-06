import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import ReplyingTweets from "./replyingTweets"
import { useState, useRef, useEffect, FormEvent } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import fakePhoto from "src/assets/img/fake-photo.png"

export type currentUser = {
  avatar: string
}

export type tweetsData = {
  tweetsContent: string
  tweetsOwner: {
    name: string
    account: string
    avatar: string
  }
  tweetsCreatedAt: number
}

export function useOpenModal(): [boolean, () => void, () => void] {
  const [isOpened, setModalOpened] = useState(false)
  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)
  return [isOpened, openModal, closeModal]
}

export function Modal({
  isOpened,
  onClose,
  currentUser,
  tweetsData = null
}: {
  isOpened: boolean
  onClose: () => void
  currentUser: currentUser
  tweetsData?: tweetsData | null
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const textarea = textareaRef.current
  const dialog = dialogRef.current

  useEffect(() => {
    if (isOpened && dialog) {
      dialog.showModal()
    } else {
      dialog?.close()
    }
    return () => {
      if (textarea) textarea.value = ""
    }
  }, [isOpened, dialog, textarea])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (textarea) {
      console.log(textarea.value)
      // TODO post new tweet or reply
      textarea.value = ""
    }
  }
  return (
    <dialog className={classes.modal} ref={dialogRef} onClose={onClose}>
      <Header
        headerLeftButton={
          <HeaderLeftButton currentUtility="modal" onClick={onClose} />
        }
      />
      {tweetsData && <ReplyingTweets tweetsData={tweetsData} />}
      <aside
        className={`${classes.modal__reply} ${
          tweetsData ? "" : classes.modal_border
        }`}>
        <div className={classes.modal__avatar}>
          <a href="#">
            <Image
              src={currentUser.avatar || fakePhoto}
              alt="current user's avatar"
            />
          </a>
        </div>
        <form
          method="dialog"
          onSubmit={handleSubmit}
          className={classes.modal__form}>
          <textarea
            ref={textareaRef}
            placeholder={tweetsData ? "推你的回覆" : "有什麼新鮮事？"}
            className={classes.modal__textarea}></textarea>
          {/* 會用之後做好的button component */}
          <button className={classes.modal__btn}>
            {tweetsData ? "回覆" : "推文"}
          </button>
        </form>
      </aside>
    </dialog>
  )
}
