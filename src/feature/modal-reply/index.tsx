import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fakePhoto from "../../assets/img/fake-photo.png";
import classes from "./style.module.scss";
import { ModalPostProps } from "../modal-post";
import Modal from "components/modal";
import Header from "components/header";
import Button from "components/button";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs().format();
dayjs.extend(relativeTime);

interface ModalReplyProps extends ModalPostProps {
  tweet: {
    readonly id: string,
    readonly description: string,
    user: {
      readonly id: string,
      readonly name: string,
      readonly account: string,
      readonly avatarImg?: string,
    },
    readonly createdAt: string,
  },
}

const ModalReply = ({
	isVisible,
	onDialogClose,
	currentUser,
	tweet
}: ModalReplyProps) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [shouldSubmit, setShouldSubmit] = useState(false);
	const {
		id,
		user: { id: userId, name, account, avatarImg },
		description
	} = tweet;
	const { id: currentUserId, avatarImg: currentUserAvatar } = currentUser;

	const createdAt = dayjs(tweet.createdAt).fromNow();

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
			<aside className={classes.modal__reply}>
				<div className={classes.avatar}>
					<Link href={`/${userId}`}>
						<a>
							<Image width={50} height={50} src={avatarImg || fakePhoto} alt="tweet owner's avatar" />
						</a>
					</Link>
					<div className={classes.decoration}></div>
				</div>
				<section className={classes.modal__content}>
					<p>
						<strong>
							<Link href={`/${userId}`}>{name}</Link>{" "}
						</strong>
						<span>
							<Link href={`/${userId}`}>{"@" + account}</Link>
						</span>
						<span>{`・${createdAt}`}</span>
					</p>
					<p>
						<Link href={`tweet/${id}`}>{description}</Link>
					</p>
					<p>
            回覆給 <Link href={`/${userId}`}>{"@" + account}</Link>
					</p>
				</section>
			</aside>
			<aside className={classes.modal__post}>
				<div className={classes.avatar}>
					<Link href={`/${currentUserId}`}>
						<a>
							<Image
								src={currentUserAvatar || fakePhoto}
								alt="current user's avatar"
							/>
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

export default ModalReply;
