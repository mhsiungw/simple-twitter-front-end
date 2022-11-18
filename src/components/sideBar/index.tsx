import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "./icons/logo.svg";
import member from "./icons/member.svg";
import memberActive from "./icons/member-active.svg";
import home from "./icons/home.svg";
import homeActive from "./icons/home-active.svg";
import setting from "./icons/setting.svg";
import settingActive from "./icons/setting-active.svg";
import logout from "./icons/logout.svg";

import styles from "./style.module.scss";

const sideBarList = [
	{
		type: "home",
		title: "首頁",
		icon: home,
		iconActive: homeActive,
		path: "/home",
		isAdmin: false,
	},
	{
		type: "member",
		title: "個人資料",
		icon: member,
		iconActive: memberActive,
		path: "/user/self",
		isAdmin: false,
	},
	{
		type: "setting",
		title: "設定",
		icon: setting,
		iconActive: settingActive,
		path: "/setting",
		isAdmin: false,
	},
	{
		type: "adminMain",
		title: "推文清單",
		icon: home,
		iconActive: homeActive,
		path: "/admin_main",
		isAdmin: true,
	},
	{
		type: "adminUsers",
		title: "使用者列表",
		icon: member,
		iconActive: memberActive,
		path: "/admin_users",
		isAdmin: true,
	},
];
const SideBar = () => {
	//Todo: get isUserAdmin from localStorage
	const isUserAdmin = false;
	const [activeItem, setActiveItem] = useState<string>("home");
	const filterSideMenu = sideBarList.filter(
		(item) => item.isAdmin === isUserAdmin
	);
	const toggleSideMenu = (type: string) => {
		setActiveItem(type);
	};
	const handleLogout = () => {
		// Todo: logout
		console.log("logout");
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Image className={styles.logo} src={logo.src} alt="logo" />
				<ul className={styles.sideBarList}>
					{filterSideMenu.map((item, idx) => (
						<li
							className={`${styles.sideBarItem} ${
								activeItem === item.type ? styles.active : ""
							}`}
							key={idx}
							onClick={() => toggleSideMenu(item.type)}
						>
							<Image
								className={styles.sideBarLogo}
								src={
									activeItem === item.type ? item.iconActive.src : item.icon.src
								}
								alt="side-bar-item"
							/>
							<span className={styles.sideBarName}>{item.title}</span>
						</li>
					))}
				</ul>
				<div className={styles.logout} onClick={() => handleLogout}>
					<Image
						className={styles.sideBarLogo}
						src={logout.src}
						alt="side-bar-item"
					/>
					<span>登出</span>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
