import React from "react";
import classes from "./style.module.scss";
import Image from "next/image";
import dayjs,{ Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import defaultImg from "./img/avatar-defalut.png";

interface Reply {
	id: string,
	tweetId: string,
	userId: string,
	content: string,
	createdAt: Dayjs,
	updatedAt: Dayjs,
}
interface ReplyProps {
	className?: string,
	tweetReplyInfo: TweetResponse,
	user: User,
	onClick?: () => React.MouseEventHandler<HTMLButtonElement>,
}
interface User {
	id: string,
	account: string,
	name: string,
	email: string,
	avatarImg?: string,
}
interface TweetResponse {
		reply: Reply,
		user: User,
}


const Tweet = (props: ReplyProps) => {
	dayjs.extend(relativeTime);
	const {tweetReplyInfo, user} = props;
	const handleAvatarClick=()=>{
		//TOD:
		console.log("!!!handleAvatarClick");
	};
	return (
		<div className={classes.tweetReply} >
			<div className={classes.tweetReplyImg}>
				{tweetReplyInfo.user.avatarImg?
					<Image width={50} height={50} src={tweetReplyInfo.user.avatarImg} alt="avatar" onClick={handleAvatarClick} />
					:
					<Image width={50} height={50} src={defaultImg} alt="avatar" onClick={handleAvatarClick} />}
			</div>
			<div className={classes.tweetReplyContent}>
				<div className={classes.tweetReplyContentInfo}>
					<span >{tweetReplyInfo.user.name}</span>
					<span className={classes.info}>@{tweetReplyInfo.user.account} • {dayjs(tweetReplyInfo.reply.createdAt).fromNow()}</span>
				</div>
				<div className={classes.tweetReplyContentAvatar}>回覆
					<span onClick={handleAvatarClick}>@{user.account}</span></div>
				<div className={classes.tweetReplyContentComment}>{tweetReplyInfo.reply.content}</div>
			</div>
		</div>
	);
};

export default Tweet;



