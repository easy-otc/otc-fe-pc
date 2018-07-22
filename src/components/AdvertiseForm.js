import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/advertise_form.scss';

import { Form, Button, Input, Radio, Select } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const Texarea = Input.Texarea;

export default class AdvertiseForm extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		let { coinType } = this.props;
		let {  } = this.state;

		return (
			<div className="advertise-form">
				<h2 className="ad-title">发布一个 { coinType } 交易广告</h2>
				<div className="ad-desc">
					<p>如果您经常交易 BTC，可以发布自己的 BTC 交易广告。如果您只想购买或出售一次，我们建议您直接从购买或出售列表中下单交易。</p>
					<p>发布一则交易广告是免费的。</p>
					<p>您的 CoinCola 钱包中至少需要有 0.05BTC，您的广告才会显示在交易列表中。</p>
					<p>发布交易广告的 CoinCola 用户每笔完成的交易需要缴纳 0.7% 的费用。</p>
					<p>您必须在交易广告或交易聊天中提供您的付款详细信息，发起交易后，价格会锁定，除非定价中有明显的错误。</p>
					<p>所有交流必须在 CoinCola 上进行，请注意高风险有欺诈风险的付款方式。</p>
				</div>


				<div className="trade-type">
					<div className="trade-title">交易类型</div>
					<Form className="trade-form">
						<FormItem
							required
							label={
								<span>
									<b>选择广告类型:</b>
									<em>您想要创建什么样的交易广告？如果您希望出售 BTC，请确保您在 CoinCola.com 的钱包中有 BTC。</em>
								</span>
							}>
							<RadioGroup>
								<Radio value={1}>在线出售 {coinType}</Radio>
								<Radio value={2}>在线购买 {coinType}</Radio>
							</RadioGroup>
						</FormItem>
						<FormItem
							required
							label={
								<span>
									<b>所在地:</b>
									<em>请选择你要发布广告的国家。</em>
								</span>
							}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择国家">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						</FormItem>
					</Form>
				</div>


				<div className="trade-more">
					<div className="trade-title">更多信息</div>
					<Form className="trade-form">
						<FormItem
							required
							label={
								<span>
									<b>货币:</b>
									<em>您希望交易付款的货币类型。</em>
								</span>
							}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择货币">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>溢价:</b>
									<em>基于市场价的溢出比例，市场价是根据部分大型交易所实时价格得出的，确保您的报价趋于一个相对合理范围，比如当前价格为7000，溢价比例为10%，那么价格为7700。</em>
								</span>
							}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择货币">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
							<p className="form-info">市场参考价: <span>49559.42 CNY/BTC</span></p>
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>价格:</b>
									<em>基于溢价比例得出的报价，10分钟更新一次。</em>
								</span>
							}>
							<Input />
							<p className="form-info">当前报价大概排在第 <span>1</span> 位</p>
						</FormItem>

						<FormItem
							label={
								<span>
									<b>最高价（选填）:</b>
									<em>广告最高可成交的价格，可帮助您在价格剧烈波动时保持稳定的盈利，比如最高价为12000，市场价处于12000以上时，您的广告将依旧以12000的价格展示出来</em>
								</span>
							}>
							<Input />
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>最小限额:</b>
									<em>一次交易的最低的交易限制。</em>
								</span>
							}>
							<Input />
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>最大限额:</b>
									<em>一次交易中的最大交易限制，您的钱包余额也会影响最大量的设置。</em>
								</span>
							}>
							<Input />
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>付款期限:</b>
									<em>您承诺在此期限内付款（分钟）</em>
								</span>
							}>
							<Input />
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>收款方式:</b>
								</span>
							}>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="选择收款方式">
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="tom">Tom</Option>
							</Select>
						</FormItem>

						<FormItem
							required
							label={
								<span>
									<b>广告留言:</b>
								</span>
							}>
							<Input />
						</FormItem>

						<FormItem
							label={
								<span>
									<b>仅限实名认证的交易者:</b>
									<em>启用后，仅限于已完成实名认证的用户与本广告交易。</em>
								</span>
							}>
							<RadioGroup>
								<Radio value={1}>启用</Radio>
								<Radio value={2}>不启用</Radio>
							</RadioGroup>
						</FormItem>

						<FormItem
							label={
								<span>
									<b>仅限受信任的交易者:</b>
									<em>启用后，仅限于自己信任的用户与本广告交易。</em>
								</span>
							}>
							<RadioGroup>
								<Radio value={1}>启用</Radio>
								<Radio value={2}>不启用</Radio>
							</RadioGroup>
						</FormItem>

					</Form>
				</div>


				<div className="trade-senior">
					<div className="trade-title">高级设置</div>
					<Form className="trade-form">
						<FormItem
							label={
								<span>
									<b>开放时间:</b>
									<em>您希望广告自动显示和隐藏的天数和小时数。</em>
								</span>
							}>
							<div className="time-group">
								<div className="time-item">
									<span>星期一: </span>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="开始时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="结束时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
								</div>
								<div className="time-item">
									<span>星期二: </span>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="开始时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="结束时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
								</div>
								<div className="time-item">
									<span>星期三: </span>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="开始时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder="结束时间">
										<Option value="jack">Jack</Option>
										<Option value="lucy">Lucy</Option>
										<Option value="tom">Tom</Option>
									</Select>
								</div>
							</div>
						</FormItem>
					</Form>
				</div>

				<div className="toggle-senior">
					<span className="btn-toggle-senior">显示高级设置</span>
				</div>

				<div className="advertise-submit">
					<Button type="primary">立即发布</Button>
				</div>

			</div>
		)
	}
}