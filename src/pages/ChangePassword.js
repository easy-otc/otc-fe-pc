import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/account_panel.scss';

import { Icon, Button, Input } from 'antd';

export default class ChangePassword extends Component {
	render() {

		let { location, match } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<UserCenterMenu />
					<div className="otc-rightpanel">
						<div className="otc-crumbs">安全设置 > 设置资金密码</div>
						<div className="otc-user-content">
							<div className="account-panel">
								<p>登录密码请不要与资金密码或其他网站密码一致，由此产生的账号被盗，本站概不负责。</p>
								<Input 
									size="large"
									prefix={<Icon type="lock"/>}
									placeholder="请输入原登录密码"/>
								<Input 
									size="large"
									prefix={<Icon type="lock"/>}
									placeholder="请输入新登录密码"/>
								<Input 
									size="large"
									prefix={<Icon type="lock"/>}
									placeholder="请再次输入新登录密码"/>
								<Button type="primary">确定</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}