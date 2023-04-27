const checkInputLength = (wordLimit: number) => (word: string) => {
	if (word.length > wordLimit) {
		return `字數不可超過 ${wordLimit} 字上限`;
	}
	return null;
};

const checkEmailFormat = (userInput: string) => {
	const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	if (!pattern.test(userInput) && userInput) {
		return "錯誤的 Email 格式";
	}
	return null;
};

export { checkInputLength, checkEmailFormat };
