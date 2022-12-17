import React, { useRef } from "react";
import type { NextPage } from "next";
import Example from "components/example";

import Form from "components/form";
import FormItem from "components/form/components/form-item";
import Input from "components/input";

const Home: NextPage = () => {
	const formRef = useRef(null);


	return (
		<>
			<div>Home</div>
			<Example message="example string"/>
			<Form ref={formRef} onSubmit={(values, errorMessage) => console.log("onSubmit", values, errorMessage)}>
				<FormItem
					name="phone"
					rule={{
						validator: value => value === "valid input" ? true : false,
						errorMessage: "Invalid input",
					}}
				>
					<Input/>
				</FormItem>
				<FormItem
					name="name"
				>
					<Input/>
				</FormItem>
			</Form>
		</>
	);
};

export default Home;
