import React, { useRef, SyntheticEvent ,ReactElement, useState } from "react";
import cx from "classnames";
import { useFormContext } from "components/form/context";
import style from "./style.module.scss";

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
	const formRef = useFormContext();
	const inputStatusRef = useRef(true);
	const errorMessageRef = useRef("");

	const _handleFormChange = (e : SyntheticEvent) => {
		const targetValue = (e.target as HTMLInputElement).value;

		if (rule) {
			const {
				validator,
				errorMessage,
			} = rule;

			if (!validator(targetValue)) {
				formRef.current.isValid = false;
				formRef.current.error = true;
				inputStatusRef.current = false;
				errorMessageRef.current = errorMessage;
			} else {
				formRef.current.isValid = true;
				inputStatusRef.current = true;
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


	return (
		<div className={style["form-item"]}>
			<div className={style["input-item"]}>
				<label htmlFor={name}>{name}</label>
				{_getFormControlComponent()}
			</div>
			<div className={cx(style["status-bar"], inputStatusRef.current || style["error"])}/>
			{
				inputStatusRef.current || (
					<div className={style["error-message"]}>
						{errorMessageRef.current}
					</div>
				)
			}
		</div>
	);
};

export default FormItem;
