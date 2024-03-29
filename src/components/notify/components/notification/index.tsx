import React, { Dispatch } from "react";
import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import classes from "./style.module.scss";
import { NotifyGeneratorProps } from "../../notification-generator";

interface AppProps extends NotifyGeneratorProps {
  order: number,
  getHeight: Dispatch<number>,
	height: number,
}

const Notification = ({
	text,
	duration,
	icon: Icon,
	className,
	order,
	getHeight,
	height
}: AppProps) => {
	const notificationRef = useRef<HTMLDivElement | null>(null);
	const [isSlideOut, setIsSlideOut] = useState(false);
	const _getTop = (order: number) => 20 + (height + 4) * order;

	useEffect(() => {
		const notificationDom = notificationRef.current;
		if (notificationDom) {
			getHeight(notificationDom.offsetHeight);
		}
		setTimeout(() => {
			setIsSlideOut(true);
		}, duration);
	}, [duration, getHeight]);

	return (
		<div
			className={cx(
				classes.notification,
				isSlideOut ? classes.slideOut : classes.slideIn
			)}
			style={{
				top: _getTop(order)
			}}
			ref={notificationRef}>
			<p>{text}</p>
			<i className={cx("icon", className)}>
				<Icon />
			</i>
		</div>
	);
};

export default Notification;
