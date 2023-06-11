import React from "react";
import { createRoot, Root } from "react-dom/client";
import NotificationContainer from "./components/notification-container";

export interface NotifyGeneratorProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any,
	text: string | number,
	duration: number,
	className?: string,
}

export interface NotificationProps {
	icon: string,
	text: string | number,
	duration: number,
	className?: string,
	key: string,
}

const notifications: NotificationProps[] = [];
let root: Root, dom: HTMLElement | null = null;

const notificationGenerator = ({icon, text, duration, className}: NotifyGeneratorProps) => {
	dom = document.getElementById("notification");

	if (dom === null) {
		dom = document.createElement("div");
		dom.id = "notification";
		document.body.insertBefore(dom, null);
		root = createRoot(dom);
	}

	notifications.push({
		icon,
		key: crypto.randomUUID(),
		text,
		duration,
		className
	});

	root.render(<NotificationContainer notifications={notifications} />);

	setTimeout(() => {
		notifications.shift();
		root.render(<NotificationContainer notifications={notifications} />);
	}, duration + 100);
};

export default notificationGenerator;
