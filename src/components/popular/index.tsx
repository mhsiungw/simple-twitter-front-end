import React from "react";
import PopularItem from "./popular-item";
import styles from "./style.module.scss";

const Popular = () => {
	const popularList = [
		{
			username: "chaco",
			account: "chaco123",
			avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuf4E7MJLLAk2uGBWT65WHsUFovPjFmQItw&usqp=CAU",
			isFollowed: 1,
		},
		{
			username: "min",
			account: "min456",
			avatar:
        "https://img.wxcha.com/m00/b9/e5/88dbd5e9fd0d0d43f80d436e2ea300b4.jpg",
			isFollowed: 0,
		},
		{
			username: "vince",
			account: "minHappy",
			avatar:
        "https://i.pinimg.com/736x/ee/b0/60/eeb060ab7a3808c02948ff18699506f1.jpg",
			isFollowed: 0,
		},
		{
			username: "weikai",
			account: "weikaiHappyWedding",
			avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSin_WXHiPIpwirom647UPBfm94AVGsfM0DaQ&usqp=CAU",
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
