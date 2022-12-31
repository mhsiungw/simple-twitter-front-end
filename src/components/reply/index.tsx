import React from "react";
import classes from "./style.module.scss";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Tweet {
	id: string,
	userId: string,
	description: string,
	createdAt: Date,
	updatedAt: Date,
}
interface Reply {
	id: string,
	tweetId: string,
	userId: string,
	content: string,
	createdAt: Date,
	updatedAt: Date,
}
interface ReplyProps {
	className?: string,
	tweetInfo: TweetResponse,
	user: User,
	onClick?: () => React.MouseEventHandler<HTMLButtonElement>,
}
interface User {
	id: string,
	account: string,
	name: string,
	email: string,
	avatarImg: string,
}
interface TweetResponse {
	tweet: Tweet,
	likeCount: number,
	replyCount: number,
	isLiked: boolean,
	replies: {
		reply: Reply,
		user: User,
	}[],
}


const Tweet = ({ tweetInfo, user }: ReplyProps) => {
	dayjs.extend(relativeTime);
	return (
		<div className={classes.container}>
			<div className={classes.tweetReplyList}>
				{!tweetInfo.replyCount && <div className="no-replies">此推文目前還沒有任何回覆(＞﹏＜)</div>}
				{tweetInfo.replies?.map((reply, index: number) => (<div className={classes.tweetReply} key={index}>
					<div className={classes.tweetReplyImg}>
						<Image width={50} height={50} src={reply.user.avatarImg} alt="avatar" />
					</div>
					<div className={classes.tweetReplyContent}>
						<div className={classes.tweetReplyContentInfo}>
							<span className="name">{reply.user.name}</span>
							<span className={classes.info}>@{reply.user.account} • {dayjs(reply.reply.createdAt).fromNow()}</span>
						</div>
						<div className={classes.tweetReplyContentAvatar}>回覆
							<span>@{user.account}</span></div>
						<div className={classes.tweetReplyContentComment}>{reply.reply.content}</div>
					</div>
				</div>))}
			</div>
		</div>
	);
};

export default Tweet;



