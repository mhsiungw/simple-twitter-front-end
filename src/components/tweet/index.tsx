import { useEffect, useState } from "react";
import { ReactNode } from "react";
import classes from "./style.module.scss";
import classNamees from "./style.module.scss";
import exitIcon from "src/assets/images/exit-icon.svg";
import commentIcon from "src/assets/images/comment-icon.svg";
import likeIcon from "src/assets/images/like-icon.svg";
import likedIcon from "src/assets/images/liked-icon.svg";
import { TweetDisplay } from 'src/pages/index';



interface TweetProps {
	classNameName?: string;
	children?: ReactNode;
	tweet: TweetDisplay;
	onClick?: () => void;
}


const Tweet = ({ tweet }: TweetProps) => {
	const moment = require('moment');

	return (
		<div className={classes.tweetCard}>
			<div
				className={classes.tweetCardImg}
			><img src={tweet.user.avatarImg}
				/></div>
			<div className={classes.tweetCardContent}>
				<div className={classes.tweetCardContentInfo}>
					<span className={classes.name}>{tweet.user.name}</span>
					<span className={classes.account}>@{tweet.user.account}</span>
					<span className={classes.createdAt}>{moment(tweet.tweet.createdAt).fromNow()}</span>
					<div >
						<div className={classes.tweetCardContentText}>
							{tweet.tweet.description}
						</div>
					</div>

					<div
						className={classes.tweetCardContentReply}
					>
						<div className={classes.contentReply}>
							<img
								className="content-reply-icon"
								src="./../assets/images/comment-icon.svg"
							/>
							<span className={classes.contentReplyNumber}>{tweet.replyCount}</span>
						</div>

						<div className="content-reply">
							<img
								className="content-reply-icon"
								src="./../assets/images/like-icon.svg"
							/>
							<img
								className="content-reply-icon"
								src="./../assets/images/active-like-icon.svg"
							/>
							<span
								className="content-reply-number"

							>{tweet.likeCount}
							</span>
						</div >
					</div >
				</div >
			</div >
		</div >
	);
};

export default Tweet;



