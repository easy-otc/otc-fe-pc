import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/account_panel.scss';

import { Icon, Button, Input } from 'antd';

export default class CapitalPassword extends Component {
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
								<p>资金密码将用于比特币的提款，保护您的比特币不被他人轻易盗用</p>
								<Input 
									size="large"
									prefix={<Icon type="lock"/>}
									placeholder="输入新资金密码"/>
								<Input 
									size="large"
									prefix={<Icon type="lock"/>}
									placeholder="再次输入新密码"/>
								<Button type="primary">确定</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}