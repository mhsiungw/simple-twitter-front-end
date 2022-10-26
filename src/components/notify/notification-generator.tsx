import React, { ReactElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import NotificationContainer from './components/notification-container';
import Notification from './components/notification';

export interface NotifyGeneratorProps {
	icon: any,
	text: string | number,
	duration: number,
	className?: string,
}

const notifications: ReactElement[] = [];
let root: Root, dom: HTMLElement | null;

const notificationGenerator = ({icon, text, duration, className}:NotifyGeneratorProps) => {
	dom = document.getElementById('notification');

	if (dom === null) {
		dom = document.createElement('div');
		dom.id = 'notification';
		document.body.insertBefore(dom, null);
		root = createRoot(dom);
	}

	notifications.push(
		<Notification
			icon={icon}
			key={text}
			text={text}
			duration={duration}
			className={className}
			order={notifications.length}
		/>
	);
	root.render(<NotificationContainer notifications={notifications} />);

	setTimeout(() => {
		notifications.shift();
		root.render(<NotificationContainer notifications={notifications} />);
	}, duration + 100);
};

export default notificationGenerator
