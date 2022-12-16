import React from "react";
import PopularItem from "./popular-item";
import styles from "./style.module.scss";

const Popular = () => {
	const popularList = [
		{
			username: "chaco",
			account: "chaco123",
			avatar: "",
			isFollowed: 1,
		},
		{
			username: "min",
			account: "min456",
			avatar: "",
			isFollowed: 0,
		},
		{
			username: "vince",
			account: "minHappy",
			avatar: "",
			isFollowed: 0,
		},
		{
			username: "weikai",
			account: "weikaiHappyWedding",
			avatar: "",
			isFollowed: 0,
		},
	];
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Popular</div>
			<ul className={styles.popularList}>
				{popularList.map((item, idx) => (
					<PopularItem {...item} key={idx} />
				))}
			</ul>
		</div>
	);
};

export default Popular;
