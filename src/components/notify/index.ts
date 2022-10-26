import notificationGenerator from "./notification-generator";
import { ICError, ICSuccess } from './icons'

type Text = string | number;

const Notify = {
	success: (text: Text, duration = 3000) => notificationGenerator({ text, duration, icon: ICSuccess, className: 'success' }),
	error: (text: Text, duration = 3000) => notificationGenerator({ text, duration, icon: ICError, className: 'error' }),
};

export default Notify;
