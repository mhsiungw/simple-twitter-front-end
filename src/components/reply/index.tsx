import React from "react";
import classes from "./style.module.scss";
import { TweetResponse } from "src/pages/index";
import { User } from "src/pages/index";


interface ReplyProps {
	className?: string,
	tweetInfo: TweetResponsestring,
	user: Userstring,
	onClick?: () => voidstring,
}


const Tweet = ({ tweetInfo, user }: ReplyProps) => {
	const moment = require("moment");

	return (
		<div className={classes.container}>
			<div className={classes.tweetReplyList}>
				{!tweetInfo.replyCount && <div className="no-replies">此推文目前還沒有任何回覆(＞﹏＜)</div>}
				{tweetInfo.replies?.map((reply, index: number) => (<div className={classes.tweetReply} key={index}>
					<div className={classes.tweetReplyImg}>
						<img src={reply.user.avatarImg} />
					</div>
					<div className={classes.tweetReplyContent}>
						<div className={classes.tweetReplyContentInfo}>
							<span className="name">{reply.user.name}</span>
							<span className={classes.info}>@{reply.user.account} • {moment(reply.reply.createdAt).fromNow()}</span>
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



