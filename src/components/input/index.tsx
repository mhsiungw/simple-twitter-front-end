import React, { ReactNode } from "react";
import classes from "./style.module.scss";
import inputInfo from "src/pages/index"

interface InputProps {
	title: inputInfo
}


const Input = ({
	title
}: InputProps) => {

	return (
		<div className={classes.formRow}>
			<label htmlFor={title.name} >{title.title}</label>
			{/* <span className={classes.symbol}>@</span> */}
			<input
				id={title.id}
				name={title.name}
				type="text"
				required
			/>
		</div>
	);
};


export default Input;
