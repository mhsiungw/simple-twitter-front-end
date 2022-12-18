import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LikeIcon, LikedIcon, ReplyIcon } from "./icons";
import fakePhoto from "../../assets/img/fake-photo.png";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs().format();
dayjs.extend(relativeTime);

interface TweetOwner {
  id: string,
  account: string,
  name: string,
  avatarImg: string,
}

interface Tweet<User> {
  id: string,
  user: User,
  description: string,
  createdAt: Date,
}

interface TweetInfo {
  tweet: Tweet<TweetOwner> & {
    likeCount: number,
    replyCount: number,
    isLiked: boolean,
  },
}

export interface TweetProps {
  className?: string | undefined,
  tweetInfo: TweetInfo,
  openModalReply: () => void,
	handleLike: () => void,
}

const Tweet = ({ tweetInfo, className, openModalReply, handleLike }: TweetProps) => {
	const { tweet } = tweetInfo;
	const { createdAt } = tweet;
	const transformed = dayjs(createdAt).fromNow();
	const [transformedCreatedAt, setTransformed] = useState("");
	useEffect(() => {
		setTransformed(transformed);
	}, [transformed]);
	return (
		<div className={`${classes.tweet} ${className ?? ""}`}>
			<div className={classes.tweet__img}>
				<Link href={tweet.id}>
					<>
						<Image src={tweet.user.avatarImg || fakePhoto} alt="user avatar" />
					</>
				</Link>
			</div>
			<div className={classes.tweet__content}>
				<div className={classes.tweet__info}>
					<Link href={tweet.id}>
						<span>{tweet.user.name}</span>
					</Link>
					<Link href={tweet.id}>
						<span>@{tweet.user.account}</span>
					</Link>
					<span>{transformedCreatedAt}</span>
				</div>
				<div className={classes.tweet__text}>
					<Link href={tweet.id}>{tweet.description}</Link>
				</div>

				<div className={classes.tweet__footer}>
					<div className={classes.tweet__footer_interaction}>
						<div onClick={openModalReply}>
							<ReplyIcon className={classes.tweet__footer_icon} />
						</div>
						<Link href={tweet.id}>
							{/* 跳轉到該tweet的介面，看有哪些留言 */}
							<span style={{ cursor: "pointer" }}>
								{tweet.replyCount}
							</span>
						</Link>
					</div>
					<div className={classes.tweet__footer_interaction}>
						<div onClick={handleLike}>
							{!tweet.isLiked && (
								<LikeIcon className={classes.tweet__footer_icon} />
							)}
							{tweet.isLiked && (
								<LikedIcon className={classes.tweet__footer_icon} />
							)}
						</div>
						<span>{tweet.likeCount}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
