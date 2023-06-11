import React, { useState, useEffect } from "react";
import { NotificationProps } from "components/notify/notification-generator";
import Notification from "../notification";
import { debounce } from "utilities/debounce";

const NotificationContainer = ({
	notifications
}: {
  notifications: NotificationProps[],
}) => {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [childHeight, setChildHeight] = useState(0);
	useEffect(() => {
		const handleResize = debounce(() => {
			setWindowHeight(window.innerHeight);
		});

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			{notifications.map((notification, index) => {
				const maxNotificationsCount = Math.floor(
					(windowHeight - 20) / (childHeight + 4)
				);
				return (
					<Notification
						icon={notification.icon}
						key={notification.key}
						text={notification.text}
						duration={notification.duration}
						className={notification.className}
						order={index % maxNotificationsCount}
						getHeight={setChildHeight}
						height={childHeight}
					/>
				);
			})}
		</div>
	);
};

export default NotificationContainer;
