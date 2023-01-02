/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";

const FormContext = createContext<any>({});

const useFormContext = () => useContext(FormContext);

export {
	FormContext,
	useFormContext,
};
