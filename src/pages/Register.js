import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/passport.scss';

import { Icon, Button, Input, Checkbox, Select } from 'antd';
const Option = Select.Option;

export default class Register extends Component {
	render() {

		let { location, match } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="passport-panel">
					<h3>手机注册</h3>
					<Input 
						size="large"
						placeholder="请输入英文用户名"/>
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
						addonAfter={<span className="btn-sendcode">发送验证码</span>}
						placeholder="请输入验证码"/>
					<Checkbox>我已阅读并接受<a href="">《CoinCola 产品服务条款》</a></Checkbox>
					<Button type="primary" size="large">注册</Button>
				</div>
			</div>
		)
	}
}