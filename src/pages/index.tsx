import React from "react";
import type { NextPage } from "next";
import Example from "components/example";
import Popular from "components/popular";

const Home: NextPage = () => {
	return (
		<>
			<div>Home</div>
			<Example message="example string" />
			<Popular />
		</>
	);
};

export default Home;
