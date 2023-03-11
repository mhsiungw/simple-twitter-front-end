import React, { useRef } from "react";
import Image from "next/image";
import Aclogo from "../../assets/img/ac_logo.png";
import {
	checkAndReturnErrorMsg,
	checkEmailFormat,
	checkPasswordValid
} from "src/utilities";
import Form, { CustomHTMLFormElement } from "components/form/index";
import FormItem from "components/form/components/form-item";
import Input from "components/input";
import Button from "components/button";
import Notify from "components/notify";
import style from "./style.module.scss";
import Link from "next/link";

const Register = () => {
	const formRef = useRef<CustomHTMLFormElement>(null);
	// const [disabled, setDisabled] = useState(true);

	const handleSubmit = () => {
		const formData: null | HTMLFormElement = formRef.current;
		if (formData && formData.validateFields) {
			const passwordInput = formData.children[3].children[0]
				.children[1] as HTMLInputElement;
			const confirmedPasswordInput = formData.children[4].children[0]
				.children[1] as HTMLInputElement;
			if (
				!checkPasswordValid(passwordInput.value, confirmedPasswordInput.value)
			) {
				Notify.error("密碼不一致，請重新輸入");
				return;
			}
			formData.validateFields(
				(values: object, error: { [key: string]: string }) => {
					if (error) {
						for (const key in error) {
							if (error[key]) {
								Notify.error(error[key]);
							}
						}
					} else {
						Notify.success("註冊成功")
						;[...formData].forEach((child) => {
							if (child instanceof HTMLInputElement) {
								child.value = "";
							}
						});
					}
				}
			);
		}
	};
	return (
		<div className={style.regist}>
			<div className={style.regist__title}>
				<Image src={Aclogo} alt="Logo" width={40} height={40} />
				<h1>建立你的帳號</h1>
			</div>
			<Form ref={formRef}>
				<FormItem
					id="account"
					label="帳號"
					rule={checkAndReturnErrorMsg(20)}
					className={style.regist__formItem}>
					<Input id="account" />
				</FormItem>
				<FormItem
					id="name"
					label="名稱"
					rule={checkAndReturnErrorMsg(50)}
					className={style.regist__formItem}>
					<Input id="name" />
				</FormItem>
				<FormItem
					id="email"
					label="Email"
					rule={{
						validator: checkEmailFormat,
						errorMessage: "錯誤的 Email 格式"
					}}
					className={style.regist__formItem}>
					<Input id="email" type="email" />
				</FormItem>
				<FormItem
					id="password"
					label="密碼"
					rule={checkAndReturnErrorMsg(20)}
					className={style.regist__formItem}>
					<Input id="password" type="password" />
				</FormItem>
				<FormItem
					id="confirmedPassword"
					label="密碼確認"
					className={style.regist__formItem}>
					<Input id="confirmedPassword" type="password" />
				</FormItem>
				<Button
					size="large"
					onClick={handleSubmit}
					className={style.regist__formItem}>
					<span className={style.button_text}>註冊</span>
				</Button>
				<div className={style.regist__cancel}>
					<Link href="/login">取消</Link>
				</div>
			</Form>
		</div>
	);
};

export default Register;
