import { ReactNode } from "react";
import classes from "./style.module.scss";
import exitIcon from "src/assets/images/exit-icon.svg";
import commentIcon from "src/assets/images/comment-icon.svg";
import likeIcon from "src/assets/images/like-icon.svg";
import likedIcon from "src/assets/images/liked-icon.svg";
import { TweetResponse } from 'src/pages/index';
import { User } from 'src/pages/index';


interface ReplyProps {
	className?: string;
	tweetInfo: TweetResponse;
	user: User;
	onClick?: () => void;
}


const Tweet = ({ tweetInfo, user }: ReplyProps) => {
	const moment = require('moment');

	return (
		<div className={classes.container}>
			<div className={classes.tweetReplyList}>
				{!tweetInfo.replyCount && <div className="no-replies">此推文目前還沒有任何回覆(＞﹏＜)</div>}
				{tweetInfo.replies?.map((reply, index) => (<div className={classes.tweetReply} key={index}>
					<div className={classes.tweetReplyImg}><img src={reply.user.avatarImg} /> </div>
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



