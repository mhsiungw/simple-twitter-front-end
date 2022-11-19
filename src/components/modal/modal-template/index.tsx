import { useEffect, useRef } from "react"
import classes from "./style.module.scss"

type props = {
  children: JSX.Element
  isVisible: boolean
  onDialogClose: () => void
  onDialogSubmit?: () => {}
}

const ModalTemplate = ({
  isVisible,
  children,
  onDialogSubmit,
  onDialogClose
}: props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (isVisible) {
      dialog?.showModal()
    } else {
      dialog?.close()
    }
  }, [isVisible])
  return (
    <dialog
      ref={dialogRef}
      className={classes.modal}
      onSubmit={onDialogSubmit}
      onClose={onDialogClose}>
      {children}
    </dialog>
  )
}

export default ModalTemplate
