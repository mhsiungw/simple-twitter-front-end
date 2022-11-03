import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import { useRef, useEffect } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import fakePhoto from "src/assets/img/fake-photo.png"

function Modal({
  isOpened,
  onClose
}: {
  isOpened: boolean
  onClose: () => void
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
  return (
    <dialog className={classes.modal} ref={dialogRef} onClose={onClose}>
      <Header
        headerLeftButton={
          <HeaderLeftButton currentUtility="modal" onClick={onClose} />
        }
      />
      <aside>
        <div>
          <Image src={fakePhoto} alt="current user's avatar" />
        </div>
        <form method="dialog">
          <textarea placeholder="有什麼新鮮事？"></textarea>
          {/* 會用之後做好的button component */}
          <button>推文</button>
        </form>
      </aside>
    </dialog>
  )
}

export default Modal
