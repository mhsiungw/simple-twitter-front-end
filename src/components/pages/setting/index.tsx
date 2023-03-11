import React, { useRef } from "react";
import Form from "components/form";
import FormItem from "components/form/components/form-item";
import Input from "components/input";
import Button from "components/button";
import SideBar from "components/sideBar";
import { CustomHTMLFormElement } from "components/form";
import styles from "./style.module.scss";

const SettingPage = () => {
	const formRef = useRef<CustomHTMLFormElement>(null);

	const _handleSubmit = () => {
		if (formRef.current && formRef.current.validateFields) {
			formRef.current.validateFields((values, error) => {
				console.log(values);
			});
		}
	};

	return (
		<div className={styles["setting-page"]}>
			<SideBar/>
			<div className={styles["right-section"]}>
				<div className={styles.title}>帳戶設定</div>
				<div className={styles["form-wrapper"]}>
					<Form
						ref={formRef}
					>
						<FormItem
							id="username"
							label="帳號"
						>
							<Input/>
						</FormItem>
						<FormItem
							id="name"
							label="名稱"
						>
							<Input/>
						</FormItem>
						<FormItem
							id="email"
							label="Email"
						>
							<Input/>
						</FormItem>
						<FormItem
							id="password"
							label="密碼"
						>
							<Input/>
						</FormItem>
						<FormItem
							id="passwordcheck"
							label="密碼確認"
						>
							<Input/>
						</FormItem>
					</Form>
					<Button
						className={styles["button-wrapper"]}
						size="middle"
						onClick={_handleSubmit}
					>
						儲存
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SettingPage;
