import React, { useEffect, ReactElement, ForwardRefRenderFunction, SyntheticEvent } from "react";
import { FormContext } from "./context";
import style from "./style.module.scss";

interface FormData {
	[key: string]: FormDataEntryValue,
}

interface Errors {
	[key: string]: string,
}

interface FormProps {
	children: ReactElement | ReactElement[],
}

interface CustomHTMLFormElement extends HTMLFormElement {
	errors: Errors,
	validateFields: (callback: (formData: FormData, errors: Errors | false) => void) => void,
}

const Form: ForwardRefRenderFunction<CustomHTMLFormElement, FormProps> = (props, ref) => {
	const {
		children,
	} = props;

	useEffect(() => {
		if (ref !== null && typeof ref !== "function") {
			const form = ref.current;

			// initialise
			if (form){
				form.errors = {};
				if (Array.isArray(children)){
					for(let i = 0; i < children.length; i++) {
						const name = children[i].props.name;

						if (name) {
							form.errors[name as keyof Errors] = "";
						}
					}
				}

				form.validateFields = (callback) => {
					const formData: FormData = {};

					// get form data
					for (const [key, value] of new FormData(form)) {
						formData[key] = value;
					}

					// validate fields
					for (const key in form.errors) {
						if (form.errors[key] !== "") {
							callback(formData, form.errors);
							return;
						}
					}

					callback(formData, false);
				};
			}
		}
	}, [ref, children]);

	const _handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<FormContext.Provider value={ref}>
			<form ref={ref} className={style.form} onSubmit={_handleSubmit}>
				{children}
			</form>
		</FormContext.Provider>
	);
};


export type {
	CustomHTMLFormElement,
};

export default React.forwardRef(Form);
