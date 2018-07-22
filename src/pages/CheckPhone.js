import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/account_panel.scss';

import { Icon, Button, Input, Steps } from 'antd';
const Step = Steps.Step;

export default class CheckPhone extends Component {
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
								<Steps current={0}>
									<Step title="验证旧手机" />
									<Step title="验证新号码" />
									<Step title="完成" />
								</Steps>
								<p>修改手机号，24小时内限制提币和卖币。一个手机号只能绑定一个账号。更换手机号后，下次登录可使用新手机号登录。</p>
								{/*<Input 
									size="large"
									prefix={<Icon type="mail"/>}
									placeholder="请输入邮箱地址"/>
								<Input 
									size="large"
									prefix={<Icon type="safety"/>}
									addonAfter={<span className="btn-sendcode">发送验证码</span>}
									placeholder="请输入验证码"/>*/}
								<Button type="primary">验证原手机号</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}