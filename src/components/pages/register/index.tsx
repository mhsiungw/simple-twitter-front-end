import React, { useRef } from "react";
import Image from "next/image";
import Aclogo from "../../../assets/img/ac_logo.png";
import Form, { CustomHTMLFormElement } from "components/form/index";
import FormItem from "components/form/components/form-item";
import Input from "components/input";
import Button from "components/button";
import Notify from "components/notify";
import style from "./style.module.scss";
import Link from "next/link";

export const checkWordLength = (wordLimit: number) => {
	return {
		validator: (word: string) => word.length <= wordLimit,
		errorMessage: `字數不可超過 ${wordLimit} 字上限`
	};
};

export const checkEmailFormat = (userInput: string) => {
	const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return pattern.test(userInput);
};

export const checkPasswordIsValid: (
  password: string,
  confirmedPassword: string
) => boolean = (password, confirmedPassword) => {
	return password === confirmedPassword;
};

const Register = () => {
	const formRef = useRef<CustomHTMLFormElement>(null);
	// const [disabled, setDisabled] = useState(true);

	const handleSubmit = () => {
		const formData: null | HTMLFormElement = formRef.current;
		if (formData && formData.validateFields) {
			formData.validateFields(
				(
					values: { [key: string]: string },
					error: { [key: string]: string }
				) => {
					const correspondList: { [key: string]: string } = {
						account: "帳號",
						name: "名稱",
						email: "Email",
						password: "密碼",
						confirmedPassword: "確認用密碼"
					};
					for (const key in values) {
						if (!values[key]) {
							Notify.error(`${correspondList[key]} 不可為空白 `);
							return;
						}
					}
					if (error) {
						for (const key in error) {
							if (error[key]) {
								Notify.error(error[key]);
							}
						}
					} else if (
						!checkPasswordIsValid(values.password, values.confirmedPassword)
					) {
						Notify.error("密碼不一致，請重新輸入");
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
					rule={checkWordLength(20)}
					className={style.regist__formItem}>
					<Input id="account" />
				</FormItem>
				<FormItem
					id="name"
					label="名稱"
					rule={checkWordLength(50)}
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
					rule={checkWordLength(20)}
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
