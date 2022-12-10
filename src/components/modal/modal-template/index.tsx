import { useEffect, useRef, ReactNode } from "react"
import classes from "../style.module.scss"

interface ModalProps {
  children?: ReactNode
  isVisible: boolean
  onDialogClose: () => void
}

const ModalTemplate = ({ isVisible, children, onDialogClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (isVisible && dialog) {
      dialog.showModal()
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

export { type ModalProps }
export default ModalTemplate
