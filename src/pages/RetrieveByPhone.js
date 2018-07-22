import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import '../styles/passport.scss';

import { Icon, Button, Input, Radio, Select } from 'antd';
const Option = Select.Option;

export default class RetrieveByPhone extends Component {
	render() {

		let { location, history } = this.props;

		return (
			<div className="otc-body clearfix">
				<div className="passport-panel">
					<h3>找回密码</h3>
					<Radio.Group
						onChange={ e => history.push('/retrieve/'+e.target.value) }
						defaultValue="phone"
						buttonStyle="solid">
						<Radio.Button value="phone">手机找回</Radio.Button>
						<Radio.Button value="mail">邮箱找回</Radio.Button>
					</Radio.Group>
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