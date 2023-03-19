import React, { useState, SyntheticEvent, ReactElement } from "react";
import cx from "classnames";
import { useFormContext } from "components/form/context";
import style from "./style.module.scss";

const PASS = true;
const NOT_PASS = false;

interface FormItemProps {
	id: string,
	label: string,
	className?: string,
	rule?: (targetValue: string) => string | "",
	children: ReactElement,
}

const FormItem = ({
	label,
	id,
	className,
	rule,
	children,
}: FormItemProps) => {
	const [inputValue, setInputValue] = useState("");
	const formRef = useFormContext();

	const _handleFormChange = (e : SyntheticEvent) => {
		const targetValue = (e.target as HTMLInputElement).value;

		if (formRef.current && rule) {
			formRef.current.errors[id] = rule(targetValue);
			console.log(formRef.current.errors);
		}
		
		setInputValue(targetValue);
	};

	const _getFormControlComponent = () => {
		const formControl = children;

		return {
			...formControl,
			props: {
				...formControl.props,
				id,
				value: inputValue,
				onChange: _handleFormChange,
			}
		};
	};

	const _getErrorStatus = () => {
		if (formRef.current && formRef.current.errors) {
			if (formRef.current.errors[id] === "") {
				return PASS;
			}

			return NOT_PASS;
		}
		
		return PASS;
	};


	return (
		<div className={cx(style["form-item"], className)}>
			<div className={style["input-item"]}>
				<label htmlFor={id}>{label}</label>
				{_getFormControlComponent()}
			</div>
			<div className={cx(style["status-bar"], _getErrorStatus() || style["error"])}/>
			{
				_getErrorStatus() || (
					<div className={style["error-message"]}>
						{formRef.current.errors[id]}
					</div>
				)
			}
		</div>
	);
};

export default FormItem;
