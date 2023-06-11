type F = (...args: any[]) => any;

export const debounce = (fn: F, time = 500): F => {
	let recordId: ReturnType<typeof setTimeout> | number;
	return (...args) => {
		clearTimeout(recordId);
		recordId = setTimeout(fn, time, ...args);
	};
};
