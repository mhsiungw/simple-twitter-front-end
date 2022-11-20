import React from "react";
import type { NextPage } from "next";
import Example from "components/example";
import Input from "components/input/index"

export interface inputInfo {
	title: string
	id: string
	name: string
}

const Home: NextPage = () => {
	const title: inputInfo = {
		title: "帳號",
		id: "account",
		name: "account"
	}
	return (
		<>
			<div>Home</div>
			<Example message="example string" />
			<Input title={title} />
		</>
	);
};

export default Home;
