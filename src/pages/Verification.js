import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import UserCenterMenu from '../components/UserCenterMenu';

import '../styles/verification.scss';

import { Icon, Button, Input, Select, Tag, Form, Checkbox } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

export default class Verification extends Component {
	render() {

		let { location, match } = this.props;
		const formItemLayout = {
			labelCol: { span: 2 },
			wrapperCol: { span: 12 }
		};

		return (
			<div className="otc-body clearfix">
				<div className="otc-flex">
					<UserCenterMenu />
					<div className="otc-rightpanel">
						<div className="otc-crumbs">身份验证</div>
						<div className="otc-user-content">
							<div className="warning-message">
								<Icon type="exclamation-circle-o"/>
								<span>为确保交易安全，保障您的合法权益，请您完成身份验证！我们提供安全高效实时联网的官方身份认证服务，具有更高级别的安全保护。身份验证一旦成功，不予修改和解除认证。建议您谨慎选择，真实填写。</span>
							</div>

							<div className="ver-list">
								<div className="ver-item">
									<div className="ver-header">
										<span className="ver-icon ver-icon-sfz"></span>
										身份证
										<Tag color="red">未验证</Tag>
										<span className="ver-header-btn">展开<Icon type="up"/></span>
									</div>
									<div className="ver-content">
										<Form>
											<FormItem {...formItemLayout} label="国家/地区">
												<Select
													showSearch
													style={{ width: 200 }}
													placeholder="选择国家">
													<Option value="jack">Jack</Option>
													<Option value="lucy">Lucy</Option>
													<Option value="tom">Tom</Option>
												</Select>
											</FormItem>
											<FormItem {...formItemLayout} label="姓名">
												<Input />
											</FormItem>
											<FormItem {...formItemLayout} label="身份证号">
												<Input />
											</FormItem>
											<FormItem {...formItemLayout} label>
												<Checkbox>我承诺提交的信息属于本人所有，不存在盗用他人证件的行为</Checkbox>
											</FormItem>
											<FormItem {...formItemLayout} label>
												<Button type="primary">提交</Button>
											</FormItem>
										</Form>
									</div>
								</div>
								<div className="ver-item">
									<div className="ver-header">
										<span className="ver-icon ver-icon-sfz"></span>
										身份证
										<Tag color="red">未验证</Tag>
										<span className="ver-header-btn">展开<Icon type="up"/></span>
									</div>
									<div className="ver-content hide">
										<Form>
											<FormItem {...formItemLayout} label="国家/地区">
												<Select
													showSearch
													style={{ width: 200 }}
													placeholder="选择国家">
													<Option value="jack">Jack</Option>
													<Option value="lucy">Lucy</Option>
													<Option value="tom">Tom</Option>
												</Select>
											</FormItem>
											<FormItem {...formItemLayout} label="姓名">
												<Input />
											</FormItem>
											<FormItem {...formItemLayout} label="身份证号">
												<Input />
											</FormItem>
											<FormItem {...formItemLayout} label>
												<Checkbox>我承诺提交的信息属于本人所有，不存在盗用他人证件的行为</Checkbox>
											</FormItem>
											<FormItem {...formItemLayout} label>
												<Button type="primary">提交</Button>
											</FormItem>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}