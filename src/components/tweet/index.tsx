import { ReactNode } from "react";
import classes from "./style.module.scss";
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
							<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z" fill="#657786" />
							</svg>

							<span className={classes.contentReplyNumber}>{tweet.replyCount}</span>
						</div>

						<div className={classes.contentReply}>
							{!tweet.isLiked && <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z" fill="#657786" />
							</svg>}
							{tweet.isLiked && <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z" fill="#E0245E" />
							</svg>}
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



