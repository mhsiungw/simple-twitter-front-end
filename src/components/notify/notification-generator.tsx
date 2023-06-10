import React, { ReactElement } from "react";
import { createRoot, Root } from "react-dom/client";
import NotificationContainer from "./components/notification-container";
import Notification from "./components/notification";

export interface NotifyGeneratorProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any,
	text: string | number,
	duration: number,
	className?: string,
	id: string,
}

const notifications: ReactElement[] = [];
let notificationCount = 0;
let root: Root, dom: HTMLElement | null = null;

// TODO 要怎麼去限制整個 notifications 的全部數量，去減少會溢滿出來的狀況？

const notificationGenerator = ({icon, text, duration, className, id}:NotifyGeneratorProps) => {
	dom = document.getElementById("notification");

	if (dom === null) {
		dom = document.createElement("div");
		dom.id = "notification";
		document.body.insertBefore(dom, null);
		root = createRoot(dom);
	}

	notifications.push(
		<Notification
			icon={icon}
			key={notificationCount}
			text={text}
			duration={duration}
			className={className}
			order={notifications.length}
			id={id}
		/>
	);

	root.render(<NotificationContainer notifications={notifications} />);
	notificationCount++;

	setTimeout(() => {
		notifications.shift();
		root.render(<NotificationContainer notifications={notifications} />);
		notificationCount = 0;
	}, duration + 100);
};

export default notificationGenerator;
