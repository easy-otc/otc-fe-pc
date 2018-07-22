import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/passport.scss';

import { Icon, Button, Input, Radio, Select } from 'antd';
const Option = Select.Option;

@withRouter
export default class RetrieveByPhone extends Component {
	render() {

		let { location, history } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="passport-panel">
					<h3>找回密码</h3>
					<Radio.Group
						onChange={ e => history.push('/retrieve/'+e.target.value) }
						defaultValue="mail"
						buttonStyle="solid">
						<Radio.Button value="phone">手机找回</Radio.Button>
						<Radio.Button value="mail">邮箱找回</Radio.Button>
					</Radio.Group>
					<Input
						size="large"
						placeholder="请输入邮箱地址"/>
					<Input 
						size="large"
						addonAfter={<span className="btn-sendcode">发送验证码</span>}
						placeholder="请输入验证码"/>
					<Input 
						size="large"
						addonAfter={<span className="qrcode">
							<img src={require('../assets/bit_icon_1.png')} alt=""/>
						</span>}
						placeholder="请输入右侧图形验证码"/>
					<Button type="primary" disabled size="large">下一步</Button>
				</div>
			</div>
		)
	}
}