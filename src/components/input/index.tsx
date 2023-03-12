import React from "react";

interface InputProps {
	id?: string,
	value?: string,
	className?: string,
	onChange?: () => void,
};

const Input = (props : InputProps) => {
	const {
		id,
		value,
		className,
		onChange,
	} = props;

	return (
		<input className={className} id={id} value={value} onChange={onChange} name={id} type="text" />
	);
};

export default Input;
