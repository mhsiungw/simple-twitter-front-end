import React from "react";
import type { NextPage } from "next";
import Example from "components/example";
import ReplyContent from "components/reply";
import dayjs from "dayjs";

const Home: NextPage = () => {
	const tweetInfo = [{
		reply: {
			id: "123",
			tweetId: "123",
			userId: "1234",
			content: "aloha",
			createdAt: dayjs(),
			updatedAt: dayjs()
		},
		user: {
			id: "123",
			account: "onetwothree",
			name: "John",
			email: "hi@hi.com",
			avatarImg: "https://i.imgur.com/OckVkRo.jpeg",
		}
	},{
		reply: {
			id: "456",
			tweetId: "123",
			userId: "1234",
			content: "aloha",
			createdAt: dayjs(),
			updatedAt: dayjs()
		},
		user: {
			id: "123",
			account: "onetwothree",
			name: "John",
			email: "hi@hi.com",
			// avatarImg: "https://i.imgur.com/OckVkRo.jpeg",
		}}];

	const tweetUser = {
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
		</>
	);
};

export default Home;
