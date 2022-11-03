import Header from "components/header"
import HeaderLeftButton from "components/header/HeaderLeftButton"
import { useRef, useEffect } from "react"
import classes from "./style.module.scss"

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
    </dialog>
  )
}

export default Modal
