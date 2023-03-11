import React from "react";

interface InputProps {
	id?: string,
	value?: string,
	onChange?: () => void,
	type?: string,
};

const Input = (props : InputProps) => {
	const {
		id,
		value,
		onChange,
		type = "text",
	} = props;

	return (
		<input id={id} value={value} onChange={onChange} name={id} type={type} />
	);
};

export default Input;
