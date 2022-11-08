import React, { ReactNode } from "react";
import cx from "classnames";
import classes from "./style.module.scss";

interface ButtonProps {
	className?: string,
	children?: ReactNode,
	size?: string,
	disabled?: boolean,
	loading?: boolean,
	loadingText?: string,
	onClick?: () => void,
};

interface SizeEnumsType {
	SMALL: string,
	MIDDLE: string,
	LARGE: string,
};

const SizeEnums: SizeEnumsType = {
	SMALL: classes.sm,
	MIDDLE: classes.md,
	LARGE: classes.lg,
};

const defaultProps: ButtonProps = {
	disabled: false,
	loading: false,
	loadingText: "處理中",
	size: "small",
};

const Button = ({
	children,
	className,
	size,
	disabled,
	loading,
	loadingText,
	onClick,
}: ButtonProps) => {

	return (
		<div className={className}>
			<button
				className={cx(
					"button",
					SizeEnums[size?.toUpperCase() as keyof SizeEnumsType] || SizeEnums["SMALL"],
					classes.button,
				)}
				onClick={onClick}
				disabled={disabled}
			>
				{loading ? loadingText : children}
			</button>
		</div>
	);
};

Button.defaultProps = defaultProps;


export default Button;
