export const checkAndReturnErrorMsg = (wordLimit: number) => {
	return {
		validator: (word: string) => word.length <= wordLimit,
		errorMessage: `字數不可超過 ${wordLimit} 字上限`
	};
};

export const checkEmailFormat = (userInput: string) => {
	const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return pattern.test(userInput);
};

export const checkPasswordValid: (
  password: string,
  confirmedPassword: string
) => boolean = (password, confirmedPassword) => {
	return password === confirmedPassword;
};
