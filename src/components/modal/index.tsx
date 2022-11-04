import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import { useRef, useEffect } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import fakePhoto from "src/assets/img/fake-photo.png"

type tweetsData = {
  tweetsContent: string
  tweetsOwner: {
    name: string
    account: string
    avatar: string
  }
  tweetsCreatedAt: string
}

function Modal({
  isOpened,
  onClose,
  currentUser,
  tweetsData = null
}: {
  isOpened: boolean
  onClose: () => void
  currentUser: { avatar?: string }
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

  function handleSubmit(event: SubmitEvent) {
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
      <aside className={classes.modal__reply}>
        <div>
          <Image
            src={currentUser.avatar || fakePhoto}
            alt="current user's avatar"
            // width={currentUser.avatar ? 50 : ""}
            // height={currentUser.avatar ? 50 : ""}
          />
        </div>
        <form method="dialog" onSubmit={handleSubmit} className={classes.modal__form}>
          <textarea placeholder="有什麼新鮮事？" className={classes.modal__textarea}></textarea>
          {/* 會用之後做好的button component */}
          <button className={classes.modal__btn}>推文</button>
        </form>
      </aside>
    </dialog>
  )
}

export default Modal
