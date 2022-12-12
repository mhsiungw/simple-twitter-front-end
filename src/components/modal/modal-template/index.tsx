import React, { useEffect, useRef, ReactNode, useState } from "react";
import classes from "../style.module.scss";

interface ModalProps {
  children?: ReactNode,
  isVisible: boolean,
  onDialogClose: () => void,
}

const useModal: () => [boolean, () => void, () => void] = () => {
	const [isVisible, setIsVisible] = useState(false);
	const closeModal: () => void = () => setIsVisible(false);
	const openModal: () => void = () => setIsVisible(true);
	return [isVisible, openModal, closeModal];
};

const ModalTemplate = ({ isVisible, children, onDialogClose }: ModalProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		const dialog = dialogRef.current;
		if (isVisible && dialog) {
			dialog.showModal();
		}
		if (!isVisible && dialog) {
			dialog.close();
		}
	}, [isVisible]);
	return (
		<dialog ref={dialogRef} className={classes.modal} onClose={onDialogClose}>
			{children}
		</dialog>
	);
};

export { type ModalProps, useModal };
export default ModalTemplate;
