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
	const _getAnimationDuration = (duration: number) => `${duration / 1000}s`;

	const _getTop = (order: number) => 20 + 96 * order;

	return (
		<div
			className={classes.notification}
			style={{
				animationDuration: _getAnimationDuration(duration),
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
