import React, {
	useEffect,
	ReactElement,
	ForwardRefRenderFunction,
	SyntheticEvent
} from "react";
import { FormContext } from "./context";

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
  validateFields: (
    callback: (formData: FormData, errors: Errors | false) => void
  ) => void,
}

const Form: ForwardRefRenderFunction<CustomHTMLFormElement, FormProps> = (
	props,
	ref
) => {
	const { children } = props;

	useEffect(() => {
		if (ref !== null && typeof ref !== "function") {
			const form = ref.current;

			// initialize
			if (form) {
				form.errors = {};
				if (Array.isArray(children)) {
					for (let i = 0; i < children.length; i++) {
						const id = children[i].props.id;

						if (id) {
							form.errors[id as keyof Errors] = "";
						}
					}
				} else {
					const id = children.props.id;

					if (id) {
						form.errors[id as keyof Errors] = "";
					}
				}

				form.validateFields = (callback) => {
					const formData: FormData = {};

					// get form data
					for (const [key, value] of new FormData(form)) {
						const ruleHandlerByKey = form?.rules?.[key]?.rule;
						const ruleStateSetterByKey = form?.rules?.[key]?.setErrorMessage;
						const errorMessage = typeof ruleHandlerByKey === "function" ? ruleHandlerByKey(value) : null;

						if (errorMessage && ruleStateSetterByKey) {
							ruleStateSetterByKey(errorMessage);
						}

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
			<form ref={ref} onSubmit={_handleSubmit}>
				{children}
			</form>
		</FormContext.Provider>
	);
};

export type { CustomHTMLFormElement };

export default React.forwardRef(Form);
