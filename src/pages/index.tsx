import React from "react";
import type { NextPage } from "next";
import Example from "components/example";
import TweetComponent from "components/tweetInfo/index";


interface Tweet {
	id: string,
	userId: string,
	description: string,
	createdAt: Date,
	updatedAt: Date,
}

export interface User {
	id: string,
	account: string,
	name: string,
	email: string,
	avatarImg: string,
}

interface Reply {
	id: string,
	tweetId: string,
	userId: string,
	content: string,
	createdAt: Date,
	updatedAt: Date,
}

export interface TweetResponse {
	tweet: Tweet,
	likeCount: number,
	replyCount: number,
	isLiked: boolean,
	replies: [{
		reply: Reply,
		user: User,
	}],
}


const Home: NextPage = () => {
	const tweetInfo: TweetResponse = {
		tweet: {
			id: "123",
			userId: "1234",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		likeCount: 10,
		replyCount: 2,
		isLiked: true,
		replies: [{
			reply: {
				id: "123",
				tweetId: "123",
				userId: "1234",
				content: "aloha",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			user: {
				id: "123",
				account: "onetwothree",
				name: "John",
				email: "hi@hi.com",
				avatarImg: "https://i.imgur.com/OckVkRo.jpeg",
			}
		}]
	};

	const user: User = {
		id: "123",
		account: "testAcc",
		name: "Han",
		email: "hi@hi.com",
		avatarImg: "https://i.imgur.com/dDNedqE.jpeg",
	};

	return (
		<>
			<div>Home</div>
			<Example message="example string" />
			<TweetComponent tweetInfo={tweetInfo} user={user} />
		</>
	);
};

export default Home;
