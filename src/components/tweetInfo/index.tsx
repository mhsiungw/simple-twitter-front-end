import { useEffect, useState } from "react";
import { ReactNode } from "react";
import classes from "./style.module.scss";
import exitIcon from "src/assets/images/exit-icon.svg";
import commentIcon from "src/assets/images/comment-icon.svg";
import likeIcon from "src/assets/images/like-icon.svg";
import likedIcon from "src/assets/images/liked-icon.svg";
import { TweetResponse } from 'src/pages/index';
import { User } from 'src/pages/index';
import Reply from '../reply/index'



interface TweetInfoProps {
	className?: string;
	children?: ReactNode;
	tweetInfo: TweetResponse;
	user: User;
	onClick?: () => void;
}


const Tweet = ({ tweetInfo, user }: TweetInfoProps) => {
	return (
		<div className={classes.container}>
			<div className={classes.tweetCard}>
				<div className={classes.tweetCardInfo}>
					<div className={classes.tweetCardInfoImg}><img src={user.avatarImg} />
					</div>
					<div className={classes.tweetCardInfoName}>
						<div className={classes.name}>{user.name}</div>
						<div className={classes.account}>@{user.account}</div>
					</div>
				</div>
				<div className={classes.tweetCardContent}>
					<p className={classes.tweetCardContentText}>{tweetInfo.tweet.description}</p>
					<div className={classes.tweetCardContentTime}>
						<span>{tweetInfo.tweet.createdAt.toDateString()}</span>
					</div>
				</div>
				<div className={classes.tweetCardReply}>
					<span>
						<b>{tweetInfo.replyCount}</b>
						回覆
					</span>
					<span>
						<b>{tweetInfo.likeCount}</b>喜歡次數
					</span>
				</div>
				<div className={classes.tweetCardReply}>
					<span>
						<img src={commentIcon} alt="comment-icon" />
					</span>
					<span>
						<img src={likedIcon} alt="liked-icon" />
						<img alt="like-icon" />
					</span>
				</div>
			</div>
			<Reply tweetInfo={tweetInfo} user={user} />
		</div>
	);
};

export default Tweet;



