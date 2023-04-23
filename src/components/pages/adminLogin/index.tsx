import React, { useRef }  from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "components/form";
import FormItem from "components/form/components/form-item";
import Input from "components/input";
import Button from "components/button";
import Notify from "components/notify";
import Image from "next/image";
import { CustomHTMLFormElement } from "components/form";

import styles from "./style.module.scss";
import logo from "../../../assets/img/logo.png";

export const checkWordLength = (wordLimit: number) => {
	return {
		validator: (word: string) => word.length <= wordLimit,
		errorMessage: `字數不可超過 ${wordLimit} 字上限`
	};
};

const Login = () => {
	const formRef = useRef<CustomHTMLFormElement>(null);
	const router = useRouter();
	const _handleSubmit = () => {
		if (formRef.current && formRef.current.validateFields) {
			formRef.current.validateFields(async(values, error) => {
				const correspondList: { [key: string]: string } = {
					username: "帳號",
					password: "密碼",
				};
				for (const key in values) {
					if (!values[key]) {
						Notify.error(`${correspondList[key]} 不可為空白 `);
						return;
					}
				}
				//接收登入api回傳結果
				const success = true;	
				if (success) {
					Notify.success("登入成功");
					router.push("/admin_main");
				}else {
					Notify.error("error");
				}
			});
			
		}
	};
	return (
		<>
			<div className={styles["login-wrap"]}>
				<div className={styles.logo}>
					<Image src={logo} alt="img" />
				</div>
				<div className={styles["login-title"]}>後台登入</div>
				<div className={styles["form-wrapper"]}>
					<Form ref={formRef}>
						<FormItem
							id="username"
							label="帳號"
							rule={checkWordLength(20)}
						>
							<Input/>
						</FormItem>
						<FormItem
							id="password"
							label="密碼"
							rule={checkWordLength(20)}
						>
							<Input/>
						</FormItem>
					</Form>
					<Button
						className={styles["button-wrapper"]}
						size="large"
						onClick={_handleSubmit}
					>
            登入
					</Button>
					<div className={styles.links}>
						<Link href="/login">
							<div className={`${styles.link} ${styles.admin}`}>前台登入</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
