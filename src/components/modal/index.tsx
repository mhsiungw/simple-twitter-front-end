import Header from "components/header"
import HeaderLeftButton from "components/header/header-left-button"
import ReplyingTweets from "./replying-tweets"
import { useState, useRef, useEffect } from "react"
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

export function Modal({
  isOpened,
  onClose,
  currentUser,
  tweetsData = null,
  onClick
}: {
  isOpened: boolean
  onClose: () => void
  currentUser: currentUser
  tweetsData?: tweetsData | null
  onClick?: null
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const textarea = textareaRef.current
  const dialog = dialogRef.current

  useEffect(() => {
    // TODO: 可以用isVisible來做替代，modal要能夠做的只有打開、關閉的功能，以便其他人可以在其他component中應用！
    // * 可參考ant design, mui等的設計方式
    if (isOpened && dialog) {
      dialog.showModal()
    } else {
      dialog?.close()
    }
    return () => {
      if (textarea) textarea.value = ""
    }
  }, [isOpened, dialog, textarea])

  function handleSubmit() {
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
          <HeaderLeftButton currentUtility="modal" handleClick={onClose} />
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
