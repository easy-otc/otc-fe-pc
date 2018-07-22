import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, Icon, Button } from 'antd';

import '../styles/header.scss';

export default class HeaderLayout extends Component {

	handleMenuClick = e => {
		let { history } = this.props;
		history.push(e.key)
	}

	render() {
		return (
			<div className="otc-header clearfix">
				<Link className="header-logo" to="/"></Link>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={this.handleMenuClick}
					className="header-navs">
					<Menu.Item key="/">首页</Menu.Item>
					<Menu.Item key="/buy/BTC">场外交易</Menu.Item>
					<Menu.Item key="/invite">邀请好友</Menu.Item>
				</Menu>
				<div className="header-login">
					<Link to="/register">注册</Link>
					<Link to="/login">登录</Link>
				</div>
				<div className="header-logined">			
					{/*<Dropdown
						overlay={
							<Menu
								onClick={this.handleMenuClick}>
								<Menu.Item key="/buy/BTC">场外交易订单</Menu.Item>
							</Menu>
						}>
						<a className="ant-dropdown-link dropdown-button">
							<Icon type="file-text" />订单<Icon type="down" />
						</a>
					</Dropdown>*/}
					<Link to="/order/processing" className="ant-dropdown-link dropdown-button">
						<Icon type="file-text" />订单
					</Link>
					<Dropdown
						overlay={
							<div className="dropdown-list-wrap">
								<div className="dropdown-title">场外交易账户</div>
								<div className="dropdown-list">
									<div className="dropdown-item dropdown-header">
										<span className="coin-type">币种</span>
										<span className="usable">可用</span>
										<span className="frozen">冻结</span>
									</div>
									<div className="dropdown-item">
										<span className="coin-type">BTC</span>
										<span className="usable">0.0000000</span>
										<span className="frozen">0.0000000</span>
									</div>
									<div className="dropdown-item">
										<span className="coin-type">BTC</span>
										<span className="usable">0.0000000</span>
										<span className="frozen">0.0000000</span>
									</div>
									<div className="dropdown-item">
										<span className="coin-type">BTC</span>
										<span className="usable">0.0000000</span>
										<span className="frozen">0.0000000</span>
									</div>
									<div className="dropdown-item">
										<span className="coin-type">BTC</span>
										<span className="usable">0.0000000</span>
										<span className="frozen">0.0000000</span>
									</div>
								</div>
								<div className="dropdown-footer">
									<Button type="primary"><Link to="/wallet/otc">资产管理</Link></Button>
								</div>
							</div>
						}>
						<a className="ant-dropdown-link dropdown-button">
							<Icon type="pay-circle-o" />资产<Icon type="down" />
					    </a>
					</Dropdown>
					<Dropdown
						overlay={
							<Menu
								onClick={this.handleMenuClick}>
								<Menu.Item key="/profile">用户中心</Menu.Item>
								<Menu.Item key="/gg/buy">我的广告</Menu.Item>
								<Menu.Item key="/invite">邀请好友</Menu.Item>
								<Menu.Item key="/gift">礼品中心</Menu.Item>
								<Menu.Item key="/logout">退出</Menu.Item>
							</Menu>
						}>
						<a className="ant-dropdown-link dropdown-button">
							<Icon type="user" />Rongj<Icon type="down" />
					    </a>
					</Dropdown>
				</div>
			</div>
		)
	}
}