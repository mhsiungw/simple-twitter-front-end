import React , { useRef, useState } from "react";
import SideBar from "components/sideBar";
import Popular from "components/popular";
import Header from "components/header";
import Button from "components/button";
import Notify from "components/notify";
import Tweet from "components/tweet";

import styles from "./style.module.scss";

const homeTweetList = [
	{ 
		tweet: {
			id: "01",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: true,
		},
	},
	{ 
		tweet: {
			id: "02",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: false,
		},
	},
	{ 
		tweet: {
			id: "03",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: false,
		},
	},
	{ 
		tweet: {
			id: "04",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: true,
		},
	},
	{ 
		tweet: {
			id: "05",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: false,
		},
	},
	{ 
		tweet: {
			id: "06",
			user: {
				id: "01",
				account: "apple",
				name: "Apple",
			},
			description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
			createdAt: "1462838400000",
			likeCount: 12,
			replyCount: 20,
			isLiked: true,
		},
	}
];

export const Main = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [showError, setShowError] = useState(false);
	const [errMsg, seterrMsg] = useState("");

	const handleTweetSend = () => {
		const textarea = textareaRef.current;
		if ( textarea?.value.length === 0 ) {
			setShowError(true);
			seterrMsg("內容不可空白");
			return;
		}
		if (showError) {
			return; 
		} 
		console.log("送出貼文");
		//送出貼文api
		const success = true;
		if(success) {
			Notify.success("送出貼文成功");
			textarea.value = "";
		}
	};
	const checkInput = () => {
		const textarea = textareaRef.current;
		if ( textarea?.value.length >= 140 ) {
			setShowError(true);
			seterrMsg("字數不可超過 140 字");
		} else {
			setShowError(false);
		}
	}; 
	const handleLike = () => {
		console.log("handleLike");
	};

	return (
		<div className={styles["main-page-container"]}>
			<div className={styles["side-bar-container"]}>
				<SideBar />
			</div>
			<div className={styles["main-middle-container"]}>
				<Header utility="normal" title="首頁" />
				<div className={styles["add-tweet-container"]}>
					<form
						method="dialog"
						onSubmit={() => handleTweetSend()}
						className={styles["form"]}>
						<div className={styles["user-avatar"]}></div>
						<textarea
							ref={textareaRef}
							placeholder="有什麼新鮮事？"
							className={styles["textarea"]}
							onChange={() => checkInput()}
						/>
						<Button className={styles["form_btn"]}>
							<span>推文</span>
						</Button>
						{showError && (
							<div className={styles["error-container"]}>{errMsg}</div>
						)}
					</form>
				</div>
				<div className={styles["index-tweet-list"]}>
					{homeTweetList.map((item, idx) => (
						<Tweet tweetInfo={item} key={idx} handleLike={() => handleLike()} />
						// <div className={styles["index-tweet-list"]} key={idx}>123</div>
					))}
				</div>
			</div>
			<div className={styles["popular-container"]}>
				<Popular />
			</div>
		</div>
	);
};

export default Main;
