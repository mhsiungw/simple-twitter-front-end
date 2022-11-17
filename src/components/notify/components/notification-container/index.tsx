import React, { ReactElement } from "react";

const NotificationContainer = ({ notifications }: { notifications: ReactElement[] }) => {
	return <div>{notifications}</div>;
};

export default NotificationContainer;
