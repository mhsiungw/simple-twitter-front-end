import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import ReplyingTweets from "./replyingTweets"
import { useRef, useEffect } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import fakePhoto from "src/assets/img/fake-photo.png"

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
  tweetsData = null
}: {
  isOpened: boolean
  onClose: () => void
  currentUser: { avatar: string }
  tweetsData?: tweetsData | null
}): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpened && dialog) {
      dialog.showModal()
    } else {
      dialog?.close()
    }
  }, [isOpened])

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
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
            placeholder={tweetsData ? "推你的回覆" : "有什麼新鮮事？"}
            className={classes.modal__textarea}></textarea>
          {/* 會用之後做好的button component */}
          <button className={classes.modal__btn}>推文</button>
        </form>
      </aside>
    </dialog>
  )
}
