import React from "react";
import type { NextPage } from "next";
import Example from "components/example";
import Tweets, { type TweetProps } from "components/tweet/index";

const tweet: TweetProps = {
	tweetInfo: {
		tweet: {
			id: "123",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
			createdAt: new Date(),
			likeCount: 10,
			replyCount: 2,
			isLiked: true,
			user: {
				id: "123",
				account: "testAcc",
				name: "Han",
				avatarImg: "",
			}
		}
	},
	handleLike: () => console.log("like or dislike?"),
	openModalReply: () => console.log("open")
};


const Home: NextPage = () => {
	return (
		<>
			<div>Home</div>
			<Example message="example string" />
			<Tweets tweetInfo={tweet.tweetInfo} handleLike={tweet.handleLike} openModalReply={tweet.openModalReply} />
		</>
	);
};

export default Home;
