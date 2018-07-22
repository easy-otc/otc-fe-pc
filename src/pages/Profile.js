import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/profile.scss';

import { Icon, Button, Input } from 'antd';
const TextArea = Input.TextArea;

export default class Porfile extends Component {


	render() {

		let { location, match } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<UserCenterMenu />
					<div className="otc-rightpanel">
						<div className="otc-crumbs">基本信息</div>
						<div className="otc-user-content">
							<div className="user-profile clearfix">
								<div className="profile-avator">
									<img src="https://cdn.coincola.com/default/RO.jpg"/>
									<span>编辑头像</span>
								</div>
								<div className="profile-name">Username</div>
							</div>

							<div className="profie-info">
								<ul className="profile-list">
									<li>
										<span className="profile-label">身份验证：</span>
										<div className="profile-content">
											<Link to="/verification">未验证</Link>
										</div>
									</li>
									<li>
										<span className="profile-label">电子邮件：</span>
										<div className="profile-content">
											<Link to="/account/mail">未验证</Link>
										</div>
									</li>
									<li>
										<span className="profile-label">手机号码：</span>
										<div className="profile-content">
											{/*<span>已验证</span>*/}
											<Link to="/account/phone">未验证</Link>
										</div>
									</li>
									<li>
										<span className="profile-label">注册时间：</span>
										<div className="profile-content">
											<span>2018-07-18 09:36:15</span>
										</div>
									</li>
									<li>
										<span className="profile-label">第一次交易时间：</span>
										<div className="profile-content">
											<span>--</span>
										</div>
									</li>
									<li>
										<span className="profile-label">信任人数：</span>
										<div className="profile-content">
											<span>被 0 人信任</span>
										</div>
									</li>
									<li>
										<span className="profile-label">累计交易次数：</span>
										<div className="profile-content">
											<span>0</span>
										</div>
									</li>
									<li>
										<span className="profile-label">累计交易量：</span>
										<div className="profile-content">
											<span>0 BTC</span>
										</div>
									</li>
								</ul>

								<TextArea
									rows={5}
									placeholder="简介，在您的公共资料上展示您的介绍信息。纯文本，不超过200个字" />
								<p>请勿填写您 CoinCola 的注册邮箱，避免收到钓鱼邮件</p>
								<Button type="primary">保存</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}