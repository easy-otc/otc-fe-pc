import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/passport.scss';

import { Icon, Button, Input, Checkbox, Select } from 'antd';
const Option = Select.Option;

export default class Login extends Component {
	render() {

		let { location, match } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="passport-panel">
					<h3>登录</h3>
					<Select 
						size="large"
						defaultValue="cn">
						<Option value="dmnj">多米尼加共和国 1809</Option>
						<Option value="gl">哥伦比亚 57</Option>
						<Option value="cn">中国 86</Option>
						<Option value="gs">哥斯达尼加 506</Option>
					</Select>
					<Input
						size="large"
						placeholder="请输入手机号码"/>
					<Input 
						size="large"
						placeholder="请输入密码(6-16个字符或字母组成)"/>
					<Input 
						size="large"
						addonAfter={<span className="qrcode">
							<img src={require('../assets/bit_icon_1.png')} alt=""/>
						</span>}
						placeholder="请输入右侧图形验证码"/>
					<Button type="primary" size="large">登录</Button>
					<div className="clearfix">
						<Link to="/retrieve/phone" className="btn-retrieve">忘记密码</Link>
					</div>
				</div>
			</div>
		)
	}
}