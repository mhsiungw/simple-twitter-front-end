import React, { useState } from "react";
import SideBar from "components/sideBar";
import Notify from "components/notify";

import styles from "./style.module.scss";

interface TweetItem {
	id: string,
	username: string,
	account: string,
	content: string,
}

const lorem:TweetItem[] = [{
	id: "01",
	account: "chaco001",
	username: "chaco001",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "02",
	account: "min001",
	username: "min001",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "03",
	account: "weikai001",
	username: "weikai001",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "04",
	account: "chaco002",
	username: "chaco002",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "05",
	account: "min002",
	username: "mi002",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "06",
	account: "weikai002",
	username: "weikai002",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "07",
	account: "chaco003",
	username: "chaco003",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "08",
	account: "min003",
	username: "min003",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "09",
	account: "weikai003",
	username: "weikai003",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "10",
	account: "chaco004",
	username: "chaco004",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "11",
	account: "min004",
	username: "min004",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "12",
	account: "weikai004",
	username: "weikai004",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "13",
	account: "chaco005",
	username: "chaco005",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "14",
	account: "min005",
	username: "min005",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
},{
	id: "15",
	account: "weikai005",
	username: "cweikai005",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing ..."
}];

const AdminMainPage = () => {
	const [tweetList, setTweetList] = useState(lorem);
	const  handleCloseClick = (id: string) => {
		//刪除推文清單api
		const newTweetList: TweetItem[] = tweetList.filter(item => item.id !== id);
		setTweetList(newTweetList);
		//成功刪除推文
		Notify.success("刪除推文成功");
	};

	return (
		<div className={styles["admin-main-page"]}>
			<SideBar isAgent={true} />
			<div className={styles["right-section"]}>
				<div className={styles.title}>推文清單</div>
				<ul className={styles["tweet-list"]}>
					{tweetList.map((item,idx) => 
						<li key={`${idx}`} className={styles["tweet-list-item"]}>
							<div className={styles["tweet-img"]}></div>
							<div className={styles["tweet-info"]}>
								<div className={styles["tweet-info-upper"]}>
									<div className={styles["username"]}>{item.username}</div>
									<div className={styles["account"]}>@{item.account}</div>
									<div className={styles["time"]}>・3 小時</div>
								</div>
								<div className={styles["tweet-info-lower"]}>{item.content}</div>
							</div>
							<div className={styles["close-btn"]} onClick={() => handleCloseClick(item.id)}/>
						</li>
					)}
				</ul>
			</div>
		</div>
		
	);
};

export default AdminMainPage;
