import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

import '../styles/header.scss';

export default class HeaderLayout extends Component {
	render() {
		return (
			<div className="otc-header clearfix">
				<Link className="header-logo" to="/"></Link>
				<Menu
					theme="dark"
					mode="horizontal"
					className="header-navs">
					<Menu.Item key="1">首页</Menu.Item>
					<Menu.Item key="2">场外交易</Menu.Item>
					<Menu.Item key="3">邀请</Menu.Item>
				</Menu>
				<div className="header-login">
					<Link to="/register">注册</Link>
					<Link to="/login">登录</Link>
				</div>
			</div>
		)
	}
}