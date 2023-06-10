import React, { ReactElement, useState, useEffect } from "react";

const NotificationContainer = ({
	notifications
}: {
  notifications: ReactElement[],
}) => {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	useEffect(() => {
		const handleResize = () => {
			setWindowHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return <div>{notifications}</div>;
};

export default NotificationContainer;
