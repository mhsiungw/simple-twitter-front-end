import React, { useEffect, ReactElement, SyntheticEvent, ForwardRefRenderFunction } from "react";
import { FormContext } from "./context";
import style from "./style.module.scss";

interface FormData {
	[key: string]: FormDataEntryValue,
}

interface FormProps {
	children: ReactElement | ReactElement[],
	onSubmit: (formData: FormData | null, errorMessage: string | null) => void,
}

export interface CustomHTMLFormElement extends HTMLFormElement {
	isValid: boolean,
	errorMessage: string | null,
}

const FormComponent: ForwardRefRenderFunction<CustomHTMLFormElement, FormProps> = (props, ref) => {
	const {
		children,
		onSubmit,
	} = props;

	useEffect(() => {
		if (ref !== null && typeof ref !== "function") {
			const form = ref.current;
			if (form){
				form.isValid = true;
				form.errorMessage = null;
			}
		}
	}, [ref]);

	const _handleOnSubmit = (e : SyntheticEvent) => {
		e.preventDefault();

		if (ref !== null && typeof ref !== "function") {
			const form = ref.current;
			const formData: FormData = {};

			if (form) {
				if (form.isValid) {
					for (const [key, value] of new FormData(form)) {
						formData[key] = value;
					}
	
					onSubmit(formData, null);
				} else {
					onSubmit(null, form.errorMessage);
				}
			}
		}
	};

	return (
		<FormContext.Provider value={ref}>
			<form className={style.form} onSubmit={_handleOnSubmit} ref={ref}>
				{children}
				<input type="submit"/>
			</form>
		</FormContext.Provider>
	);
};

export default React.forwardRef(FormComponent);
