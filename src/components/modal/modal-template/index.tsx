import { useEffect, useRef } from "react"
import classes from "./style.module.scss"

interface ModalProps {
  children?: JSX.Element
  isVisible: boolean
  onDialogClose: () => void
}

const ModalTemplate = ({ isVisible, children, onDialogClose }: ModalProps) => {
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
    <dialog ref={dialogRef} className={classes.modal} onClose={onDialogClose}>
      {children}
    </dialog>
  )
}

export { ModalTemplate, type ModalProps }
