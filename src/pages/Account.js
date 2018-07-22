import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/account.scss';

import { Icon, Button } from 'antd';

export default class Account extends Component {

	render() {

		let { location, match } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<UserCenterMenu />
					<div className="otc-rightpanel">
						<div className="otc-crumbs">安全设置</div>
						<div className="otc-user-content">
							<div className="account-list">
								<div className="account-item">
									<span className="account-icon">
										<Icon type="safety" />
									</span>
									<div className="account-txt">
										<h3>资金密码</h3>
										<p>提现、修改安全设置时输入</p>
									</div>
									<Link to="/account/capital"><Button type="primary">立即设置</Button></Link>
								</div>
								<div className="account-item">
									<span className="account-icon">
										<Icon type="mail" />
									</span>
									<div className="account-txt">
										<h3>绑定邮箱</h3>
										<p>用于登录、提币、修改安全设置时输入</p>
									</div>
									<Link to="/account/mail"><Button type="primary">立即设置</Button></Link>
								</div>
								<div className="account-item">
									<span className="account-icon">
										<Icon type="mobile" />
									</span>
									<div className="account-txt">
										<h3>绑定手机</h3>
										<p>提现，修改密码，及安全设置时用以收取验证短信</p>
									</div>
									<Link to="/account/phone"><Button type="primary">修改</Button></Link>
								</div>
								<div className="account-item">
									<span className="account-icon">
										<Icon type="lock" />
									</span>
									<div className="account-txt">
										<h3>登录密码</h3>
										<p>用于登录账户时输入</p>
									</div>
									<Link to="/account/password"><Button type="primary">修改</Button></Link>
								</div>
								<div className="account-item">
									<span className="account-icon">
										<Icon type="google" />
									</span>
									<div className="account-txt">
										<h3>谷歌验证</h3>
										<p>绑定后，登录、提现时需要谷歌二次验证</p>
									</div>
									<Link to="/account/google"><Button type="primary">启用</Button></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}