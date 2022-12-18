import React from "react";
import Image from "next/image";
import Button from "../../button";
import styles from "./style.module.scss";
import defaultAvatar from "../img/Photo.png";

interface PopularItem {
  username: string,
  account: string,
  avatar?: string ,
  isFollowed: number,
}

function PopularItem({ username, account, avatar, isFollowed }: PopularItem) {
	const handleFollowClick = () => {
		// Todo: post add/remove follow api
		console.log("!!!handleFollowClick");
	};
	return (
		<li className={styles.popularItem}>
			<Image className={styles.avatar} src={avatar?avatar:defaultAvatar} alt="img" />
			<div className={styles.itemInfo}>
				<span>{username}</span>
				<span className={styles.account}>@{account}</span>
			</div>
			<Button
				className={isFollowed === 1 ? styles.followingBtn : styles.followBtn}
				onClick={() => handleFollowClick()}
			>
				{isFollowed === 1 ? <p>正在跟隨</p> : <p>跟隨</p>}
			</Button>
		</li>
	);
}

export default PopularItem;
