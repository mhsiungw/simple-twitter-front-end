import React, { useReducer, useEffect, useState, SyntheticEvent, ReactElement } from "react";
import cx from "classnames";
import { useFormContext } from "components/form/context";
import style from "./style.module.scss";

interface FormItemProps {
	id: string,
	label: string,
	className?: string,
	rule?: (targetValue: string) => string | null,
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
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const formRef = useFormContext();

	useEffect(() => {
		if (formRef.current && rule) {
			formRef.current.rules = {
				...formRef.current.rules,
				[id]: {
					rule,
					setErrorMessage,
				},
			};
		}
	}, [formRef, id, rule]);

	const _handleFormChange = (e : SyntheticEvent) => {
		const targetValue = (e.target as HTMLInputElement).value;

		if (formRef.current && rule) {
			formRef.current.errors[id] = rule(targetValue) ? setErrorMessage(rule(targetValue)) : setErrorMessage(null);
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

	return (
		<div className={cx(style["form-item"], className)}>
			<div className={style["input-item"]}>
				<label htmlFor={id}>{label}</label>
				{_getFormControlComponent()}
			</div>
			<div className={cx(style["status-bar"], errorMessage && style["error"])}/>
			{
				errorMessage && (
					<div className={style["error-message"]}>
						{errorMessage}
					</div>
				)
			}
		</div>
	);
};

export default FormItem;
