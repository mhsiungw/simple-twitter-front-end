import React from "react";

interface InputProps {
	id?: string,
	value?: string,
	onChange?: () => void,
};

const Input = (props : InputProps) => {

	const {
		id,
		value,
		onChange,
	} = props;

	return (
		<input id={id} value={value} onChange={onChange} name={id} type="text" />
	);
};

export default Input;
