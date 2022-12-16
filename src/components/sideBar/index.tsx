import React from "react";
import { useState } from "react";
import Logo from "./icons/logo.svg";
import member from "./icons/member.svg";
import home from "./icons/home.svg";
import setting from "./icons/setting.svg";
import Logout from "./icons/logout.svg";

import styles from "./style.module.scss";
interface SidebarProps {
  isAgent?: boolean, 
}
const defaultProps: SidebarProps = {
	isAgent: false
};
const sideBarList = [
	{
		type: "home",
		title: "首頁",
		icon: home,
		path: "/home",
		isAdmin: false,
	},
	{
		type: "member",
		title: "個人資料",
		icon: member,
		path: "/user/self",
		isAdmin: false,
	},
	{
		type: "setting",
		title: "設定",
		icon: setting,
		path: "/setting",
		isAdmin: false,
	},
	{
		type: "adminMain",
		title: "推文清單",
		icon: home,
		path: "/admin_main",
		isAdmin: true,
	},
	{
		type: "adminUsers",
		title: "使用者列表",
		icon: member,
		path: "/admin_users",
		isAdmin: true,
	},
];
const SideBar = ({isAgent}:SidebarProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const filterSideMenu = sideBarList.filter(
		(item) => item.isAdmin == isAgent
	);
	const toggleSideMenu = (index: number) => {
		setActiveIndex(index);
		//Todo: link to page
	};
	const handleLogout = () => {
		// Todo: logout
		console.log("logout");
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Logo className={styles.logo} />
				<ul className={styles.sideBarList}>
					{filterSideMenu.map((item, idx) => (
						<li
							className={`${styles.sideBarItem} ${
								activeIndex === idx ? styles.active : ""
							}`}
							key={idx}
							onClick={() => toggleSideMenu(idx)}
						>
							<item.icon />
							<span className={styles.sideBarName}>{item.title}</span>
						</li>
					))}
				</ul>
				<div className={styles.logout} onClick={() => handleLogout}>
					<Logout className={styles.sideBarLogo} />
					<span>登出</span>
				</div>
			</div>
		</div>
	);
};

SideBar.defaultProps = defaultProps;

export default SideBar;
