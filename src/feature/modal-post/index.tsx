import React, { useRef, useState } from "react";
import Header from "components/header";
import Modal, { ModalProps } from "components/modal";
import Image from "next/image";
import Link from "next/link";
import fakePhoto from "../../assets/img/fake-photo.png";
import classes from "./style.module.scss";
import Button from "components/button";

interface ModalPostProps extends ModalProps {
  currentUser: {
    readonly avatarImg?: string,
    readonly id: string,
  },
}

const ModalPost = ({
	isVisible,
	onDialogClose,
	currentUser
}: ModalPostProps) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [shouldSubmit, setShouldSubmit] = useState(false);
	const { id, avatarImg } = currentUser;

	const handleDialogClose = () => {
		const textarea = textareaRef.current;
		const textContent = textarea?.value;
		onDialogClose();
		if (shouldSubmit && textContent) {
			// TODO post new tweet
			// ! need post API
			console.log(textarea.value);
		}
		setShouldSubmit(false);
		if (!textContent) return;
		textarea.value = "";
	};

	return (
		<Modal isVisible={isVisible} onDialogClose={handleDialogClose}>
			<Header handleLeftClick={onDialogClose} utility="modal" />
			<aside className={classes.modal}>
				<div className={classes.avatar}>
					<Link href={`/${id}`}>
						<a>
							<Image width={50} height={50} src={avatarImg || fakePhoto} alt="current user's avatar" />
						</a>
					</Link>
				</div>
				<form
					method="dialog"
					onSubmit={() => setShouldSubmit(true)}
					className={classes.form}>
					<textarea
						ref={textareaRef}
						placeholder="有什麼新鮮事？"
						className={classes.textarea}
					/>
					<Button className={classes.form__btn}>
						<span>推文</span>
					</Button>
				</form>
			</aside>
		</Modal>
	);
};

export { type ModalPostProps };
export default ModalPost;
