import React, { useState, SyntheticEvent, ReactElement } from "react";
import cx from "classnames";
import { useFormContext } from "components/form/context";
import style from "./style.module.scss";

const PASS = true;
const NOT_PASS = false;

interface FormItemProps {
	name: string,
	rule?: {
		validator: (targetValue: string) => boolean,
		errorMessage: string,
	},
	children: ReactElement,
}

const FormItem = ({
	name,
	rule,
	children,
}: FormItemProps) => {
	const [inputValue, setInputValue] = useState("");
	const form = useFormContext().current;

	const _handleFormChange = (e : SyntheticEvent) => {
		const targetValue = (e.target as HTMLInputElement).value;

		if (form && rule) {
			const {
				validator,
				errorMessage = `${name} is not a valid input.`,
			} = rule;

			if (!validator(targetValue)) {
				form.errors[name] = errorMessage;
			} else {
				form.errors[name] = "";
			}
		}
		
		setInputValue(targetValue);
	};

	const _getFormControlComponent = () => {
		const formControl = children;

		return {
			...formControl,
			props: {
				...formControl.props,
				id: name,
				value: inputValue,
				onChange: _handleFormChange,
			}
		};
	};

	const _getErrorStatus = () => {
		if (form && form.errors) {
			if (form.errors[name] === "") {
				return PASS;
			}

			return NOT_PASS;
		}
		
		return PASS;
	};


	return (
		<div className={style["form-item"]}>
			<div className={style["input-item"]}>
				<label htmlFor={name}>{name}</label>
				{_getFormControlComponent()}
			</div>
			<div className={cx(style["status-bar"], _getErrorStatus() || style["error"])}/>
			{
				_getErrorStatus() || (
					<div className={style["error-message"]}>
						{form.errors[name]}
					</div>
				)
			}
		</div>
	);
};

export default FormItem;
