import { useState, useEffect } from 'react';
import cx from 'classnames';
import classes from './style.module.scss';
import { NotifyGeneratorProps } from '../../notification-generator';

interface AppProps extends NotifyGeneratorProps {
	order: number;
}

const Notification = ({
	text,
	duration,
	icon: Icon,
	className,
	order,
}: AppProps) => {
	const [isSlideOut, setIsSlideOut] = useState(false);
	const _getTop = (order: number) => 20 + 100 * order;

	useEffect(() => {
		setTimeout(() => {
			setIsSlideOut(true);
		}, duration);
	}, [duration]);

	return (
		<div
			className={cx(
				classes.notification,
				isSlideOut ? classes.slideOut : classes.slideIn
			)}
			style={{
				top: _getTop(order),
			}}
		>
			<p>{text}</p>
			<i className={cx('icon', className)}>
				<Icon />
			</i>
		</div>
	);
};

export default Notification;
